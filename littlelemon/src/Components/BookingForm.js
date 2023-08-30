import React, { useState } from 'react';

const BookingForm = (props) => {
  const [date, setDate] = useState('-1');
  const [time, setTime] = useState('-1');
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('-1');

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const dateString = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

  const validateForm = (e) => {
    e.preventDefault();
    props.submit(e, {
      date: date,
      time: time,
      guests: guests,
      occasion: occasion
    });
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    setTime('-1'); // Reset time to "-1" when date changes
    props.handleChanges(newDate);
  };

  return (
    <section className='form-container'>
      <form className='form'>
        <h3>Reservation Form</h3>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date === '-1' ? dateString : date}
          onChange={(e) => (handleDateChange(e))}
        />

        {props.availableTimeSlot.length === 0 || date < dateString ? (
          <p id='noAvailableTime'>No available bookings for this day.</p>
        ) : (
          <>
          
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
              <option value='-1' hidden>Click Me</option>
              {props.availableTimeSlot.map(slot => (
                <option key={slot}>{slot}</option>
              ))}
            </select>
          </>
        )}

        <div className='max-guests'>
          <label htmlFor="guests">Number of guests</label>
          <p>Max 10 Guests</p>
        </div>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={e => setGuests(e.target.value)}
        />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
          <option value='-1'>Click Me</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>

        <input
          type="submit"
          disabled={time === '-1' || occasion === '-1' || guests <= 0 || guests > 10}
          value="Make Your Reservation"
          onClick={validateForm}
        />
      </form>
    </section>
  );
}

export default BookingForm;
