import React, { useContext } from 'react';
import { FilterContext } from '../../Context/FilterContext';

const Category = () => {
  const { category, setCategory } = useContext(FilterContext);

  const categories = [
    { label: 'Sneakers', value: 'sneakers' },
    { label: 'Running Shoe', value: 'running' },
    { label: 'Industrial Shoe', value: 'industrial' },
    { label: 'Formal Shoe', value: 'formal' },
   
  ];

  const handleChange = (value) => {
    setCategory(value);
  };

  return (
    <div>
      <h2 className="text-lg font-mono text-black mb-1 mt-2">CATEGORIES</h2>
      <ul className="space-y-1">
        {categories.map((categoryItem) => (
          <li key={categoryItem.value}>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={categoryItem.value}
                checked={category === categoryItem.value}
                onChange={() => handleChange(categoryItem.value)}
                 className="appearance-none h-4 w-4 border border-gray-500 rounded-sm checked:bg-blue-100 checked:border-transparent focus:outline-none"
              />
              <span className="text-black">{categoryItem.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
