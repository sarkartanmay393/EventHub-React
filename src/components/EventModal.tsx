import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Card,
} from "@/components/ui/card";
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PublicIcon from '@mui/icons-material/Public';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import ApprovalIcon from '@mui/icons-material/Approval';
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';
import VisibilityIcon from '@mui/icons-material/Visibility';


import { Input } from './ui/input';
import { Button } from './ui/button';
import { Avatar, AvatarImage } from './ui/avatar';
import { useForm } from 'react-hook-form';
import { Separator } from './ui/separator';
import { Switch } from './ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';


// interface EventModalProps {
//   open: boolean;
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

export default function EventModal() {
  const [themeName, setThemeName] = React.useState('minimal');

  const formSchema = z.object({
    eventName: z.string().min(3),
    author: z.string().min(3),
    mode: z.string(),
    startDate: z.string(),
    startTime: z.string(),
    endDate: z.string(),
    endTime: z.string(),
    location: z.string(),
    ticketPrice: z.string(),
    capacity: z.string(),
    visibility: z.string().default('minimal'),
    themeName: z.string(),
    color: z.string().default('bg-green-600'),
    typesafe: z.string(),
    img: z.string(),
    requireApproval: z.boolean().default(false),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      eventName: "",
      author: "",
      mode: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      location: "",
      ticketPrice: "Free",
      capacity: "Unlimited",
      visibility: "public",
      themeName: "",
      color: "",
      typesafe: "",
      img: "",
      requireApproval: false,
    },
  })

  const formValues = form.watch();


  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const handleImgFile = () => {
    const imginput = document.getElementById('img_input') as HTMLElement;
    imginput.click();
  }

  const displayImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgBox = document.getElementById('image_div') as HTMLElement;
    const files = e.target.files;

    if (files) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const imgUrl = e.target?.result;
        imgBox.innerHTML = `<img className='rounded-[8px] h-[100%] w-[100%]' src='${imgUrl}' alt='new_event_cover' />`;
      }

      reader.readAsDataURL(file);
    } else {
      imgBox.innerHTML = 'No image';
    }

  }

  return (
    <Dialog modal>
      <DialogTrigger>
        <Button>Create</Button>
      </DialogTrigger>
      <DialogContent className='' style={{ maxWidth: '780px' }}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex m-0 gap-6 overflow-clip pt-6" style={{ border: '0px solid red' }}>
            <div className='w-[50%] h-[100%] grid gap-4 px-0'>
              <div className='flex items-center gap-2'>
                <Avatar>
                  <AvatarImage src='https://dub.sh/4OpRHmb' />
                </Avatar>
                <div className='flex flex-col space-y-[-4px]' >
                  <p className='text-sm text-gray-400'>Create Under</p>
                  <p className='text-md font-semibold text-gray-600'>Calender Events</p>
                </div>
              </div>
              <FormField
                control={form.control}
                name="eventName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className='p-0 my-2 text-3xl text-gray-500 font-semibold focus-visible:ring-0 shadow-none border-0' placeholder="Event name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='flex gap-1'>
                <CalendarMonthIcon style={{ fontSize: 42, border: '0px solid red' }} className='text-gray-500 p-0 m-0' />
                <Card style={{ height: 'fit-content', padding: '2px', display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <div className='flex items-center gap-1 px-[8px]'>
                    <p style={{ flex: 1 }}>Start</p>
                    <FormField
                      control={form.control}
                      name="startDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input type='date' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="startTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input type='time' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='flex items-center gap-1 px-[8px]'>
                    <p style={{ flex: 1 }}>End</p>
                    <FormField
                      control={form.control}
                      name="endDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input type='date' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="endTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input type='time' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Separator className='mt-2' />
                  <div className='flex gap-1 items-center px-[8px] py-[4px]'>
                    <PublicIcon style={{ fontSize: 14 }} />
                    <p className='text-sm'>GMT +5.30 Asia/Kolkata</p>
                  </div>
                </Card>
              </div>
              <div className='flex gap-1' >
                <FmdGoodIcon className='text-gray-500' style={{ fontSize: 42 }} />
                <Card style={{ width: '100%', padding: '2px' }}>
                  <div className=''>
                    <p className='ml-[12px]'>Add Offline Event Location</p>
                    <FormField
                      control={form.control}
                      name='location'
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder='Offline event location or virtual link' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </Card>
              </div>
              <div className='grid gap-1 h-[100%]'>
                <p className='text-gray-500 font-semibold'>Event Options:</p>
                <Card className='flex flex-col h-[100%]'>
                  <FormField
                    control={form.control}
                    name='ticketPrice'
                    render={({ field }) => (
                      <FormItem className='flex flex-row justify-between items-center px-4 h-[38px]'>
                        <FormLabel className='flex items-center gap-2 text-gray-600 font-normal'>
                          <LocalActivityIcon className='text-gray-400' sx={{ fontSize: '16px' }} />
                          Tickets
                        </FormLabel>
                        <FormControl className='w-[25%]'>
                          <Input className='focus-visible:ring-0 border-0 shadow-none' placeholder='' {...field} style={{ margin: 0 }} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Separator />
                  <FormField
                    control={form.control}
                    name='requireApproval'
                    render={({ field }) => (
                      <FormItem className='flex flex-row items-center justify-between px-4 h-[38px]'>
                        <FormLabel className='flex items-center gap-2 text-gray-600 font-normal'>
                          <ApprovalIcon className='text-gray-400' sx={{ fontSize: '16px' }} />
                          Require Approval
                        </FormLabel>
                        <FormControl className='' style={{ margin: 0 }}>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            aria-readonly
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Separator />
                  <FormField
                    control={form.control}
                    name='capacity'
                    render={({ field }) => (
                      <FormItem className='flex flex-row items-center justify-between px-4 h-[38px]'>
                        <FormLabel className='flex items-center gap-2 text-gray-600 font-normal'>
                          <ReduceCapacityIcon className='text-gray-400' sx={{ fontSize: '16px' }} />
                          Capacity
                        </FormLabel>
                        <FormControl className='w-[25%]'>
                          <Input className='focus-visible:ring-0 border-0 shadow-none' placeholder='' {...field} style={{ margin: 0 }} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Separator />
                  <FormField
                    control={form.control}
                    name='visibility'
                    render={({ field }) => (
                      <FormItem className='flex flex-row items-center justify-between px-4 h-[38px]'>
                        <FormLabel className='flex items-center gap-2 text-gray-600 font-normal'>
                          <VisibilityIcon className='text-gray-400' sx={{ fontSize: '16px' }} />
                          Visibility
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value} >
                          <FormControl className='w-[25%]' style={{ margin: 0 }}>
                            <SelectTrigger className='focus-visible:ring-0 border-0 shadow-none'>
                              <SelectValue placeholder="Select a public visibility" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="public">Public</SelectItem>
                            <SelectItem value="private">Private</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </Card>
              </div>
              <Button type="submit">Submit</Button>
            </div>
            <div className='hidden md:grid w-[50%] justify-center px-0 gap-4'>
              <FormField
                control={form.control}
                name='img'
                render={({ field }) => (
                  <FormItem className='relative h-fit w-[100%] flex justify-center items-center '>
                    <div id="image_div" className='h-[280px] w-[100%] rounded-[8px]' style={{ border: '1px solid black' }}>
                      <img className='rounded-[8px] h-full w-full object-cover' src={i} alt='new_event_cover' />
                    </div>
                    <FormControl {...field} className='absolute h-[fit] bottom-0 right-0'>
                      <Input id='img_input' accept="image/*" className='w-[36px] h-[35px] bg-white' type='file' onChange={(e) => displayImage(e)} />
                    </FormControl>
                    <img onClick={handleImgFile} className='p-[2px] w-[35px] h-[34px] absolute bottom-0 right-0' src={inputIcon} alt='' />
                  </FormItem>
                )}
              />
              <div className='flex flex-col gap-2'>
                <p className='text-gray-500 font-semibold'>Theme</p>
                <div className='flex w-[100%]'>
                  <ToggleGroup type='single' value={themeName}>
                    <div className='flex flex-col items-center gap-1'>
                      <ToggleGroupItem style={toggleStyle} className={`data-[state=on]:bg-gray-300`} onClick={() => setThemeName('minimal')} value='minimal'>
                      </ToggleGroupItem>
                      <p className={`text-sm ${themeName == 'minimal' ? 'text-gray-700' : 'text-gray-400'}`}>Minimal</p>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                      <ToggleGroupItem style={toggleStyle} className='data-[state=on]:bg-green-300' onClick={() => setThemeName('holiday')} value='holiday'>
                      </ToggleGroupItem>
                      <p className={`text-sm ${themeName == 'holiday' ? 'text-gray-700' : 'text-gray-400'}`}>Holiday</p>

                    </div>
                    <div className='flex flex-col items-center gap-1'>
                      <ToggleGroupItem style={toggleStyle} className='data-[state=on]:bg-orange-300' onClick={() => setThemeName('party')} value='party'></ToggleGroupItem>
                      <p className={`text-sm ${themeName == 'party' ? 'text-gray-700' : 'text-gray-400'}`}>Party</p>

                    </div>
                    <div className='flex flex-col items-center gap-1'>
                      <ToggleGroupItem style={toggleStyle} className='data-[state=on]:bg-blue-300' onClick={() => setThemeName('formal')} value='formal'></ToggleGroupItem>
                      <p className={`text-sm ${themeName == 'formal' ? 'text-gray-700' : 'text-gray-400'}`}>Formal</p>
                    </div>
                  </ToggleGroup>
                </div>
              </div>
              <Card className='flex flex-col h-fit w-[100%]'>
                <FormField
                  control={form.control}
                  name='color'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-center justify-between px-4 h-[38px]'>
                      <FormLabel className='flex items-center gap-2 text-gray-600 font-normal'>
                        <div className={`w-[16px] h-[16px] rounded-lg text-gray-400 ${field.value}`}></div>
                        Color
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value} >
                        <FormControl className='w-[35%]' style={{ margin: 0 }}>
                          <SelectTrigger className='focus-visible:ring-0 border-0 shadow-none'>
                            <SelectValue placeholder="Select theme color" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="bg-gray-700">Gray</SelectItem>
                          <SelectItem value="bg-red-400">Red</SelectItem>
                          <SelectItem value="bg-green-600">Green</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Separator />
                <FormField
                  control={form.control}
                  name='typesafe'
                  render={({ field }) => (
                    <FormItem className='flex flex-row items-center justify-between px-4 h-[38px]'>
                      <FormLabel className='flex items-center gap-2 text-gray-600 font-normal'>
                        <VisibilityIcon className='text-gray-400' sx={{ fontSize: '16px' }} />
                        Visibility
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value} >
                        <FormControl className='w-[35%]' style={{ margin: 0 }}>
                          <SelectTrigger className='focus-visible:ring-0 border-0 shadow-none'>
                            <SelectValue placeholder="Select a public visibility" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Card>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

const toggleStyle: React.CSSProperties = {
  height: '72px',
  width: '72px',
  border: '1px solid black',
  borderRadius: '8px',
};
const inputIcon = 'https://icon-library.com/images/placeholder-icon/placeholder-icon-12.jpg';
const i = 'https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c3/33/97.jpg';