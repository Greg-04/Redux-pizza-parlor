import './OrderCheckout.css';
import Header from '../Header/Header';

function OrderCheckout() {
  return (
    <>
      <Header />
      <div>
        <h2 className="header">Step 3: Checkout</h2>
      </div>
      <main>
        <h3 className="type">Type:</h3>
        <div className="container">
          <p>Name</p>
          <p>Street Address</p>
          <p>City</p>
          <p>Zip</p>
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
                <td>Customer Name</td>
                <td>Customer Cost</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3 className="total">Total: $</h3>
        </div>
        <div className="checkout">
          <button>Checkout</button>
        </div>
      </main>
    </>
  );
}

export default OrderCheckout;
