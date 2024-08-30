// src/components/cardHouse.jsx
import React from 'react';
import { Link } from 'react-router-dom';
//import '../../assets/styles/index.css';

const cardHouse = ({ owner, date, imgSrc, houseType, saleType, title, location, beds, baths, area }) => {
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg h-auto overflow-hidden">
            <div className="flex items-center gap-4 mb-4">
                <h3 className="w-12 h-12 bg-gray-200 rounded-full text-lg text-black flex items-center justify-center shadow-md">
                    {owner.charAt(0).toLowerCase()}
                </h3>
                <div>
                    <p className="text-lg text-gray-800">{owner}</p>
                    <span className="text-sm text-gray-500">{date}</span>
                </div>
            </div>
            <div className="relative h-48 mb-4 overflow-hidden rounded-md">
                <span className="absolute top-4 left-4 bg-black bg-opacity-30 text-white px-2 py-1 text-sm z-10">
                    <i className="far fa-image mr-1"></i>4
                </span>
                <span className="absolute bottom-4 left-4 bg-white text-black px-2 py-1 text-sm rounded-md z-10">
                    {houseType} {saleType}
                </span>
                <form action="" method="post" className="absolute top-4 right-4 z-10">
                    <button type="submit" name="save" className="bg-black bg-opacity-30 text-white p-1 rounded-full">
                        <i className="far fa-heart"></i>
                    </button>
                </form>
                <img src={imgSrc} alt={title} className="w-full h-full object-cover transition-transform duration-200 hover:scale-110" />
            </div>
            <h3 className="text-lg text-gray-800 truncate mb-2">{title}</h3>
            <p className="text-gray-500 text-sm flex items-center mb-4">
                <i className="fas fa-map-marker-alt mr-2 text-black"></i>{location}
            </p>
            <div className="flex bg-gray-100 p-2 justify-between items-center my-4 flex-wrap gap-2">
                <p className="text-sm flex items-center">
                    <i className="fas fa-bed mr-1 text-black"></i><span className="text-gray-500">{beds}</span>
                </p>
                <p className="text-sm flex items-center">
                    <i className="fas fa-bath mr-1 text-black"></i><span className="text-gray-500">{baths}</span>
                </p>
                <p className="text-sm flex items-center">
                    <i className="fas fa-maximize mr-1 text-black"></i><span className="text-gray-500">{area} sqft</span>
                </p>
            </div>
            <a href="/view_property" className="block text-center bg-blue-500 text-white py-2 rounded-lg mt-4 no-underline">View Property</a>
        </div>
    );
};

export default cardHouse;
