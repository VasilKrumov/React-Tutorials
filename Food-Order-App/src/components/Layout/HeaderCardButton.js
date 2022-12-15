import React from 'react'
import { CartIcon } from '../Cart/CartIcon'
import classes from './HeaderCardButton.module.css'

export const HeaderCardButton = () => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    )
}
