import './OrderCheckout.css';
import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import axios from 'axios';

function OrderCheckout() {
  //setting up order global state
  let pizzaCart = useSelector((store) => store.addPizzaToCart);
  // let id = pizzaCart.map((pizza) => pizza.id);
  // console.log('id:', id);
  // let price = Number(pizzaCart.price);
  // let name = pizzaCart.name;
  console.log('pizza cart', pizzaCart);

  //taking in all the prices to set up total
  const prices = pizzaCart.map((pizza) => Number(pizza.price));
  console.log('prices', prices);
  let totalPrice = 0;
  for (const price of prices) {
    totalPrice += price;
  }

  //setting up customer global state
  let customerInfo = useSelector((state) => state.customerInfo);
  let customerName = customerInfo.customer_name;
  let streetAddress = customerInfo.street_address;
  let cityName = customerInfo.city;
  let zipName = customerInfo.zip;
  let inputType = customerInfo.type;

  //working with updated addpizzatocartobject
  let pizzaOrderNumber = pizzaCart.length;
  console.log('Number of pizza orders', pizzaOrderNumber);

  //pushing pizza into array
  // let pizzaArray = [];
  // pizzaArray.push(name);
  // console.log(pizzaArray);

  //making sample pizza object
  let pizzaObjectArray = [
    {
      id: pizzaOrderNumber,
      quantity: pizzaOrderNumber,
    },
  ];

  console.log('pizzaObject', pizzaObjectArray);

  const handleSubmit = () => {
    console.log('in handleSubmit');
    console.log(
      customerName,
      streetAddress,
      cityName,
      zipName,
      inputType,
      totalPrice,
      pizzaObjectArray
    );
    axios
      .post('/api/order', {
        customer_name: customerName,
        street_address: streetAddress,
        city: cityName,
        zip: zipName,
        type: inputType,
        total: totalPrice,
        pizzas: pizzaObjectArray,
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
              {pizzaCart.map((pizza, index) => (
                <tr key={index}>
                  <td>{pizza.name}</td>
                  <td>{pizza.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h3 className="total">Total: $ {totalPrice}</h3>
        </div>
        <div className="checkout">
          <button onClick={handleSubmit}>Checkout</button>
        </div>
      </main>
    </>
  );
}

export default OrderCheckout;
