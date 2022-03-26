import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconBotton  } from '@material-ui/core';
import { AddShoppingCart, CallMissedSharp } from '@material-ui/icons';

const Product = () => {
  return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5'>
                        {}
                    </Typography> 
                </div> 
            </CardContent>
        </Card>
  ) // more changes to be added to this e-commerce code on vsc
}

export default Product