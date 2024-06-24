import React from 'react';
import { Paper, Typography } from '@mui/material';

function Match({ match }) {
    return (
        <Paper elevation={3} style={{ margin: '10px', padding: '10px', textAlign: 'center' }}>
            <Typography>{match.player1} vs {match.player2}</Typography>
            <Typography>{match.score}</Typography>
        </Paper>
    );
}

export default Match;
