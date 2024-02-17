import './OrderCheckout.css';
import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import axios from 'axios';

function OrderCheckout() {
  //setting up order global state
  let pizzaCart = useSelector((store) => store.addPizzaToCart);
  let price = Number(pizzaCart.price);
  let name = pizzaCart.name;
  // console.log('pizza cart', pizzaCart);

  //setting up customer global state
  let customerInfo = useSelector((state) => state.customerInfo);
  let customerName = customerInfo.customer_name;
  let streetAddress = customerInfo.street_address;
  let cityName = customerInfo.city;
  let zipName = customerInfo.zip;
  let inputType = customerInfo.type;

  //pushing pizza into array
  let pizzaArray = [];
  pizzaArray.push(name);
  console.log(pizzaArray);

  //making sample pizza object
  let pizzaObject = [
    {
      id: pizzaArray.length,
      quantity: pizzaArray.length,
    },
  ];
  console.log(pizzaObject);

  const handleSubmit = () => {
    console.log('in handleSubmit');
    console.log(
      customerName,
      streetAddress,
      cityName,
      zipName,
      inputType,
      price,
      pizzaArray
    );
    axios
      .post('/api/order', {
        customer_name: customerName,
        street_address: streetAddress,
        city: cityName,
        zip: zipName,
        type: inputType,
        total: price,
        pizzas: pizzaObject,
      })
      .then((response) => {
        // Success!
        alert('Item Added!');
      })
      .catch((error) => {
        console.error('ERROR:', error);
      });
  };
  return (
    <>
      <Header />
      <div>
        <h2 className="header">Step 3: Checkout</h2>
      </div>
      <main>
        <h3 className="type">Type: {inputType}</h3>
        <div className="container">
          <p>{customerName}</p>
          <p>{streetAddress}</p>
          <p>{cityName}</p>
          <p>{zipName}</p>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{name}</td>
                <td>{price}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3 className="total">Total: $ {price}</h3>
        </div>
        <div className="checkout">
          <button onClick={handleSubmit}>Checkout</button>
        </div>
      </main>
    </>
  );
}

export default OrderCheckout;
