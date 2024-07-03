import React, { useContext } from 'react';
import data from '../db/data'; // Assuming this is your data source
import Card from '../Card/Card';
import { FilterContext } from '../Context/FilterContext';

const Grid = () => {
    const { category ,color} = useContext(FilterContext);

    // Convert category to lowercase for case-insensitive comparison
    const lowerCaseCategory = category.toLowerCase();
    const lowerCaseColor = color.toLowerCase();

    const filteredData = data.filter(product => {
        const matchesCategory = lowerCaseCategory === 'all' || product.category.toLowerCase() === lowerCaseCategory;
        const matchesColor = lowerCaseColor === 'all' || product.color.toLowerCase() === lowerCaseColor;
        return matchesCategory && matchesColor;
    });

    return (
        <div className="flex justify-center bg-white py-4">
            <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {filteredData.map((product) => (
                        <Card
                            key={product.id}
                            img={product.img}
                            title={product.title}
                            star={product.star}
                            reviews={product.reviews}
                            prevPrice={product.prevPrice}
                            newPrice={product.newPrice}
                            company={product.company}
                            color={product.color}
                            category={product.category}
                            rating={product.rating}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Grid;
