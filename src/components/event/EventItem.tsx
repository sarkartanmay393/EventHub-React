import { TimelineDot, TimelineConnector } from "@mui/lab";
import EventCard from "./EventCard";
import { getMonthAndDayNames } from "@/lib/utils";

interface EventItemProps {
  eventInfo: {
    time: string;
    title: string;
    author: string;
    mode: string;
    image: string;
    date: string;
  };
  old?: boolean;
  eventDate: Date;
}

export default function EventItem({ eventInfo, eventDate, old }: EventItemProps) {
  const mdn = getMonthAndDayNames(eventDate);
  return (
    <div className="scroll-m-20 flex justify-between">
      <div color="text.primary" className="w-[20%]">
        <h6 className="text-xl md:text-3xl font-normal tracking-tight">{mdn.day}</h6>
        <p className="text-md md:text-xl font-normal tracking-tight text-gray-400">{mdn.month}, {eventInfo.date.split('-')[2]}</p>
      </div>
      <div className="hidden md:flex flex-col items-center m-0 p-0">
        <TimelineDot sx={{ background: 'white', border: '1.2px solid grey', boxShadow: 0 }} />
        <TimelineConnector sx={{ width: '1px' }} />
      </div>
      <div className="w-[70%]">
        <EventCard {...eventInfo} old={old} />
      </div>
    </div>
  );
}