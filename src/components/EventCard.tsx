import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';


const bodyTextStyles = {
  fontSize: '18px',
  color: 'gray',
  fontWeight: 520,
}

const hTextStyles = {
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
  return (
    <div className='w-[320px] lg:w-[100%] h-[100%] flex items-center justify-between py-[12px] px-[22px] rounded-[8px] bg-[whitesmoke]'>
      <div className='grid gap-[8px]'>
        <h6 style={bodyTextStyles}>{time}</h6>
        <h6 style={hTextStyles}>{title}</h6>
        <div className='flex gap-1'>
          <ExploreOutlinedIcon />
          <p style={bodyTextStyles}>{author}</p>
        </div>
        <div className='flex gap-1'>
          <VideocamOutlinedIcon />
          <p style={bodyTextStyles}>{mode}</p>
        </div>
        <div className='flex items-center gap-1'>
          <Badge className='bg-[#0555c6]'>
            Invited
          </Badge>
          <div className='flex'>
            <Avatar style={{ width: '24px', height: '24px', border: '1px solid black', fontSize: 10 }}>
              <AvatarImage src='https://dub.sh/4OpRHmb' />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <Avatar style={{ width: '24px', height: '24px', border: '1px solid black', fontSize: 10 }}>
              <AvatarImage src='https://dub.sh/4OpRHmb' />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <Avatar style={{ width: '24px', height: '24px', border: '1px solid black', fontSize: 10 }}>
              <AvatarImage src='' />
              <AvatarFallback>+12</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      <div className='h-[100%] grid pt-[8px]'>
        <img width='240px' alt='' src={image} style={{ borderRadius: '6px' }} />
      </div>
    </div>
  );
}

export default EventCard;
