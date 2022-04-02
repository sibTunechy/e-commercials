import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: 'Shoes', description: 'Running Shoes.', price: '$5', image: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_05/1668898/runningshoes-210202-bd-2x1.jpg' },
    { id: 2, name: 'Macbook', description: 'Apple Laptop.', price: '$15', image: 'https://www.apple.com/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_111319_big.jpg.large_2x.jpg' },    
];

const Products = () => {
    const classes = useStyles();

    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>    
                    </Grid>
                ))}
            </Grid>          
        </main>
    )
}

export default Products;