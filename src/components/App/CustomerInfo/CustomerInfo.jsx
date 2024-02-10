
import { Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function CustomerInfo() {
  const [inputName, setInputName] = useState('');
  const [inputStreetName, setInputStreetName] = useState('');
  const [inputCity, setInputCity] = useState('');
  const [inputZip, setInputZip] = useState('');
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
      },
    });

    //clear input fields
    setInputName('');
    setInputStreetName('');
    setInputCity('');
    setInputZip('');
  };

  return (
    <form onSubmit={handleClickNavToCheckout}>
      <input placeholder="Name" id="name" />
      <input placeholder="Street Address" id="streetName" />
      <input placeholder="City" id="city" />
      <input placeholder="Zip" id="zip" />
      <input type="checkbox">Pickup</input>
      <input type="checkbox">Delivery</input>
      <Button type="submit">Next</Button>
    </form>
)}}

export default CustomerInfo;
