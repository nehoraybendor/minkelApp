import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { orange } from '@mui/material/colors';
import { TextField } from '@mui/material';

export default function TimePickerValue() {
 // const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));

 return (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
   <DemoContainer sx={{color:orange}}  components={['TimePicker', 'TimePicker']}>
    <TimePicker
     label="שעת כניסה"
     sx={{bgcolor:'white'}}
     // defaultValue={dayjs(new Date)}
    />
    <TimePicker
     label="שעת יציאה"
     sx={{ bgcolor: 'white' }}
     // defaultValue={dayjs(new Date)}
    />
   </DemoContainer>
  </LocalizationProvider>
 );
}
