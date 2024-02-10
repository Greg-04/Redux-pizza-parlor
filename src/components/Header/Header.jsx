import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/orderCheckout">Cart</Link>
          </li>
          <li>
            <Link to="/pizzaSelection">Order</Link>
          </li>
          <li>
            <Link to="/customerInfo">Customer Information</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
