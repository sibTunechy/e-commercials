import React from 'react';
import { AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { CallMissedSharp, ShoppingCart } from '@material-ui/icons'

const Navbar = () => {
  return (
    <div>
        <>
            <AppBar position='fixed' className={CallMissedSharp.appBar} color='inherit'>
                <ToolBar>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        <img src={} alt='Commerce.js' height='25px' className={classes.image} />
                    </Typography>
                </ToolBar>
            </AppBar>
        </>
    </div>
  )
}

export default Navbar