// Pizza Item (the nitty gritty of each pizza item)
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

function PizzaItem({ fetchPizzaList, pizza }) {
  const dispatch = useDispatch();
  // console.log('in PizzaItem()');
  // console.log('pizza Name: ', pizza);

  // we want to add button to be shown as default:
  const [addButtonShown, setAddButtonShown] = useState(true);
  // let pizzaName = pizza.name;
  // console.log('pizza test: ', pizzaName);
  let id = 1;
  // TODO: function to add pizza to cart && Toggle Remove button
  const handleAddButton = () => {
    console.log('in handleAddButton');
    console.log('ADD Pizza: ', pizza.id);
    // ADD Pizza to cart -- add to Redux Store
    dispatch({
      type: 'ADD_ITEM_TO_CART',
      payload: {
        name: pizza.name,
        price: pizza.price,
      },
    });
    // make the remove button appear
    setAddButtonShown(!addButtonShown);
  };

  // TODO: function to remove pizza from cart
  const handleRemoveButton = () => {
    console.log('in handleDeleteButton()');
    console.log('DELETE Pizza: ', pizza.id);
    // DELETE pizza from Cart -- remove from Redux Store

    // make the remove button appear
    setAddButtonShown(!addButtonShown);
  };
  return (
    <Grid item className="gridContainer">
      <img src={pizza.image_path} className="pizzaImage" />
      <h1 className="pizzaTitle">{pizza.name}</h1>
      <p className="pizzaDescription">{pizza.description}</p>
      <p className="pizzaPrice">{pizza.price}</p>
      {/* TODO: Add button switches to remove item */}
      {addButtonShown ? (
        <button type="button" className="addButton" onClick={handleAddButton}>
          Add
        </button>
      ) : (
        <button
          type="button"
          className="removeButton"
          onClick={handleRemoveButton}>
          Remove
        </button>
      )}
    </Grid>
  );
}

export default PizzaItem;
