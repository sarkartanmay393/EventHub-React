import React from 'react';
import { common, grey } from '@mui/material/colors';
import { Box, Button, SxProps, Theme, ToggleButton, ToggleButtonGroup, Typography, useTheme } from '@mui/material';

import D from '../d.json';
import TLItem from "./Item";
import EventModal from './EventModal';

const eventBoxStyles: SxProps<Theme> = {
  width: '100%',
  height: '100%',
  display: 'grid',
  border: '1px solid red',

  // background: '-moz-linear-gradient(90deg,rgba(237,237,237,1)0%,rgba(27,180,200,1)78%,rgba(110,231,255,1)100%)',
  // background:'-webkit-linear-gradient(90deg,rgba(237,237,237,1)0%,rgba(27,180,200,1)78%,rgba(110,231,255,1)100%)',
  background: 'linear-gradient(250deg,rgba(110,231,255,0.3)0%,rgba(229,229,229,1)60%)',
  filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ededed",endColorstr="#6ee7ff",GradientType=1)',
}

const headerStyles: SxProps<Theme> = {
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${grey[400]}`,

  marginX: { xs: 0, md: '10%' },
  paddingX: { xs: 0, md: '10px' },
}

const contentStyles: SxProps<Theme> = {
  height: '98%',
  overflowY: 'scroll',
  display: 'grid',
  gap: '18px',

  // border: '1px solid red',
  marginX: { xs: 0, md: '10%' },
  marginY: '4px',
}


function Events() {
  const [open, setOpen] = React.useState(true);
  const [toggle, setToggle] = React.useState('upcoming');
  const theme = useTheme();

  return (
    <Box sx={eventBoxStyles}>
      <Box sx={headerStyles}>
        <Typography variant='h3'>Events</Typography>
        <Box display='flex' alignItems='center' gap={4} color='black'>
          <Button onClick={() => setOpen(true)} disableElevation color='secondary' variant='contained' sx={{ display: { xs: 'none', md: 'inline' }, fontWeight: 600, color: common.white }}>Create</Button>
          <ToggleButtonGroup
            exclusive
            value={toggle}
            color='secondary'
            onChange={(_, s) => setToggle(s)}
            sx={{
              height: '40px',
            }}
          >
            <ToggleButton value='upcoming'>Upcoming</ToggleButton>
            <ToggleButton value='past'>Past</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
      <Box sx={contentStyles}>
        {
          D.events.map((d, i) => {
            return (
              <TLItem key={i} eventInfo={d} />
            )
          })
        }
      </Box>
      <EventModal open={open} setOpen={setOpen} />
    </Box >
  );
}

export default Events;
