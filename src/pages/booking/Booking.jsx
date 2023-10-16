import React from 'react';
import {BookingCar,Navbar,Button,DatePicker } from '../../components'
import './booking.css';

const Book = () => {

  return <div className='carousel'>
   <Navbar/>
   <BookingCar/>
   <DatePicker/>
  </div>;
};

export default Book;
