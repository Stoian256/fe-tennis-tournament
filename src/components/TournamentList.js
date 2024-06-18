import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function TournamentList() {
    const [tournaments, setTournaments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/api/tournaments')
            .then(response => response.json())
            .then(data => setTournaments(data));
    }, []);

    return (
        <Grid container spacing={4}>
            {tournaments.map(tournament => (
                <Grid item key={tournament.id} xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component={Link} to={`/tournament/${tournament.id}`}>
                                {tournament.name}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default TournamentList;
