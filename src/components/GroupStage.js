import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';

function GroupStage({ groups }) {
    return (
        <div>
            <Typography variant="h5">Grupuri</Typography>
            <Grid container spacing={4}>
                {groups.map((group, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Paper elevation={3}>
                            <Typography variant="h6">Grupa {index + 1}</Typography>

                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default GroupStage;
