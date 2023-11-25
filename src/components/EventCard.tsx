import React from 'react';
import { Avatar, Box, Chip, Stack, SxProps, Theme, Typography } from '@mui/material';

import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import { deepOrange, grey } from '@mui/material/colors';

const eventCardStyles: SxProps<Theme> = {
  width: { sm: '420px', md: '660px', lg: '940px' },
  height: '100%',
  display: 'flex',
  flexDirection: { xs: 'column-reverse', md: 'row' },
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '8px 22px',
  background: 'whitesmoke',
  borderRadius: '8px',
}

const bodyTextStyles: SxProps<Theme> = {
  fontSize: '18px',
  color: 'gray',
  fontWeight: 520,
}

const hTextStyles: SxProps<Theme> = {
  fontSize: '24px',
  color: 'black',
  fontWeight: 600,
  lineHeight: 1.2
}

interface EventCardProps {
  time: string;
  title: string;
  author: string;
  mode: string;
  image: string;
  dayname: string;
  date: string;
}

function EventCard({ time, title, author, mode, image }: EventCardProps) {
  const [toggle, setToggle] = React.useState('upcoming');

  return (
    <Box sx={eventCardStyles}>
      <Box sx={{
        display: 'grid',
        gap: '8px'
      }}>
        <Typography variant='h6' sx={bodyTextStyles}>{time}</Typography>
        <Typography variant='h6' sx={hTextStyles}>{title}</Typography>
        <Box display='flex' gap={1}>
          <ExploreOutlinedIcon />
          <Typography variant='body2' sx={bodyTextStyles}>{author}</Typography>
        </Box>
        <Box display='flex' gap={1}>
          <VideocamOutlinedIcon />
          <Typography variant='body2' sx={bodyTextStyles}>{mode}</Typography>
        </Box>
        <Box display='flex' gap={1} alignItems='center'>
          <Chip label='Invited' disabled={false} sx={{ width: 'fit-content', height: 'fit-content', background: '#0555c6', color: 'white', borderRadius: '6px', fontSize: '12px', fontWeight: 600, padding: '3px 2px' }} />
          <Stack direction='row' spacing='-16px'>
            <Avatar sx={{ bgcolor: deepOrange[500], width: '24px', height: '24px', border: '1px solid black', fontSize: 10 }} src='https://dub.sh/4OpRHmb' />
            <Avatar sx={{ bgcolor: deepOrange[500], width: '24px', height: '24px', border: '1px solid black', fontSize: 10 }} src='https://dub.sh/4OpRHmb' />
            <Avatar sx={{ bgcolor: deepOrange[500], width: '24px', height: '24px', border: '1px solid black', fontSize: 10 }} src='https://dub.sh/4OpRHmb' />
            <Avatar sx={{ bgcolor: deepOrange[500], width: '24px', height: '24px', border: '1px solid black', fontSize: 10 }} src='https://dub.sh/4OpRHmb' />
            <Avatar sx={{ bgcolor: grey[200], width: '24px', height: '24px', border: '1px solid black', fontSize: 10, color: 'black' }}>+12</Avatar>
          </Stack>
        </Box>
      </Box>
      <Box sx={{ height: '100%', display: 'block', paddingTop: '8px' }}>
        <img width='240px' alt='' src={image} style={{ borderRadius: '6px' }} />
      </Box>
    </Box>
  );
}

export default EventCard;
