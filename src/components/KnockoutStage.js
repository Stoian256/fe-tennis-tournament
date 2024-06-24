import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import '../styles.css';

function KnockoutStage({ stages }) {
    return (
        <div className="knockout-stage">
            <div className="stage-round">
                <div className="stage-header">
                    <Typography variant="h6">Round of 16</Typography>
                </div>
                <div className="stage-content">
                    {stages.roundOf16.map((match, index) => (
                        <Paper key={index} className="match" elevation={3}>
                            <Typography>{match.player1} vs {match.player2}</Typography>
                            <Typography>{match.score}</Typography>
                        </Paper>
                    ))}
                </div>
            </div>
            <div className="stage-round">
                <div className="stage-header">
                    <Typography variant="h6">Quarterfinals</Typography>
                </div>
                <div className="stage-content">
                    {stages.quarterfinals.map((match, index) => (
                        <Paper key={index} className="match" elevation={3}>
                            <Typography>{match.player1} vs {match.player2}</Typography>
                            <Typography>{match.score}</Typography>
                        </Paper>
                    ))}
                </div>
            </div>
            <div className="stage-round">
                <div className="stage-header">
                    <Typography variant="h6">Semifinals</Typography>
                </div>
                <div className="stage-content">
                    {stages.semifinals.map((match, index) => (
                        <Paper key={index} className="match" elevation={3}>
                            <Typography>{match.player1} vs {match.player2}</Typography>
                            <Typography>{match.score}</Typography>
                        </Paper>
                    ))}
                </div>
            </div>
            <div className="stage-final">
                <div className="stage-header">
                    <Typography variant="h6">Final</Typography>
                </div>
                <Paper className="match" elevation={3}>
                    <Typography>{stages.final.player1} vs {stages.final.player2}</Typography>
                    <Typography>{stages.final.score}</Typography>
                </Paper>
            </div>
        </div>
    );
}

export default KnockoutStage;
