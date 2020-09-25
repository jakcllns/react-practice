import React from 'react';
import classes from './NavigationItems.module.css';
import Navigationitem from './NavigationItem/NavigationItem';

const Navigationitems = (props) => (
    <ul className={classes.NavigationItems}>
       <Navigationitem link="/" active>Burger Builder</Navigationitem>
       <Navigationitem ling="/">Checkout</Navigationitem>
    </ul>
);

export default Navigationitems;