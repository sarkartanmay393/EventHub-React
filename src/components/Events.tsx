import React from 'react';

import D from '../d.json';
import TLItem from "./Item";

const eventDivStyles = {
  background: 'linear-gradient(250deg,rgba(110,231,255,0.3)0%,rgba(229,229,229,1)60%)',
  filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#ededed",endColorstr="#6ee7ff",GradientType=1)',
}

import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import EventModal from './EventModal';
import { IEvent } from '@/lib/interfaces';


function Events() {
  // const [open, setOpen] = React.useState(false);
  const [toggle, setToggle] = React.useState('upcoming');
  const [events, setEvents] = React.useState<IEvent[]>(D.events);

  return (
    <div className='w-[100%] h-[100%] flex flex-col gap-0' style={eventDivStyles}>
      <div className='h-[120px] flex items-center justify-between mx-0 px-0 md:mx-[10%]' >
        <h3 className="scroll-m-20 text-4xl font-semibold tracking-tight">Events</h3>
        <div className='flex items-center gap-4 text-black'>
          <EventModal />
          <ToggleGroup type='single' value={toggle}>
            <ToggleGroupItem onClick={() => setToggle('upcoming')} value='upcoming'>Upcoming</ToggleGroupItem>
            <ToggleGroupItem onClick={() => setToggle('past')} value='past'>Past</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      <div className='h-[100%] flex flex-col gap-[18px] my-[4px] mx-0 md:mx-[10%] overflow-scroll' style={{ border: '0px solid red' }}>
        {
          events.map((d, i) => {
            return (
              <TLItem key={i} eventInfo={d} />
            )
          })
        }
      </div>
    </div >
  );
}

export default Events;
