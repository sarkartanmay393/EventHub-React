import React from 'react';

import JSON from '../assets/events.json';
import EventItem from "../components/event/EventItem";

const eventDivStyles = {
  background: 'linear-gradient(250deg,rgba(110,231,255,0.3)0%,rgba(229,229,229,1)60%)',
  filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ededed",endColorstr="#6ee7ff",GradientType=1)',
}

import EventModal from '../components/modal/EventModal';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { ToggleGroup, ToggleGroupItem } from '../components/ui/toggle-group';
import { IEvent } from '@/components/event/data';


function Events() {
  const [toggle, setToggle] = React.useState('upcoming');
  const [events, setEvents] = React.useState<IEvent[]>(JSON.events);
  const cd = new Date();

  return (
    <div className='w-full h-full flex flex-col gap-0' style={eventDivStyles}>
      <div className='h-[140px] flex items-center justify-between mx-4 px-0 md:mx-[10%]' >
        <h3 className="text-5xl font-semibold tracking-tight">Events</h3>
        <div className='flex items-center gap-4'>
          <EventModal setEvents={setEvents} />
          <ToggleGroup
            type='single'
            value={toggle}
            className='hidden sm:inline-flex p-[2px] border-[1px] border-solid border-gray-300 bg-gray-100 rounded-[8px]'
          >
            <ToggleGroupItem
              className='data-[state=on]:bg-[rgba(50,174,201,1)] data-[state=on]:text-white hover:bg-transparent hover:text-black transition-all duration-100 ease-in-out '
              onClick={() => setToggle('upcoming')}
              value='upcoming'
            >
              Upcoming
            </ToggleGroupItem>
            <ToggleGroupItem
              className='data-[state=on]:bg-[rgba(50,174,201,1)] data-[state=on]:text-white hover:bg-transparent hover:text-black transition-all duration-100 ease-in-out '
              onClick={() => setToggle('past')}
              value='past'
            >
              Previous
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      <ScrollArea className='h-full mx-4 md:mx-[10%] mb-[8px]' >
        <div className='flex flex-col gap-[20px] sm:gap-[18px]'>
          {events.reverse().map((d, i) => {
            const sd = new Date(d.date);
            if (toggle === 'upcoming') {
              if (sd > cd) {
                return (
                  <EventItem key={i} eventInfo={d} eventDate={sd} />
                )
              } else {
                return <React.Fragment key={i}></React.Fragment>
              }
            } else {
              if (sd < cd) {
                return (
                  <EventItem key={i} eventInfo={d} eventDate={sd} old />
                )
              } else {
                return <React.Fragment key={i}></React.Fragment>
              }
            }
          })}
        </div >
        <ScrollBar />
      </ScrollArea>
    </div >
  );
}

export default Events;
