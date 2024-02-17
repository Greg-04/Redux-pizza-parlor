// Pizza Item (the nitty gritty of each pizza item)
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useState } from 'react';

function PizzaItem({ fetchPizzaList, pizza }) {
  // console.log('in PizzaItem()');
  // console.log('pizza Name: ', pizza);

  // we want to add button to be shown as default:
  const [addButtonShown, setAddButtonShown] = useState(true);

  // TODO: function to add pizza to cart && Toggle Remove button
  const handleAddButton = () => {
    console.log('in handleAddButton');
    // make the remove button appear
    setAddButtonShown(!addButtonShown);
  };

  // TODO: function to remove pizza from cart
  return (
    <Grid item className="gridContainer">
      <img src={pizza.image_path} className="pizzaImage" />
      <h1 className="pizzaTitle">{pizza.name}</h1>
      <p className="pizzaDescription">{pizza.description}</p>
      {/* TODO: Add button switches to remove item */}
      {addButtonShown ? (
        <button type="button" className="addButton" onClick={handleAddButton}>
          Add
        </button>
      ) : (
        <button type="button" className="removeButton">
          Remove
        </button>
      )}
    </Grid>
  );
}

export default PizzaItem;
