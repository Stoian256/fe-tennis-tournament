import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import { Tree, TreeNode } from 'react-organizational-chart';

function KnockoutStage({ matches }) {
    const renderMatch = match => (
        <TreeNode label={<Paper elevation={3}><Typography>{match.player1} vs {match.player2}</Typography></Paper>}>
            {match.nextMatch && renderMatch(match.nextMatch)}
        </TreeNode>
    );

    return (
        <div>
            <Typography variant="h5">Tabloul Principal</Typography>
            <Tree
                lineWidth={'2px'}
                lineColor={'blue'}
                lineBorderRadius={'10px'}
                label={<Paper elevation={3}><Typography>Final</Typography></Paper>}
            >
                {matches.map(match => renderMatch(match))}
            </Tree>
        </div>
    );
}

export default KnockoutStage;
