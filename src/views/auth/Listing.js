import React from 'react';
import house1 from "../../assets/img/house-img-1.webp";
import house2 from "../../assets/img/5-1.jpg";
import house3 from "../../assets/img/1-1.jpg";
import house4 from "../../assets/img/3-1.jpeg";
import house5 from "../../assets/img/4-1.jpg";
import house6 from '../../assets/img/2-1.jpg';
import { Link } from 'react-router-dom';
import CardHouse from "../../components/Cards/CardHouse.js"

//import '../../assets/styles/index.css';
const Listings = () => {
    document.title = 'All Listings';
    return (
        <>
            <section className="listings">
                <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">All Listings</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-start">
                    <CardHouse
                        owner="Shubham"
                        date="10-02-2023"
                        imgSrc={house1}
                        houseType="House"
                        saleType="Sale"
                        title="Modern Flats and Apartments"
                        location="Jaipur, India - 302001"
                        beds={3}
                        baths={3}
                        area={750}
                    />

                    <CardHouse
                        owner="Devesh"
                        date="10-03-2023"
                        imgSrc={house2}
                        houseType="Flat"
                        saleType="Sale"
                        title="Modern Flats and Apartments"
                        location="Uttar Pradesh, India"
                        beds={2}
                        baths={2}
                        area={800}
                    />

                    <CardHouse
                        owner="Rahul"
                        date="10-01-2023"
                        imgSrc={house3}
                        houseType="Flat"
                        saleType="Sale"
                        title="Modern Flats and Apartments"
                        location="Delhi, India"
                        beds={4}
                        baths={5}
                        area={1100}
                    />

                    <CardHouse
                        owner="Tarun"
                        date="10-02-2023"
                        imgSrc={house4}
                        houseType="Flat"
                        saleType="Sale"
                        title="Modern Flats and Apartments"
                        location="Uttarakhand, India"
                        beds={5}
                        baths={5}
                        area={1350}
                    />

                    <CardHouse
                        owner="Pankaj"
                        date="10-05-2023"
                        imgSrc={house5}
                        houseType="Flat"
                        saleType="Sale"
                        title="Modern Flats and Apartments"
                        location="Mumbai, India"
                        beds={4}
                        baths={3}
                        area={790}
                    />

                    <CardHouse
                        owner="Naman"
                        date="10-06-2023"
                        imgSrc={house6}
                        houseType="House"
                        saleType="Sale"
                        title="Modern Flats and Apartments"
                        location="Jaipur, India"
                        beds={3}
                        baths={2}
                        area={950}
                    />
                </div>
            </section>
        </>
    );
};

export default Listings;
