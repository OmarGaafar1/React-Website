import React, { useReducer } from 'react'

import BookingForm from './BookingForm'
import Header from './Header'
import {useState} from 'react'

import {fetchAPI , submitAPI} from './mockAPI'


const BookingPage = () => {


  const submit = async(e , formData) => {
    console.log("da5alna gwa ");
    e.preventDefault();
    const Success = await submitAPI(formData);
    if(Success)
    {
      const element = document.getElementById('confirmed-booking');
      element.style.visibility= 'visible';
    }
    else
    {
    }

  }

  const updateTime = (state, action)=>{
    if(action.type === 'Fetch_Scuccessfully')
    {
      return action.payload.times;
    }
    else
    {
      return [];
    }
  }
  const initilTimeSlots =[];
  const [availableTimeSlot, dispatch] = useReducer( updateTime,initilTimeSlots )

  const handleChanges = async (date)=>{
    try {
      const times = await fetchAPI(date);
      dispatch({type:"Fetch_Scuccessfully", payload:{times}})
    } catch (error) {
      console.error("No times this day! ");
      dispatch({type:"Fetch_Failed"})
      
    }
  }

  return (
    <>
    <Header/>
    <BookingForm availableTimeSlot={availableTimeSlot}  handleChanges = {handleChanges}  submit={submit}/>

    </>
  )
}

export default BookingPage