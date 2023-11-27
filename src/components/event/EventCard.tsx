import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AvatarList } from './data';

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
  date: string;
  old?: boolean;
}

function EventCard({ time, title, author, mode, image, old }: EventCardProps) {
  return (
    <div className='gap-4 w-[300px] sm:w-full h-full flex flex-col-reverse md:flex-row items-center justify-between py-[14px] px-[22px] rounded-[8px] bg-[whitesmoke]'>
      <div className='flex-1 grid gap-[8px]'>
        <h6 style={{ ...bodyTextStyles }} className='hidden md:block'>{time}</h6>
        <h6 style={hTextStyles}>{title}</h6>
        <div className='flex flex-col gap-1 my-1'>
          <div className='flex items-center gap-1'>
            <AccountCircleIcon className='text-gray-700' />
            <p style={{ ...bodyTextStyles, fontSize: '16px' }}>By {author}</p>
          </div>
          <div className='flex items-center gap-1'>
            {mode == 'Virtual' ? <VideocamOutlinedIcon className='text-gray-700' /> : <FmdGoodIcon className='text-gray-700' />}
            <p style={{ ...bodyTextStyles, fontSize: '16px' }}>{mode}</p>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <Badge className={`${old?'bg-red-300':'bg-[#0555c6]'} text-[16px]`}>
              {old ? 'Ended' : 'Invited'}
            </Badge>
            <div className='flex space-x-[-18px]'>
              {AvatarList.map((d, i) => (
                <Avatar key={i} style={{ width: '28px', height: '28px', border: '1px solid rgba(25,0,25,0.6)', fontSize: 10 }}>
                  <AvatarImage src={d} />
                  <AvatarFallback>*</AvatarFallback>
                </Avatar>
              ))}
              <Avatar className='bg-gray-200' style={{ width: '28px', height: '28px', border: 0, fontSize: 10 }}>
                <AvatarFallback className='bg-transparent'>+12</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <h6 style={{ ...bodyTextStyles, fontSize: '16px' }} className='md:hidden'>{time}</h6>
        </div>
      </div>
      <div className='grid'>
        <img width='240px' alt='' src={image} style={{ borderRadius: '6px' }} />
      </div>
    </div>
  );
}

export default EventCard;
