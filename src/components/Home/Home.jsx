import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Home.css';

function Home() {
  return (
    <>
      <Header />
      <div>
        <button className="order">
          <Link to="/pizzaSelection">Place Order</Link>
        </button>
      </div>
      <div>
        <img src="images/pizza_photo.png" />
        <p>Pizza is great.</p>
      </div>
    </>
  );
}

export default Home;
