import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingPage from './BookingPage'; 

describe('BookingPage', () => {
  it('should render BookingForm component and show confirmation on successful submission', async () => {
    const { getByLabelText, getByText, queryByText, findByTestId } = render(<BookingPage />);

    const dateInput = getByLabelText('Choose date');
    fireEvent.change(dateInput, { target: { value: '2023-12-31' } });

    const timeSelect = await findByTestId('res-time'); 
    fireEvent.change(timeSelect, { target: { value: '10:00 AM' } });

    const guestsInput = getByLabelText('Number of guests');
    fireEvent.change(guestsInput, { target: { value: '5' } });

    const occasionSelect = getByLabelText('Occasion');
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    const submitButton = getByText('Make Your Reservation');
    fireEvent.click(submitButton);

    const confirmationMessage = await findByTestId('confirmed-booking');
    expect(confirmationMessage).toBeVisible();

    const noAvailableMessage = queryByText('No available bookings for this day.');
    expect(noAvailableMessage).not.toBeInTheDocument();
  });


});