// imports:
import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

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
      <Container>
        <Box className="container">
          <Grid container>
            {pizzaList.map((pizza) => (
              <Grid item xs={12} md={4} lg={4}>
                <Paper>
                  <PizzaItem
                    key={pizza.id}
                    pizza={pizza}
                    fetchPizzaList={fetchPizzaList}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <button>Next</button>
    </div>
  );
}

export default PizzaSelection;
