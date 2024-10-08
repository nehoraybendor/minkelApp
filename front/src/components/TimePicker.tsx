import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { orange } from '@mui/material/colors';
import { TextField } from '@mui/material';

export default function TimePickerValue() {
 // const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));

 return (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
   <DemoContainer sx={{ display:'flex'}} components={['TimePicker', 'TimePicker']}>
    {/* <DemoItem  sx={{m:2}}> */}
    <TimePicker
     label="שעת יציאה"

     sx={{bgcolor:'white',outline:'none'}}
     // defaultValue={dayjs(new Date)}
    />
   {/* </DemoItem> <DemoItem> */}
    <TimePicker
     label="שעת כניסה"

     sx={{ bgcolor: 'white' }}
     // defaultValue={dayjs(new Date)}
    />
   {/* </DemoItem> */}
   </DemoContainer>
  </LocalizationProvider>
 );
}
