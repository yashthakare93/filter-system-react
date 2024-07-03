import React, { useState } from 'react';
import Grid from '../Grid/Grid';

const Products = () => {
  const [selectedCategory] = useState('All');

  return (
    <div className='flex justify-center'>
      <Grid selectedCategory={selectedCategory} />
    </div>
  );
}

export default Products;
