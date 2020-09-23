import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    const arrayIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i}  type={igKey} />;
            });
        }).reduce((arr, ele) => {
            return arr.concat(ele);
        }, []);
    
    const message = <p>Please start adding ingredients!</p>;

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {arrayIngredients.length === 0 ? message : arrayIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default Burger;