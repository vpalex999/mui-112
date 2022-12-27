import { Grid } from '@material-ui/core';
import React from 'react';
import CoffeCard from './CoffeCard';

const Content = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <CoffeCard
          title='Hamilton Beach Flexbrew'
          subtitle='89.99'
          avatarSrc='https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg'
          description='this is description'
          imgSrc='https://images-na.ssl-images-amazon.com/images/I/71FhMLBP9XL._AC_SL1500_.jpg'
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeCard
          title='Hamilton Beach Flexbrew'
          subtitle='89.99'
          avatarSrc='https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg'
          description='this is description'
          imgSrc='https://images-na.ssl-images-amazon.com/images/I/71FhMLBP9XL._AC_SL1500_.jpg'
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeCard
          title='Hamilton Beach Flexbrew'
          subtitle='89.99'
          avatarSrc='https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg'
          description='this is description'
          imgSrc='https://images-na.ssl-images-amazon.com/images/I/71FhMLBP9XL._AC_SL1500_.jpg'
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeCard
          title='Hamilton Beach Flexbrew'
          subtitle='89.99'
          avatarSrc='https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg'
          description='this is description'
          imgSrc='https://images-na.ssl-images-amazon.com/images/I/71FhMLBP9XL._AC_SL1500_.jpg'
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CoffeCard
          title='Hamilton Beach Flexbrew'
          subtitle='89.99'
          avatarSrc='https://images-na.ssl-images-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg'
          description='this is description'
          imgSrc='https://images-na.ssl-images-amazon.com/images/I/71FhMLBP9XL._AC_SL1500_.jpg'
        />
      </Grid>
    </Grid>
  );
};

export default Content;
