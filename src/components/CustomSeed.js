import React from 'react';
import { Seed, SeedItem, SeedTeam, RenderSeedProps } from 'react-brackets';
import '../styles.css';
import { Avatar } from '@mui/material';

const CustomSeed = ({ seed, breakpoint, roundIndex, seedIndex }: RenderSeedProps) => {
    const flag1Name = seed.teams[0]?.flag || '';
    const flag2Name = seed.teams[1]?.flag || '';
    const team1Name = seed.teams[0]?.name || 'NO TEAM';
    const team2Name = seed.teams[1]?.name || 'NO TEAM';
    const team1Score = seed.teams[0]?.score ?? 0;
    const team2Score = seed.teams[1]?.score ?? 0;

    const winnerIndex = team1Score > team2Score ? 0 : 1;

    return (
        <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
            <SeedItem>
                <div className="seed-item">
                    <SeedTeam className={winnerIndex === 0 ? 'winner' : ''}>
                        <Avatar src={flag1Name} />
                        <span>{`${team1Name} (${team1Score})`}</span>
                    </SeedTeam>
                    <SeedTeam className={winnerIndex === 1 ? 'winner' : ''}>
                        <Avatar src={flag2Name} />
                        <span>{`${team2Name} (${team2Score})`}</span>
                    </SeedTeam>
                </div>
            </SeedItem>
        </Seed>
    );
};

export default CustomSeed;
