import React from 'react';
import {
    Paper,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Typography,
    Avatar,
    TableContainer,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import styles from './GroupStage.module.css';

function GroupStage({ groups }) {
    const isScreenWideEnough = useMediaQuery('(min-width:870px)');

    return (
        <div className="container">
            {groups.map((group, groupIndex) => (
                <Paper key={groupIndex} elevation={3} className={styles.groupPaper}>
                    <Typography variant="h5">Group {group.name}</Typography>
                    <TableContainer component={Paper} className={styles.tableContainer}>
                        <Table className="table-with-margin">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Position</TableCell>
                                    <TableCell>Player</TableCell>
                                    <TableCell>P</TableCell>
                                    {isScreenWideEnough && (
                                        <>
                                            <TableCell className={isScreenWideEnough ? styles.hiddenCell : styles.hidden}>W</TableCell>
                                            <TableCell className={isScreenWideEnough ? styles.hiddenCell : styles.hidden}>L</TableCell>
                                            <TableCell className={isScreenWideEnough ? styles.hiddenCell : styles.hidden}>SW</TableCell>
                                            <TableCell className={isScreenWideEnough ? styles.hiddenCell : styles.hidden}>SL</TableCell>
                                        </>
                                    )}
                                    <TableCell>PTS</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {group.positions.map((player, index) => (
                                    <TableRow key={player.id} className={index < 2 ? styles.highlightedRow : ''}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>
                                            <div className={styles.flagContainer}>
                                                <Avatar src={player.player.flag} alt={player.player.name} className={styles.flag} />
                                                <Link to={`/profile/${player.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                    <span>{player.player.name}</span>
                                                </Link>
                                            </div>
                                        </TableCell>
                                        {isScreenWideEnough && (
                                            <>
                                                <TableCell className={isScreenWideEnough ? styles.hiddenCell : styles.hidden}>{player.w}</TableCell>
                                                <TableCell className={isScreenWideEnough ? styles.hiddenCell : styles.hidden}>{player.l}</TableCell>
                                                <TableCell className={isScreenWideEnough ? styles.hiddenCell : styles.hidden}>{player.setsWon}</TableCell>
                                                <TableCell className={isScreenWideEnough ? styles.hiddenCell : styles.hidden}>{player.setsLost}</TableCell>
                                            </>
                                        )}
                                        <TableCell>{player.p}</TableCell>
                                        <TableCell>{player.points}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            ))}
        </div>
    );
}

export default GroupStage;
