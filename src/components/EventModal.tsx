import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Avatar, Backdrop, Dialog, DialogContent, Modal, Paper, TextField, useMediaQuery, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PublicIcon from '@mui/icons-material/Public';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const style = {
  width: { xs: '100%', md: 600, lg: 720 },
  height: { xs: '100%', md: 'max-content' },
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: {xs: '100%', 600},
  boxShadow: 24,
  borderRadius: '6px',
  p: 4,

};

interface EventModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EventModal({ open, setOpen }: EventModalProps) {
  const theme = useTheme();
  const handleClose = () => setOpen(false);


  return (
    <Modal open={open} onClose={handleClose} closeAfterTransition>
      <Box bgcolor='white' sx={{
        ...style,
        display: 'flex', margin: 2, gap: 4, overflow: 'clip'
      }}>
        <Box width='60%' height='100%' display='grid' paddingY={2} gap={2}>
          <Box display='flex' gap={1}>
            <Avatar src='https://dub.sh/4OpRHmb' />
            <Box display='grid' >
              <Typography color={grey[400]} fontSize='12px'>Create Under</Typography>
              <Typography fontSize='14px' fontWeight={600}>Root Events</Typography>
            </Box>
          </Box>
          <TextField variant="standard" label='Event Name' sx={{}} value='Laeaasdf' />
          <Box display='flex' gap={1}>
            <CalendarMonthIcon sx={{ fontSize: 48 }} />
            <Paper sx={{ bgcolor: grey[100], boxShadow: 0, width: 280, height: 'fit-content', padding: 0, display: 'flex', flexDirection: 'column', gap: 1, pt: '8px' }}>
              <Box display='flex' alignItems='center' gap={1} px='8px'>
                <Typography variant='body2' sx={{ flex: 1 }} fontWeight={600}>Start</Typography>
                <TextField size='small' type='date' variant="outlined" sx={{ flex: 2, bgcolor: grey[300] }} />
                <TextField size='small' type='time' variant="outlined" sx={{ flex: 2, bgcolor: grey[300] }} />
              </Box>
              <Box display='flex' alignItems='center' gap={1} px='8px'>
                <Typography variant='body2' sx={{ flex: 1 }} fontWeight={600}>End</Typography>
                <TextField size='small' type='date' variant="outlined" sx={{ flex: 2, bgcolor: grey[300] }} />
                <TextField size='small' type='time' variant="outlined" sx={{ flex: 2, bgcolor: grey[300] }} />
              </Box>
              <Box display='flex' alignItems='center' borderTop={`1px solid ${grey[300]}`} gap={1} px='8px' py='4px'>
                <PublicIcon sx={{ fontSize: 20 }} />
                <Typography variant='caption' sx={{ mt: '1px' }}>GMT +5.30 Asia/Kolkata</Typography>
              </Box>
            </Paper>
          </Box>
          <Box display='flex' gap={1}>
            <FmdGoodIcon sx={{ fontSize: 44, border: `1px solid ${grey[100]}`, bgcolor: grey[50], p: '2px' }} />
            <Paper sx={{ bgcolor: grey[100], boxShadow: 0, width: 280, height: 'fit-content', padding: 0, display: 'flex', flexDirection: 'column', gap: 1, pt: '8px' }}>
              <Box display='grid' gap={1} px='8px'>
                <Typography fontSize='15px'>Add Offline Event Location</Typography>
                <TextField size='small' type='url' variant="outlined" placeholder='Offline location or virtual link' sx={{}} />
              </Box>
            </Paper>
          </Box>
          <TextField variant="standard" label='Event Name' sx={{}} value='Laeaasdf' />
          <TextField variant="standard" label='Event Name' sx={{}} value='Laeaasdf' />
          <TextField variant="standard" label='Event Name' sx={{}} value='Laeaasdf' />
        </Box>
        <Box display={{ xs: 'none', md: 'grid' }} width='40%' justifyItems='center' >
          <img style={{ borderRadius: '10px', width: '100%', height: '50%' }} src={i} />
        </Box>
      </Box>
    </Modal >
  );
}

const i = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhEPDxIPDw8PDw8PDw8PDxEPDw8PGBQZGRgUGBYcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Pzw0NTEBDAwMEA8QGBESGDEhGCExMTExMTExNDQ0NDExNDE0NDExMTQxNDExNDQxNDQ0MTQ0MTExMTQ0MTQxNDE0MTQxNP/AABEIALsBDQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EADAQAAIBAwQBAwMEAgEFAAAAAAABAgMEEQUSITFBBlFxEyJhMlKBoRWRsRQWQsHR/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACsRAAICAQMDAwMEAwAAAAAAAAABAhEDEiExBAVBE1FxIkJhkcHw8YGh0f/aAAwDAQACEQMRAD8A8tEHgWDqMQBB4FgAAEHgWAAEYLAsBQA4GwFgbABY2BgsCwIdgiHwLABYwh8CwAWJDoQSAkeJJEBEkRiZLEniQwJoFIzZZpMtwqFJMfeUQ0WKlYp1auRpzK8pibGojSZBUJXICRm2aIqyAZLNEUiTQAQ4wihCELIgLgsEm0W03IIxEm0W0VARiJNotoUBFgWCTA2BAR4FgPAsAAGBYCGwAA4GwHgbAADgWAhgAYcQsiAJEsSFBpgSyeJLGRBGQakUmSyfcC5Ee4jlIbYqCnIhdQU5EUmQ2WkS7wZMi3DbhDoebI5DyYLEUCxDgsRQw4wxIGw4jbSXaLadJlZFtH2h4HwA7A2jOJJgTQgshaGcSbaC4gBFgYlcRtoqAiwLAbQzQDsDALDaBkIAGMx2wRWAw6Q4UUSAUYhbA4oTAmyLoJTGkwMlWFEu4GTB3ASkKwSHlIjbBlIFyJsugmxsg5GyFjoPILELIAIFhAsQwRh2NkljOhwNtJdolE6zAi2j7SZQC2joCvtG2lnaM4BQFZxE4k7gC4ioCHaA4k7iC4iAhaGaJnEBxACCSIpk80QyRDLIWOkPgRADpBIFDpgBNFjSYG4aUhE0NJgNikwGxlBZAkxNgtgMGTGbFIBsybKQWR8keR8hYw8jgZHyUmIIZiyMADMYdgiYzq8DqIWA4ROxHLYKiFsL9GybWW8fxkKpYNLMef4wwtCtGc4AOJZlDADiAyBxAcSw4kbiAyFxBcSdxBcRDK7iM4k7iPtAZUdMjlRLygHGlkVWKzJnRZFKJuTtihc0MCeMakZ7FuFOOAGzNo0JNwzZHkWRBQmxmxNgsAGbExNgtksoZgMJyI2yGyqHGTEIgYWR8gCyOxUHkWQcj5KsB2MLIhiOuTLlhBOXPjkpRLlpPDWeun8HUcjOltaCl30XlQS6X9FewmmljGMGhuWM+DJkHP6rZxy2lh9mNOGODpruW5t/hmNUpZbwaJlIz3ABwL8rchnSZRRTcQXEsygA4ABX2jNE7gRziAEafJcoxM9vDLFCqVBCkaSpoz7yii7GrwVLqoa0QuTBuoYKbNC6ZnyOXJydMQcjsbIsmZYgWx2wQGIFhDMhgRsENgMzZSEIHIsgUOxsiFgACEhIcBCyLIwgA7KMSxTRPTs8+SeNmzttHLol7D2txKD+1tGlG83fqbKVK0bLUbRrwBnQc6u7iJJT0+bWVCbT8qDaOk9M6PFr6tSO5vmKa4S9zroQwsLghySGotnlM7Zrhpp+zWGVK1Ps9S1TTqdSD3RW5L9SWGjzfU6f05yg+4topOwpp7mbsF9JASq4F9dDZpFDyt89ATsvfgt20038IepMuJz5ptPYw7m1a5XJRU8M3664MC/hibx55KltuGKbk6ZNG6IK9zkpTmyGU2Q8p0LGHWqZK0gpMFsxbs1SoYFjsWCRgMYPaC4gMYIHBLSjlpfkErE9h42zfIM7Vro0lECUTo9GNGetmNKOOAS5eQ5T9yuonHOGltG6doFIfAaQaQtIEeBmiRoFoGgAaAJGASM9Yo0vwXaVs5NRSy3wku2x7ShKb+1fydV6V05/X3TSxCLlHzz0v+TbVQ3wT6b6SxFOrLY3ztisyXy+ixdemElmm92PDSjL+PB1AiPUkZenEwtLpbYJP7cLGMYawX9iK2pVfpzTXU1lr8+5HHUoecp+2CudyarYmrvEZZ9meUepKylWm1ys4/0dt6m1hxp/Z9u5uOfPR5vdT3NmsNkZSVsy69SWeB6cZsuwtNzNKhp644G5FpUZVvuT888MubWaf+NXsRVLRx6yOOWtjOfT63Znypt99Lsybqnuk3/r4NucX0yjcUyMmRvY7em6SMVflmFXoe5nVIYN2uizY6Bv+6rxnqBkpe534+3yzSrH45b4RyUgHI7W89N03HhOL8OOWcnqdhOhPZJfD9x6rDqu2ZenjrdSj7r9/P7FXI8WCoS/bL/TFFNd5HZ5pIg1HJo6JpLrPc8qCePk6VaDSxjbz8sTkkep03ac2eCyWop8X5OHcBQeGn7HTXukfR+5LMX58ozqtNPtIFMnJ2vJDaTV/wA8kMZJoaTKtWLhLCfD5XwNvb4On1U0eTLE4yafgG5luf4RAoltUzodI9MfVSnUbSfUF/8ATCb8s6+l6bJ1EtONcct8L+fqcvCBJsO7qelaGMRjJS998n/yc/f6LOi/3R8PHXyZ3fB25+2ZcMHN04rmvH6pGDKIDia//QsGVg/YvSeU5JGPKJE0bE7F+wa0r92c/gicaNsGHJmemCs9e0ynjB0mm3H05xk/0viXwzk9KuOvK4Nud1iP8dg+TJcHcwkmk000+mnlMGrVjCLnOSjCKzKUmkkvds8iv/VNahUat60opLEo8Sg5Z7w+DA1r1VdXEdlWrKUf28Rj/pYRaw+b2IeX8He6j6lp3FWTpSTjD7YpvDaT/Vj2ZE79Y3SaSXLbaSS9zyf67zlN590+SZ3k5LEpzkvaUm0apJcIzd+51Wuayq01GHMIZSf7pPt/BDbWTlhyePx2zI0yWZ5fhHRW1RGOWbTpHqdF0cMkNc9y3b6fjnhr45NW3t4lS2rJBO7UZNZM4Sctieq6dYt48Gk7aJSuaK/AcrxY7M+6uu8MrcwjEyb6O1mVcVUWdSusowbiq2a6b5KWVx2LNtJTqxT6TTOxpRSS+DzynW2yUvZnY6fqcakVzz54MZxp7H0facqyYpR+67/xsa2wztV06M1GUoptPjKLLuopCo3CqtJcpMmCdqi+55Fj6aal9ypfn+inTsYqOFFY+DK1XTItN7eV+DvaFrHHRS1W0govjwdKbPjXwYOl20YU4pccf+y6kjPpXcYfZJ4x154J/wDqo47OeUWm0ffdHljnwwlDikvj8D6hFOnJPo4zBr6zrEUvpp5b7wYDul/4rn8gos4u4dXig1By+pc/8+SK+xlL2RDTjyKbbeX2wYvBstj5bLP1JuXuXrGmnUgn05cnpdnTW3g8tpVsNNcNM9B0DVo1FGOcS4TRGRXue52bJFY8mP7rT+VVf6OjtrTc+haho0ZQeV49joNMt47U+GXp28ZLGODGPIuq62tUV52PKq+jOPjKIf8AHfg9NudNg10UY6XDPR1rIqPnXFnDW+iZknJcZLdbRVnr+juoafBLoaraxz0c+SVs9Los3pJr3PJbHWZU/JcvfU05R2x4yscHIKqSRk2dNI80nrVpSefIDi32S0oE6gUS2U1AljAm2CSGKyW0q7JJ+On8G1TuPKfBi0Y5ZaUPbgxzRvfyex2zNKCaauNms9RUFlv+PLKP+V3Ny92VnQ3d8laVvhtE4kl8h3Gbk1tUTZhqnHJHX1D2M6NACpTNaRwqVIC5udxQrTJK3BTqSKZlqbYE5gxuJR6bXwBMiZmzWE5Rdp0y3K/qNrMpNHTaJfuODjsF6yvNnY4NInNOeTeUm3+XZ6jbav8AbzH+ypqOoOS9v5OVoa1FLlkd3rUWuGa1FbnL9TI9VuOzCd3PlbpY+Qrq7c2VoIym02dOKUoL6W18MlWXyyTAMEFIkCOUiOUgpMibBgHBm96eqYqR5xyc9FmhYVtkkxxBtpbHvGiXCcI8+EbsJo8u9P8AqJRSjNnUx9R00v1f2RKDvYFL3OjuaiwU1UWTm7r1NDwzOl6ngn2CgydSO8jVWCtWrLPZx3/dlP3/ALKdf1XFvh/2T6bL1o81gWaJBFEkGaozZoU2TplKnMN1C0ZsmnMZMg3DqRaEXLeeJF6MjHjPBPTuTLIrO/o8qgqZtUkgZQTkypSuSeNUUI0Pq8ynSJXDgqV0WJVSjcVTQ5EzPuihULVxLJVkDERSA2kjQlAzkbY46gMDJE/0woUssS3NMkNKsgUAZ02a9K0yNVtMGmg5dZhtBQLVWgRqkzJ7M6IQclaFFikxpRwA5BYSjXI0iNoJsBsZmOianIg3ElNiTCjUtq7XTLyu5YKllQya8LPg1SIexQnWkytOozUq2uCrK3BomzMqVJETqzNV2v4K9S35JaZSKqCiwBIEBYjIPJDEIohh5CUiIQ0IkcwVMCRGxSNIl+lWLMK5mQJ4iQ5F2dcqVqo0itUHZIM5EbYMhMQCXZepUShT/UjaodL5M8jo9vs+COSUnLwQugFCmk0WGRTJxt6ju7t00Fgclyi/RisEdylgai+CK5Z2HyRUlFdgfTDh1/IbOLLJ6j6vt2CDwKTW7KFzDCM2UzVvemYsuwvazzu4QUMlIOUwHIFgSJs8+g9xatllopovWhUUaY4qTo6XT4rCNeE0jHsuixOb9zeLsnPjUS3cTWCjlZIa0n7kEZPPZZymjhFaq1kZyeOyvVfJDLSP/9k=';