import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Divider } from '@mui/material';
import GroupStage from './GroupStage';
import KnockoutStage from './KnockoutStage';


function TournamentDetails() {
    const { id } = useParams();
    const [tournament, setTournament] = useState(null);

    const data = {
        "name": "Ping Pong Championship",
        "description": "Exciting ping pong tournament",
        "groups": [
            {
                "name": "A",
                "players": [
                    {
                        "id": 1,
                        "name": "Player 1",
                        "flag": "flag1.png",
                        "p": 3,
                        "w": 3,
                        "d": 0,
                        "l": 0,
                        "gs": 6,
                        "ga": 2,
                        "gd": 4,
                        "pts": 9
                    },
                    {
                        "id": 2,
                        "name": "Player 2",
                        "flag": "flag2.png",
                        "p": 3,
                        "w": 2,
                        "d": 0,
                        "l": 1,
                        "gs": 5,
                        "ga": 3,
                        "gd": 2,
                        "pts": 6
                    },
                    {
                        "id": 3,
                        "name": "Player 3",
                        "flag": "flag3.png",
                        "p": 3,
                        "w": 1,
                        "d": 0,
                        "l": 2,
                        "gs": 3,
                        "ga": 5,
                        "gd": -2,
                        "pts": 3
                    },
                    {
                        "id": 4,
                        "name": "Player 4",
                        "flag": "flag4.png",
                        "p": 3,
                        "w": 0,
                        "d": 0,
                        "l": 3,
                        "gs": 2,
                        "ga": 6,
                        "gd": -4,
                        "pts": 0
                    }
                ]
            },
            {
                "name": "B",
                "players": [
                    {
                        "id": 5,
                        "name": "Player 5",
                        "flag": "flag5.png",
                        "p": 3,
                        "w": 2,
                        "d": 1,
                        "l": 0,
                        "gs": 5,
                        "ga": 2,
                        "gd": 3,
                        "pts": 7
                    },
                    {
                        "id": 6,
                        "name": "Player 6",
                        "flag": "flag6.png",
                        "p": 3,
                        "w": 1,
                        "d": 1,
                        "l": 1,
                        "gs": 4,
                        "ga": 3,
                        "gd": 1,
                        "pts": 4
                    },
                    {
                        "id": 7,
                        "name": "Player 7",
                        "flag": "flag7.png",
                        "p": 3,
                        "w": 1,
                        "d": 0,
                        "l": 2,
                        "gs": 3,
                        "ga": 4,
                        "gd": -1,
                        "pts": 3
                    },
                    {
                        "id": 8,
                        "name": "Player 8",
                        "flag": "flag8.png",
                        "p": 3,
                        "w": 0,
                        "d": 0,
                        "l": 3,
                        "gs": 1,
                        "ga": 5,
                        "gd": -4,
                        "pts": 0
                    }
                ]
            }
        ],
        "knockout": {
            "roundOf16": [
                {"player1": "Germany", "player2": "Belgium", "score": "3-2"},
                {"player1": "Romania", "player2": "Georgia", "score": "3-0"},
                {"player1": "Portugal", "player2": "Austria", "score": "3-1"},
                {"player1": "Italy", "player2": "Albania", "score": "2-0"},
                {"player1": "France", "player2": "Netherlands", "score": "3-1"},
                {"player1": "England", "player2": "Czechia", "score": "3-2"},
                {"player1": "Spain", "player2": "Poland", "score": "2-1"},
                {"player1": "Denmark", "player2": "Ukraine", "score": "2-1"}
            ],
            "quarterfinals": [
                {"player1": "Germany", "player2": "Romania", "score": "3-2"},
                {"player1": "Portugal", "player2": "Italy", "score": "3-2"},
                {"player1": "France", "player2": "England", "score": "3-2"},
                {"player1": "Spain", "player2": "Denmark", "score": "2-1"}
            ],
            "semifinals": [
                {"player1": "Germany", "player2": "Portugal", "score": "3-1"},
                {"player1": "France", "player2": "Spain", "score": "2-1"}
            ],
            "final": {
                "player1": "Germany", "player2": "France", "score": "3-2"
            }
        }


    };

    useEffect(() => {
        setTournament(data);
    }, [id]);

    if (!tournament) return <div>Loading...</div>;

    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="h4">{tournament.name}</Typography>
                    <Typography variant="body1">{tournament.description}</Typography>
                </CardContent>
            </Card>
            <Divider style={{ margin: '20px 0' }} />
            <GroupStage groups={tournament.groups} />
            <Divider style={{ margin: '20px 0' }} />
            <KnockoutStage stages={tournament.knockout} />
        </div>
    );
}

export default TournamentDetails;
