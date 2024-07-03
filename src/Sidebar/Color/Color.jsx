import React, { useContext } from 'react';
import { FilterContext } from '../../Context/FilterContext';

const Color = () => {
  const { color, setColor } = useContext(FilterContext);

  const colors = [
    { label: 'All', value: 'all', color: 'custom', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4_Wpb_HkhQOdKRAYClHC6x7NHYjyEzIeW3jtEvALDfQocIyqMqbnMJ2S_1Xx_wFnWmxg&usqp=CAU' },
    { label: 'Gray', value: 'gray', color: '#808080' },
    { label: 'White', value: 'white', color: '#FFFFFF' },
    { label: 'Black', value: 'black', color: '#000000' },
    { label: 'Red', value: 'red', color: '#FF0000' },
    { label: 'Blue', value: 'blue', color: '#0000FF' },
    { label: 'Green', value: 'green', color: '#008000' },
    { label: 'Yellow', value: 'yellow', color: '#FFFF00' },
    { label: 'Purple', value: 'purple', color: '#800080' },
    { label: 'Orange', value: 'orange', color: '#FFA500' }
  ];

  const handleColorChange = (value) => {
    setColor(value);
  };

  return (
    <div>
      <h2 className="text-lg font-mono text-black mb-1 mt-4">COLORS</h2>
      <div className="flex flex-wrap gap-1">
        {colors.map((colorItem) => (
          <label key={colorItem.value} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="color"
              value={colorItem.value}
              checked={color === colorItem.value}
              onChange={() => handleColorChange(colorItem.value)}
              className="w-6 h-6 rounded-full border-2 focus:ring-indigo-500 cursor-pointer appearance-none"
              style={
                colorItem.color === 'custom'
                  ? { backgroundImage: `url(${colorItem.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }
                  : { backgroundColor: colorItem.color }
              }
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default Color;
