import React from 'react'


import {useState} from 'react'

const BookingForm = (props) => {
  const [date, setDate] =useState("");
  const [time, setTime] =useState(NaN);
  const [guests, setGuests] =useState(NaN);
  const [occasion, setOccasion] =useState(NaN);

  const FormData = {
    date:date,
    time:time,
    guests:guests,
    occasion:occasion
  }

 
 const handleDateChange = (e) => {
  const newDate = e.target.value; // Get the new date value from the input
  setDate(newDate);
  props.handleChanges(newDate); // Call handleChanges function with the new date
};

  return (
  <section className='form-container'>
    <form className='form'>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date"  onChange={ (e) => (handleDateChange(e))  } />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={e=> setTime(e.target.value)}>
        {props.availableTimeSlot.map(slot =>(
        <option>{slot}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e=> setGuests(e.target.value)} />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={e=> setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your Reservation" onClick={ e => props.submit(e , FormData)} />
    </form>
  </section>
      );
}

export default BookingForm