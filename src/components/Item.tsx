import { TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from "@mui/lab";
import { Box, SxProps, Theme, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import EventCard from "./EventCard";

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

interface TLItemProps {
  eventInfo: {
    time: string;
    title: string;
    author: string;
    mode: string;
    image: string;
    dayname: string;
    date: string;
  };
}

export default function TLItem({ eventInfo }: TLItemProps) {
  return (
    <Box display='flex'>
      <TimelineOppositeContent sx={{ border: '0px solid red' }} color="text.primary">
        <Typography variant='h6' sx={hTextStyles}>{eventInfo.dayname}</Typography>
        <Typography variant='body1' sx={bodyTextStyles}>{eventInfo.date}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot sx={{ background: 'white', border: '1.2px solid grey', boxShadow: 0 }} />
        <TimelineConnector sx={{ width: '1px', bgcolor: grey[400] }} />
      </TimelineSeparator>
      <TimelineContent sx={{ border: '0px solid red' }}>
        <EventCard {...eventInfo} />
      </TimelineContent>
    </Box>
  );
}