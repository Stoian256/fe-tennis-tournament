import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Divider, Grid, CircularProgress, Avatar, Box } from '@mui/material';
import styles from './PlayerProfile.module.css';

function PlayerProfile() {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/players/${id}`)
            .then(response => response.json())
            .then(data => {
                setPlayer(data);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '80vh' }}>
                <CircularProgress size={65} thickness={4} />
            </Grid>
        );
    }

    if (!player) {
        return <div>No player found!</div>;
    }

    return (
        <div className={styles.root}>
            <Card className={styles.card}>
                <CardContent>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Avatar alt={player.name} src={player.avatar} style={{ width: '150px', height: '150px', marginBottom: '10px' }} />
                    </div>
                    <Typography variant="h3" align="center" gutterBottom>
                        {player.name}
                    </Typography>
                    <Divider />
                    <Box mt={2}>
                        <Typography variant="body1">
                            <strong>Age:</strong> {player.age}
                        </Typography>
                        <Typography variant="body1" style={{ display: 'flex', alignItems: 'center' }}>
                            <strong style={{ marginRight: '10px' }}>Country:</strong>
                            <img src={player.flag} alt={`${player.country} flag`} className={styles.flag} />
                            <span>{player.country}</span>
                        </Typography>
                        <Typography variant="body1">
                            <strong>Dominant hand:</strong> {player.dominantHand}
                        </Typography>
                        <Typography variant="body1">
                            <strong>Player style:</strong> {player.style}
                        </Typography>
                        <Typography variant="body1">
                            <strong>Ranking:</strong> {player.ranking}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
}

export default PlayerProfile;
