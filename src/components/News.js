import React from 'react';
import {makeStyles} from '@mui/styles';

const leftBackgroundImage = '../jha-kanak.jpg';
const rightBackgroundImage = '../9.webp';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 65px)',
        position: 'relative',
        overflow: 'hidden',
    },
    leftBackground: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '25vw',
        height: '100%',
        backgroundImage: `url(${leftBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1,
    },
    rightBackground: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: '25vw',
        height: '100%',
        backgroundImage: `url(${rightBackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1,
    },
    posterImage: {
        height: 'calc(100vh - 65px)',
        width: '50vw',
        maxWidth: '70%',
        objectFit: 'cover',
        zIndex: 1,
    },
});

const News = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.leftBackground}></div>
            <div className={classes.rightBackground}></div>
            <img
                src="../TournamentPoster.png"
                alt="Poster Turneu Tenis de Masă"
                className={classes.posterImage}
            />
        </div>
    );
};

export default News;
