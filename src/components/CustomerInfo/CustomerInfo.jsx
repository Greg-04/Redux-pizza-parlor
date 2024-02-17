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
        zip: parseInt(inputZip),
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
      <Header />
      <div>
        <p>Step 2: Customer Information</p>
        <form onSubmit={handleSubmit} className="add-customer-form">
          <input
            required
            placeholder="Name"
            type="text"
            value={inputName}
            onChange={(event) => setInputName(event.target.value)}
          />
          <span>
            <input
              required
              type="radio"
              name="radio"
              value="Pickup"
              onChange={(event) => setInputType(event.target.value)}
            />
            Pickup
          </span>
          <br></br>
          <input
            required
            placeholder="Street Address"
            type="text"
            value={inputStreetName}
            onChange={(event) => setInputStreetName(event.target.value)}
          />
          <span>
            <input
              required
              type="radio"
              name="radio"
              value="Delivery"
              onChange={(event) => setInputType(event.target.value)}
            />
            Delivery
          </span>
          <br></br>
          <input
            required
            placeholder="City"
            type="text"
            value={inputCity}
            onChange={(event) => setInputCity(event.target.value)}
          />
          <br></br>
          <input
            required
            placeholder="Zip"
            type="text"
            value={inputZip}
            onChange={(event) => setInputZip(event.target.value)}
          />
          <br></br>
          <Button type="submit">
            Next<Link to="/orderCheckout"></Link>
          </Button>
        </form>
      </div>
    </>
  );
}

export default CustomerInfo;
