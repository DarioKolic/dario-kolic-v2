import React from 'react'
import { Box, Chip, Typography } from '@mui/material';
import { ETechStack } from '@/lib/constants';
import { skillIconMap } from './iconMap';

import './SkillDisplay.scss'

interface ISkillDisplayProps {
    skill: ETechStack
}

export const SkillDisplay: React.FC<ISkillDisplayProps> = React.memo(function SkillDisplay ({ skill }) {
    if (!Object.values(ETechStack).includes(skill)) {
        return (
            <Box sx={{ p: 1 }}>
                <Typography color="error">Invalid skill: {skill}</Typography>
            </Box>
        );
    }

    const IconComponent = skillIconMap[skill];

    return (
        <Chip
            icon={<IconComponent style={{ fontSize: '1.1rem' }} />}
            label={skill}
            variant='outlined'
            sx={{
                // m: 1,
                // fontSize: '1rem',
                padding: '1rem 0.2rem',
                // fontWeight: 'medium',
                // textTransform: 'uppercase',
                // backgroundColor: 'primary.dark',
                borderColor: "#301B3F",
                color: 'primary.main',
                '& .MuiChip-icon': {
                color: 'primary.main',
                },
                // '&:hover': {
                // backgroundColor: 'primary.main',
                // },
            }}
        />
    );
})