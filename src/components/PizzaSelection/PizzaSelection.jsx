// imports:
import Header from '../Header/Header';
// import { useSelector } from 'react-redux';
// import PizzaItem from '../PizzaItem/PizzaItem';

// functions:
function PizzaSelection() {
  // const pizzaList = useSelector((store) => store.pizzaList);

  // pizzaRefreshList
  return (
    <div>
      <Header />
      <h1 className="blackFont">Step 1: Select your pizza.</h1>
      <p className="blackFont"> TEST TEST </p>
      {/* TODO: Display pizza menu options */}
      {/* TODO: .map (loop through data) */}
      {/* TODO: Add Next Button that navigates to CustomerInfo*/}
      {/* <ul>
        {pizzaList.map((pizza) => (
          <PizzaItem
            key={pizza.id}
            pizza={pizza}
            fetchPizzaList={fetchPizzaList}
          />
        ))}
      </ul> */}
      <button>Next</button>
    </div>
  );
}

export default PizzaSelection;
