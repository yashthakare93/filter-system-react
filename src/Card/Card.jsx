import React from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdCurrencyRupee, MdOutlineKeyboardArrowDown } from "react-icons/md";

const getStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
        <>
            {[...Array(fullStars)].map((_, i) => (
                <AiFillStar key={`full-${i}`} className="w-4 h-4 text-yellow-500" />
            ))}
            {[...Array(halfStars)].map((_, i) => (
                <AiFillStar key={`half-${i}`} className="w-4 h-4 text-yellow-500" />
            ))}
            {[...Array(emptyStars)].map((_, i) => (
                <AiOutlineStar key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
            ))}
        </>
    );
};

const Card = ({ img, title, star, reviews, prevPrice, newPrice, company, color, category, rating }) => {
    return (
        <div className="flex flex-col justify-center items-center rounded-md border-2 relative">
            <div className="relative w-full bg-white h-48 rounded-tr-md rounded-tl-md">
                <img src={img} alt={title} className="w-full h-full object-contain " />
            </div>
            <div className="mt-2 text-center bg-gray-50 w-full p-4 h-48 rounded-br-md rounded-bl-md">
                <h2 className="text-xl font-bold text-gray-900">{company}</h2>
                <h2 className="text-sm font-normal text-gray-900">{title}</h2>
                <div className="flex items-center justify-center mt-2">
                    {getStars(rating)}
                    <MdOutlineKeyboardArrowDown />
                    <span className="ml-2 text-gray-600">{reviews}</span>
                </div>
                <div className="flex justify-center items-center mt-2 mb-2">
                    <span className="mr-2 flex items-center text-2xl text-black font-bold"><MdCurrencyRupee />{newPrice}</span>
                    <span className="line-through flex items-center"><MdCurrencyRupee />{prevPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
