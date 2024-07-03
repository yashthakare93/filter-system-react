import React, { useState, useEffect } from 'react';
import Category from './Category/Category';
import Color from './Color/Color';

const Sidebar = ({ setCategory, setColor }) => {
    const [showFiltersSm, setShowFiltersSm] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

    const toggleFilters = () => {
        setShowFiltersSm(!showFiltersSm);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="px-6 py-2">
            <div className="sticky top-10 z-10">
                {/* Button to toggle filters on small screens */}
                {!isLargeScreen && (
                    <button
                        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md mb-2 w-80 sm:block lg:hidden"
                        onClick={toggleFilters}
                    >
                        Filter
                    </button>
                )}

                {/* Filters section, always visible on large screens */}
                <div className={`bg-white p-4 rounded-md ${isLargeScreen || showFiltersSm ? 'block' : 'hidden'}`}>
                    <Category setCategory={setCategory} />
                    <Color setColor={setColor} />
                </div>
            </div>
        </section>
    );
};

export default Sidebar;
