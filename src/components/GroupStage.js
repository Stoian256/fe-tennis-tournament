import React from 'react';
import { Paper, Typography, Grid, Table, TableBody, TableCell, TableHead, TableRow, Avatar } from '@mui/material';


function GroupStage({ groups }) {
    return (
        <div>
            {groups.map((group, index) => (
                <Paper key={index} elevation={3} style={{ margin: '20px', padding: '20px' }}>
                    <Typography variant="h5">Group {group.name}</Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Position</TableCell>
                                <TableCell>Player</TableCell>
                                <TableCell>P</TableCell>
                                <TableCell>W</TableCell>
                                <TableCell>D</TableCell>
                                <TableCell>L</TableCell>
                                <TableCell>GS</TableCell>
                                <TableCell>GA</TableCell>
                                <TableCell>GD</TableCell>
                                <TableCell>PTS</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {group.players.map((player, index) => (
                                <TableRow key={player.id} style={{ backgroundColor: index === 0 ? '#ffd700' : 'inherit' }}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>
                                        <Avatar src={player.flag} alt={player.name} style={{ marginRight: '10px' }} />
                                        {player.name}
                                    </TableCell>
                                    <TableCell>{player.p}</TableCell>
                                    <TableCell>{player.w}</TableCell>
                                    <TableCell>{player.d}</TableCell>
                                    <TableCell>{player.l}</TableCell>
                                    <TableCell>{player.gs}</TableCell>
                                    <TableCell>{player.ga}</TableCell>
                                    <TableCell>{player.gd}</TableCell>
                                    <TableCell>{player.pts}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            ))}
        </div>
    );
}

export default GroupStage;
