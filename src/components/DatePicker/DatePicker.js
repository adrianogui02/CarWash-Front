import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import './datePicker.css'

export default function StaticDatePickerLandscape() {
  return (
    <div className='calendar'>
        <div className='calendar-item'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker orientation="landscape" />
            </LocalizationProvider>
        </div>
        <div className='time-item'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticTimePicker orientation="landscape" />
            </LocalizationProvider>
        </div>
    </div>
  );
}