import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [category, setCategory] = useState('All');
  const [color, setColor] = useState('All');

  const filterValues = {
    category,
    setCategory,
    color,
    setColor
  };

  return (
    <FilterContext.Provider value={filterValues}>
      {children}
    </FilterContext.Provider>
  );
};
