import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Card, CardContent, Typography, Avatar} from '@mui/material';

function PlayerProfileInitial() {
    const {id} = useParams();
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        fetch(`/api/players/${id}`)
            .then(response => response.json())
            .then(data => setPlayer(data));
    }, [id]);

    if (!player) return <div>Loading...</div>;

    return (
        <Card>
            <CardContent>
                <Avatar src={player.avatar} alt={player.name}/>
                <Typography variant="h5">{player.name}</Typography>
                <Typography variant="body2">{player.bio}</Typography>
            </CardContent>
        </Card>
    );
}

export default PlayerProfileInitial;
