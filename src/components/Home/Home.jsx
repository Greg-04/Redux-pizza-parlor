import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function Home() {
  return (
    <>
      <Header/>
      <div>
        <img src="images/pizza_photo.png" />
        <p>Pizza is great.</p>
      </div>
    </>
  );
}

export default Home;
