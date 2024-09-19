import React, { useEffect, useState } from 'react';
import { Grid, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function TournamentList() {
    const [tournaments, setTournaments] = useState([]);
    const [filteredTournaments, setFilteredTournaments] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('http://localhost:8081/api/tournaments')
            .then(response => response.json())
            .then(data => {
                setTournaments(data);
                setFilteredTournaments(data);
            });
    }, []);

    const handleSearchChange = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
        const filteredList = tournaments.filter(tournament =>
            tournament.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredTournaments(filteredList);
    };

    const getRowStyle = (isActive) => ({
        textDecoration: 'none',
        color: 'inherit',
        backgroundColor: isActive ? '#e0ffe0' : '#ffe0e0',
        transition: 'background-color 0.3s ease',
    });

    const hoverStyle = (isActive) => ({
        backgroundColor: isActive ? '#b2fab4' : '#ffcccc',
    });

    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <TextField
                    label="Search Tournaments"
                    variant="outlined"
                    fullWidth
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{ marginBottom: '16px', marginTop: '16px' }}
                />
            </Grid>
            <Grid item xs={12}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell  style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Name</TableCell>
                                <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Date</TableCell>
                                <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Players</TableCell>
                                <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Location</TableCell>
                                <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Registration</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredTournaments.map(tournament => (
                                <TableRow
                                    key={tournament.id}
                                    component={tournament.status ? null : Link}
                                    to={tournament.status ? null : `/tournaments/${tournament.id}`}
                                    hover
                                    style={getRowStyle(tournament.status)}
                                    onMouseEnter={e => e.currentTarget.style.backgroundColor = hoverStyle(tournament.status).backgroundColor}
                                    onMouseLeave={e => e.currentTarget.style.backgroundColor = getRowStyle(tournament.status).backgroundColor}
                                >
                                    <TableCell >{tournament.name}</TableCell>
                                    <TableCell align="center">{tournament.date}</TableCell>
                                    <TableCell align="center">{tournament.numberOfPlayers}</TableCell>
                                    <TableCell align="center">{tournament.location}</TableCell>
                                    <TableCell align="center">
                                        {tournament.status ? (
                                            <Button
                                                component={Link}
                                                to={`/tournaments/${tournament.id}/register`}
                                                variant="contained"
                                                color="primary"
                                                sx={{ borderRadius: '14px' }}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                Register
                                            </Button>
                                        ) : (
                                            'Closed'
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}

export default TournamentList;
