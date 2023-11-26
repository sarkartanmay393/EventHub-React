import { TimelineDot, TimelineConnector } from "@mui/lab";
import EventCard from "./EventCard";

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

function getMonthAndDayNames(date: Date): { month: string; day: string } {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const month = monthNames[date.getMonth()];
  const day = dayNames[date.getDay()];

  return { month, day };
}

export default function TLItem({ eventInfo }: TLItemProps) {
  const eventDate = new Date(eventInfo.date);
  const result = getMonthAndDayNames(eventDate);

  return (
    <div className="flex justify-between">
      <div color="text.primary" className="w-[20%]">
        <h6 className="scroll-m-20 text-3xl font-normal tracking-tight">{eventInfo.dayname}</h6>
        <p className="text-xl font-normal tracking-tight text-gray-400">{result.month}, {eventInfo.date.split('-')[2]}</p>
      </div>
      <div className="flex flex-col items-center m-0 p-0">
        <TimelineDot sx={{ background: 'white', border: '1.2px solid grey', boxShadow: 0 }} />
        <TimelineConnector sx={{ width: '1px' }} />
      </div>
      <div className="w-[70%]">
        <EventCard {...eventInfo} />
      </div>
    </div>
  );
}