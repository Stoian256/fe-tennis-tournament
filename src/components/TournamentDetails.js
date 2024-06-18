import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, Paper, Divider } from '@mui/material';
import GroupStage from './GroupStage';
import KnockoutStage from './KnockoutStage';

function TournamentDetails() {
    const { id } = useParams();
    const [tournament, setTournament] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8081/api/tournaments/${id}`)
            .then(response => response.json())
            .then(data => setTournament(data));
    }, [id]);

    if (!tournament) return <div>Loading...</div>;

    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="h4">{tournament.name}</Typography>
                    <Typography variant="body1">{tournament.phase}</Typography>
                </CardContent>
            </Card>
            <Divider />
            <GroupStage groups={tournament.groupList} />
            <Divider />
            <KnockoutStage matches={tournament.matches} />
        </div>
    );
}

export default TournamentDetails;
