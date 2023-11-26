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

// eslint-disable-next-line no-empty-pattern
export default function TLItem({ eventInfo }: TLItemProps) {
  return (
    <div className="flex justify-between">
      <div color="text.primary" className="w-[20%]">
        <h6 className="scroll-m-20 text-3xl font-normal tracking-tight">{eventInfo.dayname}</h6>
        <p className="text-xl font-normal tracking-tight text-gray-400">{eventInfo.date}</p>
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