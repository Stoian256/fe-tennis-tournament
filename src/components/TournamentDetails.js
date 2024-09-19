import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Divider, Grid, CircularProgress} from '@mui/material';
import GroupStage from './GroupStage';
import KnockoutStage from './KnockoutStage';
import '../styles.css';

function TournamentDetails() {
    const {id} = useParams();
    const [tournament, setTournament] = useState(null);
    const [loading, setLoading] = useState(true);
    const data = {
        "name": "Ping Pong Championship",
        "description": "Exciting ping pong tournament",
        "groups": [
            {
                "name": "A",
                "players": [
                    {
                        "id": 1,
                        "name": "Ma Long",
                        "flag": "../china.png",
                        "p": 3,
                        "w": 3,
                        "l": 0,
                        "sets_won": 9,
                        "sets_lost": 2,
                        "points": 9
                    },
                    {
                        "id": 2,
                        "name": "Timo Boll",
                        "flag": "../germany.png",
                        "p": 3,
                        "w": 2,
                        "l": 1,
                        "sets_won": 7,
                        "sets_lost": 4,
                        "points": 6
                    },
                    {
                        "id": 3,
                        "name": "Jun Mizutani",
                        "flag": "../japan.png",
                        "p": 3,
                        "w": 1,
                        "l": 2,
                        "sets_won": 4,
                        "sets_lost": 6,
                        "points": 3
                    },
                    {
                        "id": 4,
                        "name": "Gustavo Tsuboi",
                        "flag": "../brazil.png",
                        "p": 3,
                        "w": 0,
                        "l": 3,
                        "sets_won": 2,
                        "sets_lost": 9,
                        "points": 0
                    }
                ]
            },
            {
                "name": "B",
                "players": [
                    {
                        "id": 5,
                        "name": "Fan Zhendong",
                        "flag": "../china.png",
                        "p": 3,
                        "w": 3,
                        "l": 0,
                        "sets_won": 9,
                        "sets_lost": 1,
                        "points": 9
                    },
                    {
                        "id": 6,
                        "name": "Dimitrij Ovtcharov",
                        "flag": "../germany.png",
                        "p": 3,
                        "w": 2,
                        "l": 1,
                        "sets_won": 7,
                        "sets_lost": 3,
                        "points": 6
                    },
                    {
                        "id": 7,
                        "name": "Hugo Calderano",
                        "flag": "../brazil.png",
                        "p": 3,
                        "w": 1,
                        "l": 2,
                        "sets_won": 4,
                        "sets_lost": 6,
                        "points": 3
                    },
                    {
                        "id": 8,
                        "name": "Patrick Franziska",
                        "flag": "../germany.png",
                        "p": 3,
                        "w": 0,
                        "l": 3,
                        "sets_won": 2,
                        "sets_lost": 9,
                        "points": 0
                    }
                ]
            },
            {
                "name": "C",
                "players": [
                    {
                        "id": 9,
                        "name": "Tomokazu Harimoto",
                        "flag": "../japan.png",
                        "p": 3,
                        "w": 3,
                        "l": 0,
                        "sets_won": 9,
                        "sets_lost": 2,
                        "points": 9
                    },
                    {
                        "id": 10,
                        "name": "Jang Woo-jin",
                        "flag": "../south_korea.png",
                        "p": 3,
                        "w": 2,
                        "l": 1,
                        "sets_won": 7,
                        "sets_lost": 4,
                        "points": 6
                    },
                    {
                        "id": 11,
                        "name": "Simon Gauzy",
                        "flag": "../france.png",
                        "p": 3,
                        "w": 1,
                        "l": 2,
                        "sets_won": 4,
                        "sets_lost": 6,
                        "points": 3
                    },
                    {
                        "id": 12,
                        "name": "Quadri Aruna",
                        "flag": "../nigeria.png",
                        "p": 3,
                        "w": 0,
                        "l": 3,
                        "sets_won": 2,
                        "sets_lost": 9,
                        "points": 0
                    }
                ]
            },
            {
                "name": "D",
                "players": [
                    {
                        "id": 13,
                        "name": "Lin Yun-Ju",
                        "flag": "../taiwan.png",
                        "p": 3,
                        "w": 3,
                        "l": 0,
                        "sets_won": 9,
                        "sets_lost": 1,
                        "points": 9
                    },
                    {
                        "id": 14,
                        "name": "Marcos Freitas",
                        "flag": "../portugal.png",
                        "p": 3,
                        "w": 2,
                        "l": 1,
                        "sets_won": 7,
                        "sets_lost": 3,
                        "points": 6
                    },
                    {
                        "id": 15,
                        "name": "Kristian Karlsson",
                        "flag": "../sweden.png",
                        "p": 3,
                        "w": 1,
                        "l": 2,
                        "sets_won": 4,
                        "sets_lost": 6,
                        "points": 3
                    },
                    {
                        "id": 16,
                        "name": "Robert Gardos",
                        "flag": "../austria.png",
                        "p": 3,
                        "w": 0,
                        "l": 3,
                        "sets_won": 2,
                        "sets_lost": 9,
                        "points": 0
                    }
                ]
            },
            {
                "name": "E",
                "players": [
                    {
                        "id": 17,
                        "name": "Xu Xin",
                        "flag": "../china.png",
                        "p": 3,
                        "w": 3,
                        "l": 0,
                        "sets_won": 9,
                        "sets_lost": 2,
                        "points": 9
                    },
                    {
                        "id": 18,
                        "name": "Liam Pitchford",
                        "flag": "../england.png",
                        "p": 3,
                        "w": 2,
                        "l": 1,
                        "sets_won": 7,
                        "sets_lost": 4,
                        "points": 6
                    },
                    {
                        "id": 19,
                        "name": "Omar Assar",
                        "flag": "../egypt.png",
                        "p": 3,
                        "w": 1,
                        "l": 2,
                        "sets_won": 4,
                        "sets_lost": 6,
                        "points": 3
                    },
                    {
                        "id": 20,
                        "name": "Emmanuel Lebesson",
                        "flag": "../france.png",
                        "p": 3,
                        "w": 0,
                        "l": 3,
                        "sets_won": 2,
                        "sets_lost": 9,
                        "points": 0
                    }
                ]
            },
            {
                "name": "F",
                "players": [
                    {
                        "id": 21,
                        "name": "Chuang Chih-Yuan",
                        "flag": "../taiwan.png",
                        "p": 3,
                        "w": 3,
                        "l": 0,
                        "sets_won": 9,
                        "sets_lost": 2,
                        "points": 9
                    },
                    {
                        "id": 22,
                        "name": "Andre Ho",
                        "flag": "../canada.png",
                        "p": 3,
                        "w": 2,
                        "l": 1,
                        "sets_won": 7,
                        "sets_lost": 4,
                        "points": 6
                    },
                    {
                        "id": 23,
                        "name": "Koki Niwa",
                        "flag": "../japan.png",
                        "p": 3,
                        "w": 1,
                        "l": 2,
                        "sets_won": 4,
                        "sets_lost": 6,
                        "points": 3
                    },
                    {
                        "id": 24,
                        "name": "Paul Drinkhall",
                        "flag": "../england.png",
                        "p": 3,
                        "w": 0,
                        "l": 3,
                        "sets_won": 2,
                        "sets_lost": 9,
                        "points": 0
                    }
                ]
            },
            {
                "name": "G",
                "players": [
                    {
                        "id": 25,
                        "name": "Mattias Falck",
                        "flag": "../sweden.png",
                        "p": 3,
                        "w": 3,
                        "l": 0,
                        "sets_won": 9,
                        "sets_lost": 1,
                        "points": 9
                    },
                    {
                        "id": 26,
                        "name": "Simon Gauzy",
                        "flag": "../france.png",
                        "p": 3,
                        "w": 2,
                        "l": 1,
                        "sets_won": 7,
                        "sets_lost": 3,
                        "points": 6
                    },
                    {
                        "id": 27,
                        "name": "Liang Jingkun",
                        "flag": "../china.png",
                        "p": 3,
                        "w": 1,
                        "l": 2,
                        "sets_won": 3,
                        "sets_lost": 6,
                        "points": 3
                    },
                    {
                        "id": 28,
                        "name": "Darko Jorgic",
                        "flag": "../slovenia.png",
                        "p": 3,
                        "w": 0,
                        "l": 3,
                        "sets_won": 2,
                        "sets_lost": 9,
                        "points": 0
                    }
                ]
            },
            {
                "name": "H",
                "players": [
                    {
                        "id": 29,
                        "name": "Jonathan Groth",
                        "flag": "../denmark.png",
                        "p": 3,
                        "w": 3,
                        "l": 0,
                        "sets_won": 9,
                        "sets_lost": 2,
                        "points": 9
                    },
                    {
                        "id": 30,
                        "name": "Hugo Calderano",
                        "flag": "../brazil.png",
                        "p": 3,
                        "w": 2,
                        "l": 1,
                        "sets_won": 7,
                        "sets_lost": 4,
                        "points": 6
                    },
                    {
                        "id": 31,
                        "name": "Liam Pitchford",
                        "flag": "../england.png",
                        "p": 3,
                        "w": 1,
                        "l": 2,
                        "sets_won": 4,
                        "sets_lost": 6,
                        "points": 3
                    },
                    {
                        "id": 32,
                        "name": "Robert Gardos",
                        "flag": "../austria.png",
                        "p": 3,
                        "w": 0,
                        "l": 3,
                        "sets_won": 2,
                        "sets_lost": 9,
                        "points": 0
                    }
                ]
            }
        ],
        "knockout": [
            {
                "title": "Round of 16",
                "matches": [
                    {"id": 1, "player1": "Ma Long", "player2": "Robert Gardos", "score1": 3, "score2": 1},
                    {"id": 2, "player1": "Timo Boll", "player2": "Kristian Karlsson", "score1": 3, "score2": 0},
                    {"id": 3, "player1": "Jun Mizutani", "player2": "Marcos Freitas", "score1": 2, "score2": 3},
                    {"id": 4, "player1": "Gustavo Tsuboi", "player2": "Lin Yun-Ju", "score1": 1, "score2": 3},
                    {"id": 5, "player1": "Fan Zhendong", "player2": "Quadri Aruna", "score1": 3, "score2": 1},
                    {"id": 6, "player1": "Dimitrij Ovtcharov", "player2": "Simon Gauzy", "score1": 3, "score2": 2},
                    {"id": 7, "player1": "Hugo Calderano", "player2": "Jang Woo-jin", "score1": 3, "score2": 0},
                    {"id": 8, "player1": "Patrick Franziska", "player2": "Tomokazu Harimoto", "score1": 2, "score2": 3}
                ]
            },
            {
                "title": "Quarterfinals",
                "matches": [
                    {"id": 9, "player1": "Ma Long", "player2": "Tomokazu Harimoto", "score1": 3, "score2": 2},
                    {"id": 10, "player1": "Timo Boll", "player2": "Hugo Calderano", "score1": 3, "score2": 1},
                    {"id": 11, "player1": "Fan Zhendong", "player2": "Dimitrij Ovtcharov", "score1": 3, "score2": 2},
                    {"id": 12, "player1": "Lin Yun-Ju", "player2": "Marcos Freitas", "score1": 3, "score2": 1}
                ]
            },
            {
                "title": "Semifinals",
                "matches": [
                    {"id": 13, "player1": "Ma Long", "player2": "Fan Zhendong", "score1": 3, "score2": 1},
                    {"id": 14, "player1": "Timo Boll", "player2": "Lin Yun-Ju", "score1": 2, "score2": 3}
                ]
            },
            {
                "title": "Final",
                "matches": [
                    {"id": 15, "player1": "Ma Long", "player2": "Lin Yun-Ju", "score1": 3, "score2": 2}
                ]
            }
        ]

    }
    useEffect(() => {
        const delay = 500; // 2 secunde
        const timer = setTimeout(() => {
            fetch(`/api/tournaments/${id}`)
                .then(response => response.json())
                .then(data => {
                    setTournament(data);
                    setLoading(false);
                });
        }, delay);

        return () => clearTimeout(timer);
    }, [id]);

    if (loading) {
        return (
            <Grid container justifyContent="center" alignItems="center" style={{minHeight: '80vh'}}>
                <CircularProgress size={65} thickness={4}/>
            </Grid>
        );
    }

    if (!tournament) {
        return <div>No tournament found!</div>;
    }

    /*
    <Card>
                <CardContent>
                    <Typography variant="h4">{tournament.name}</Typography>
                    <Typography variant="body1">{tournament.description}</Typography>
                </CardContent>
            </Card>

     */
    return (
        <div>
            <Divider style={{margin: '20px 0'}}/>
            <GroupStage groups={tournament.groups}/>
            <Divider style={{margin: '20px 0'}}/>
            <KnockoutStage stages={tournament.knockoutStage}/>
        </div>
    );
}

export default TournamentDetails;
