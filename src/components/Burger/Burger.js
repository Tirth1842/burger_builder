import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
    let transformIngredients = Object.keys(props.ingredients) // arrays of string of the ingredient ['salad', 'bacon', 'cheese', 'meat']
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) => {  // before map we have [ , ] empty array of size of igKey eg: cheese:2 than array will be [ , ] of size 2.
            return <BurgerIngredient key={igKey + i} type={igKey} />; // map2 is for getting the index value to assign it to the key in return statement as we are passing the JSX as an array.
        });
        // reduce method is to reduce the output of loop operated on function as an single output.
        // here we wnt to check that the whether the user as provided the ingredient.
    })
    .reduce((arr,el) => { // (arr,el) are the argument to the function to be operated.
        return arr.concat(el); // concat will simply add the two array.
    },[]);  // [] as an initial argument to the arr or to the function.
    // Object.key will convert the keys of object to array.  convertion to array because map cannot be apply on object.
   console.log(transformIngredients);
    if(transformIngredients.length === 0)
    {
        transformIngredients = <p>please add some ingredient</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
           {transformIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div> 
    );
};

export default burger;