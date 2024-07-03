import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';
import { CiShoppingCart } from 'react-icons/ci';

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav className="hidden sm:flex p-4 flex-col sm:flex-row justify-between items-center">
      <div className="flex items-center">
        <div className='text-5xl text-black pl-8'><CiShoppingCart/></div>
      </div>
      <div className="flex justify-center my-4 sm:my-0">
        <input
          className=" w-96 bg-gray-100 text-black p-2 rounded-lg focus:outline-none"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search"
        />
      </div>
      <div className="hidden sm:flex  items-center space-x-6">
        <a href="/" className="text-gray-300 hover:text-gray-400">
          <FiHeart className="text-2xl" />
        </a>
        <a href="/" className="text-gray-300 hover:text-gray-400">
          <AiOutlineShoppingCart className="text-2xl" />
        </a>
        <a href="/" className="text-gray-300 hover:text-gray-400">
          <AiOutlineUserAdd className="text-2xl" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
