import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxillary from '../../../hoc/Auxillary/Auxillary';

import classes from './SideDrawer.module.css';

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, props.open ? classes.Open : classes.Close];

    return(
        <Auxillary>
            <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Auxillary>
        
    );
};

export default SideDrawer;