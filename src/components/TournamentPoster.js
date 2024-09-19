import React from 'react';
import { Container, Paper, Typography, Button } from '@mui/material';
import {makeStyles} from'@mui/styles'

const useStyles = makeStyles({
    root: {

        textAlign: 'center',
        backgroundColor: '#f5f5f5',
    },
    posterImage: {
        height: '95vh',
        objectFit: 'cover',

    },
    infoText: {
        margin: '16px 0',
    },
    button: {
        marginTop: '16px',
    },
});

function TournamentPoster() {
    const classes = useStyles();

    return (
        <Container>
            <Paper className={classes.root} elevation={3}>
                <img
                    src="../TournamentPoster.png"
                    alt="Poster Turneu Tenis de Masă"
                    className={classes.posterImage}
                />
            </Paper>
        </Container>
    );
}

export default TournamentPoster;
