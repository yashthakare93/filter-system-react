import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import './input.css';
import Products from './Products/Products';
import { FilterProvider } from './Context/FilterContext';
import Nav from './Navigation/Nav';

function App() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    return (
        <FilterProvider>
            <Nav setCategory={setSelectedCategory} />
            <div className="grid grid-cols-1 md:grid-cols-7 min-h-screen">
                <aside className="flex flex-row md:col-span-1 bg-white text-white  ">
                    <Sidebar setCategory={setSelectedCategory} />
                </aside>
                <main className="md:col-span-6 py-4">
                    <Products selectedCategory={selectedCategory}/>
                </main>
            </div>
        </FilterProvider>
    );
}

export default App;
