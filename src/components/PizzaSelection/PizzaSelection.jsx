// imports:
import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// functions:
function PizzaSelection({ fetchPizzaList }) {
  const pizzaList = useSelector((store) => store.pizzaList);
  console.log('pizza list: ', pizzaList);
  // pizzaRefreshList
  return (
    <div>
      <Header />
      <h1 className="blackFont">Step 1: Select your pizza.</h1>
      {/* TODO: Display pizza menu options */}
      {/* TODO: .map (loop through data) */}
      {/* TODO: Add Next Button that navigates to CustomerInfo*/}
      <ul>
        <Box className="container">
          <Grid container spacing={2} columns={2}>
            {pizzaList.map((pizza) => (
              <PizzaItem
                key={pizza.id}
                pizza={pizza}
                fetchPizzaList={fetchPizzaList}
              />
            ))}
          </Grid>
        </Box>
      </ul>
      <button>Next</button>
    </div>
  );
}

export default PizzaSelection;
