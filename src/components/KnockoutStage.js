import React from 'react';
import { Bracket } from 'react-brackets';
import CustomSeed from './CustomSeed';
import '../styles.css';

const formatRounds = (stages) => {
    console.log(stages[0].title)
    return stages.map((stage) => ({
        title: stage.title,
        seeds: stage.matches.map(match => ({
            id: match.id,
            date: new Date().toDateString(),
            teams: [
                { flag: match.player1.flag, name: match.player1.name, score: match.score1 },
                { flag: match.player2.flag,name: match.player2.name, score: match.score2 },
            ],
        })),
    }));
};

function KnockoutStage({ stages }) {
    if (!Array.isArray(stages)) {
        console.error("Expected stages to be an array, but got:", stages);
        return <div>Error: Invalid data format for stages.</div>;
    }

    const rounds = formatRounds(stages);

    return (
        <div className="knockout-stage">
            <Bracket rounds={rounds} renderSeedComponent={CustomSeed} />
        </div>
    );
}

export default KnockoutStage;
