
import { Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function CustomerInfo() {
  const [inputName, setInputName] = useState('');
  const [inputStreetName, setInputStreetName] = useState('');
  const [inputCity, setInputCity] = useState('');
  const [inputZip, setInputZip] = useState('');
  const [inputType, setInputType] = useState('');
  const dispatch = useDispatch();

  const handleClickNavToCheckout = (event) => {
    event.preventDefault();
    dispatch({
      type: 'CUSTOMER_INFO_ADD',
      payload: {
        customer_name: inputName,
        street_address: inputStreetName,
        city: inputCity,
        zip: inputZip,
        type: inputType,
      },
    });

    //clear input fields
    setInputName('');
    setInputStreetName('');
    setInputCity('');
    setInputZip('');
    setInputType('');
  };

  return (
    <>
    <form onSubmit={handleClickNavToCheckout}>
      <input type="text" placeholder="Name" id="name" />
      <input type="text" placeholder="Street Address" id="streetName" />
      <input type="text" placeholder="City" id="city" />
      <input type="text" placeholder="Zip" id="zip" />
      <input type="checkbox"/>Pickup
      <input type="checkbox"/>Delivery
      <Button type="submit">Next</Button>
    </form>
    </>
)};

export default CustomerInfo;
