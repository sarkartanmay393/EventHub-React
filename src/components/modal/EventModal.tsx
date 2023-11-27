import * as React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
} from "@/components/ui/card";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
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
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useForm } from 'react-hook-form';
import { Separator } from '../ui/separator';
import { Switch } from '../ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { ThemeBGList } from './data';
import { IEvent } from '../event/data';

const toggleStyle = (src: string) => ({
  // border: '1px solid black',
  height: '72px',
  width: '72px',
  borderRadius: '8px',
  background: `url(${src})`
});

interface EventModalProps {
  event?: IEvent[];
  setEvents: React.Dispatch<React.SetStateAction<IEvent[]>>;
  eventInfo?: IEvent;
  open?: boolean;
}

export default function EventModal({ setEvents, eventInfo }: EventModalProps) {
  const [themeName, setThemeName] = React.useState('minimal');
  const currentDate = new Date('02-02-2024');
  const yy = currentDate.getFullYear();
  const mm = currentDate.getMonth();
  const dd = currentDate.getDate();
  const hr = currentDate.getHours();
  const mn = currentDate.getMinutes();

  const formSchema = z.object({
    eventName: z.string().min(3, 'Required field!'),
    author: z.string(),
    mode: z.string(),
    startDate: z.string(),
    startTime: z.string(),
    endDate: z.string(),
    endTime: z.string(),
    location: z.string(),
    ticketPrice: z.string(),
    capacity: z.string(),
    visibility: z.string(),
    themeName: z.string(),
    color: z.string(),
    typesafe: z.string(),
    img: z.string(),
    requireApproval: z.boolean(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: eventInfo && eventInfo.title || "",
      startDate: eventInfo && eventInfo.date || `${yy}-${mm < 10 ? `0${mm}` : `${mm}`}-${dd < 10 ? `0${dd}` : `${dd}`}`,
      startTime: eventInfo && eventInfo.time || `${hr < 10 ? `0${hr}` : `${hr}`}:${mn < 10 ? `0${mn}` : `${mn}`}`,
      endDate: "",
      endTime: "",
      location: "",
      themeName: "minimal",
      img: eventInfo && eventInfo.image || "/assets/theme_bg/minimal.jpg",
      mode: "Virtual",
      author: "Lovely Visitor",
      typesafe: "default",
      color: 'bg-gray-700',
      ticketPrice: "Free",
      capacity: "Unlimited",
      visibility: "public",
      requireApproval: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setEvents((p) => ([{
      title: values.eventName,
      author: values.author,
      time: values.startTime,
      date: values.startDate,
      image: values.img,
      mode: values.location.length < 3 ? 'Virtual' : values.location,
    }, ...p]));
    form.reset();
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
        imgBox.innerHTML = `<img className='h-full w-full' src='${imgUrl}' alt='new_event_cover' />`;
      }
      reader.readAsDataURL(file);
    } else {
      imgBox.innerHTML = 'No image';
    }
  }

  const handleThemeToggle = (theme: { name: string; url: string }) => {
    setThemeName(theme.name);
    const imgEle = document.getElementById('theme_img') as HTMLImageElement;
    imgEle.src = theme.url;
    form.setValue('img', theme.url);
  }

  const subscribe = form.watch();

  return (
    <Dialog modal>
      <DialogTrigger>
        <Button>Create</Button>
      </DialogTrigger>
      <DialogContent className='' style={{ maxWidth: '780px' }}>
        <Form {...form} >
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex m-0 gap-6 overflow-clip pt-6"
            style={{ border: '0px solid red' }}
          >
            <div className='w-[50%] h-[100%] grid gap-4 px-0'>
              <div className='flex items-center gap-2'>
                <Avatar className='text-[10px]'>
                  <AvatarImage src='' />
                  <AvatarFallback className='bg-blue-300'>root</AvatarFallback>
                </Avatar>
                <div className='flex flex-col space-y-[-4px]' >
                  <p className='text-sm text-gray-400'>Create Under</p>
                  <p className='text-md font-semibold text-gray-600'>Calender Events</p>
                </div>
              </div>
              <FormField
                control={form.control}
                name="eventName"
                render={
                  ({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className='p-0 my-2 text-3xl font-semibold focus-visible:ring-0 shadow-none border-0'
                          placeholder="Event name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
              />
              <div className='flex gap-1'>
                <CalendarMonthIcon
                  style={{ fontSize: 38, border: '0px solid red' }}
                  className='text-gray-500 p-0 m-0'
                />
                <Card className='h-full px-[2px] pt-[12px] pb-[6px] flex flex-col gap-1'>
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
                <FmdGoodIcon className='text-gray-500' style={{ fontSize: 38 }} />
                <Card className='w-full flex flex-col p-[8px] gap-1 justify-center'>
                  <p className='ml-[4px] font-normal '>Event Location</p>
                  <FormField
                    control={form.control}
                    name='location'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder='Bengaluru, India' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                          <Input
                            className='focus-visible:ring-0 border-0 shadow-none'
                            placeholder=''
                            {...field}
                            style={{ margin: 0 }} />
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
                          <Input
                            className='focus-visible:ring-0 border-0 shadow-none'
                            placeholder=''
                            {...field}
                            style={{ margin: 0 }} />
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
                          <VisibilityIcon
                            className='text-gray-400'
                            sx={{ fontSize: '16px' }}
                          />
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
              <DialogClose disabled={subscribe.eventName.length < 3} className='w-full' >
                <Button disabled={subscribe.eventName.length < 3} className='w-full' type="submit">Submit</Button>
              </DialogClose>
            </div>
            <div className='hidden md:grid w-[50%] justify-center px-0 gap-4'>
              <FormField
                control={form.control}
                name='img'
                render={() => (
                  <FormItem className='relative h-fit w-[100%] flex justify-center items-center'>
                    <div
                      id="image_div"
                      className='relative flex justify-center items-center h-[280px] w-[100%] rounded-[8px] overflow-clip'
                      style={{ border: '1px solid gray' }}
                    >
                      <img
                        id='theme_img'
                        className='h-full object-cover'
                        src={ThemeBGList[0].url}
                        alt='new_event_cover'
                      />
                      <div className='absolute w-full mx-2' style={{ border: '0px solid red' }}>
                        <p className='text-center text-3xl text-black'>{subscribe.eventName}</p>
                      </div>
                    </div>
                    <FormControl className='absolute h-[fit] bottom-0 right-0'>
                      <Input
                        id='img_input'
                        accept="image/*"
                        className='w-[28px] h-[28px] bg-transparent rounded-sm opacity-0'
                        type='file'
                        onChange={(e) => displayImage(e)}
                      />
                    </FormControl>
                    <AddPhotoAlternateOutlinedIcon
                      color='action'
                      onClick={handleImgFile}
                      className='absolute bottom-1 right-1 cursor-pointer'
                      style={{ fontSize: '22px' }}
                    />
                  </FormItem>
                )}
              />
              <div className='flex flex-col gap-[6px]'>
                <p className='text-gray-500 font-semibold'>Theme</p>
                <div className='flex w-[100%]'>
                  <ToggleGroup type='single' value={themeName} className='gap-2'>
                    {ThemeBGList.map((theme, i) =>
                    (<div key={i} className='h-full w-full flex flex-col items-center gap-1'>
                      <ToggleGroupItem
                        style={toggleStyle(theme.url)}
                        onClick={() => { handleThemeToggle(theme) }}
                        value={theme.name}
                        className={`flex data-[state=on]:border-2 data-[state=on]:border-solid data-[state=on]:border-gray-700`}
                      >
                        <img className='w-full object-cover' src={theme.url} alt={theme.name} />
                      </ToggleGroupItem>
                      <p className={`text-sm ${themeName == theme.name ? 'text-gray-700' : 'text-gray-400'}`}>
                        {theme.name[0].toUpperCase() + theme.name.substring(1, theme.name.length)}
                      </p>
                    </div>))
                    }
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
                      <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
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
                        <FontDownloadIcon className='text-gray-400' sx={{ fontSize: '16px' }} />
                        Typeface
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                        <FormControl className='w-[35%]' style={{ margin: 0 }}>
                          <SelectTrigger className='focus-visible:ring-0 border-0 shadow-none'>
                            <SelectValue placeholder="Select a public visibility" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="default">Default</SelectItem>
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