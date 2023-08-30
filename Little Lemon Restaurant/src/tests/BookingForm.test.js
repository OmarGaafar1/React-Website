import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For better matchers
import BookingForm from './BookingForm'; // Import your BookingForm component

describe('BookingForm', () => {
  it('should show "No available bookings for this day." when no available time slots', () => {
    const availableTimeSlot = [];
     render(<BookingForm availableTimeSlot={availableTimeSlot} />);

    const noAvailableMessage = getByTestId('No available bookings for this day.');
    expect(noAvailableMessage).nottoBeInTheDocument();
  });

});
