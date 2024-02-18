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
      <Container className="container">
        <Box>
          <Grid
            container
            className="pizzaContainer"
            alignItems="center"
            justifyContent="center"
            gap={2}>
            {pizzaList.map((pizza) => (
              <Grid item xs={12} md={3} lg={3} key={pizza.id}>
                <Paper>
                  <PizzaItem pizza={pizza} fetchPizzaList={fetchPizzaList} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      {/* This next button will go to the Customer Info */}
      <button className="pizzaSelectionNextButton">Next</button>
    </div>
  );
}

export default PizzaSelection;
