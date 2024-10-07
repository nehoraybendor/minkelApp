// import React from 'react'
// import GraphArea from '../graphs/graphArea'
// import GraphCol from '../graphs/graphCol'
// import GraphLine from '../graphs/graphLine'
// import GraphPie from '../graphs/graphPie'
// import DatePickers from '../DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import BasicDatePicker from '../DatePicker'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import ResponsiveDatePickers from '../DatePicker'
import TimePickerValue from '../TimePicker'
import { Container, Grid2 } from '@mui/material'
import SimpleSnackbar from '../Snackbar'
import { DemoItem } from '@mui/x-date-pickers/internals/demo';


const Home = () => {

  return (
    <Container maxWidth="sm" sx={{color:'orange'}}>
      <h2 className='text-center text-[50px] mt-2'>שעון נוכחות</h2>
      <Grid2 >
        <ResponsiveDatePickers />
      </Grid2>
      <Grid2>
        <TimePickerValue />
      </Grid2>
      <Grid2>
        <SimpleSnackbar />
      </Grid2>
    </Container>
  )
}

export default Home