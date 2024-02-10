import { Link } from 'react-router-dom';

function Home() {
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
        </ul>
      </div>
      <div>
        <img src="images/pizza_photo.png" />
        <p>Pizza is great.</p>
      </div>
    </>
  );
}

export default Home;
