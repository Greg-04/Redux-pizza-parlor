// Pizza Item (the nitty gritty of each pizza item)
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function PizzaItem({ fetchPizzaList, pizza }) {
  console.log('in PizzaItem()');
  console.log('pizza Name: ', pizza);
  return (
    <Grid item xs={8}>
      <img src={pizza.image_path} className="pizzaImage" />
      <h1>{pizza.name}</h1>
      <p className="pizzaDescription">{pizza.description}</p>
      <button type="button">Add</button>
    </Grid>
  );
}

export default PizzaItem;
