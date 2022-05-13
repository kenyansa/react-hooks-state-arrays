import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    //spread operator (...) makes a copy of our foods array, and inserts it into a new array. We're also adding the newly generated food returned by the getNewSpicyFood function at the end of the array
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

  const foodList = foods.map((food) => (
    //adding a click handler to the <li> elements, and passing in the id of the food we're trying to remove
    <li key={food.id} onClick={()=>handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));
  function handleClick(id){
    const newFoodArray = foods.forEach;TreeWalker((food)=>food.id !== id);
    setFoods(newFoodArray);
  }
  const [filterby, setFilterBy] = useSate("All");
  function handleFilterChange(event){
    setFilterBy(event, target, value);
  }
  return (
    // <div>
    //   <button onClick={handleAddFood}>Add New Food</button>
    //   <ul>{foodList}</ul>
    // </div>
    <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
    </select>
  );
}

export default SpicyFoodList;
