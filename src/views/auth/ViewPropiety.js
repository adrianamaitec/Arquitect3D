import React, { useState, useEffect, useRef } from 'react';
import * as mapboxgl from 'mapbox-gl';
import house1 from "../../assets/img/house-img-1.webp";
import house2 from "../../assets/img/5-1.jpg";
import house3 from "../../assets/img/1-1.jpg";
import house4 from "../../assets/img/3-1.jpeg";
import house5 from "../../assets/img/4-1.jpg";

const View_property = () => {
    document.title = "View Property";
    const mapContainerRef = useRef(null);

    useEffect(() => {
        if (mapContainerRef.current) {
            mapboxgl.accessToken = 'pk.eyJ1Ijoic2h1YmhhbS0yMTA2IiwiYSI6ImNsanBkcWpzaDAyYzIzcG8wem80dTlwNGoifQ.Wq4Ac9g2DsvDZRsV9EjG1Q';

            const map = new mapboxgl.Map({
                container: mapContainerRef.current, // container ID
                style: 'mapbox://styles/shubham-2106/clk28bv4k004s01pg6odn61bs', // style URL
                center: [75.808, 26.880], // starting position [lng, lat]
                zoom: 10.50, // starting zoom
            });

            map.on('load', () => {
                map.addSource('places', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [] // Asegúrate de añadir características aquí
                    }
                });

                map.addLayer({
                    'id': 'places',
                    'type': 'symbol',
                    'source': 'places',
                    'layout': {
                        'icon-image': ['get', 'icon'],
                        'icon-allow-overlap': true
                    }
                });

                map.on('click', 'places', (e) => {
                    const coordinates = e.features[0].geometry.coordinates.slice();
                    const description = e.features[0].properties.description;

                    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                    }

                    new mapboxgl.Popup()
                        .setLngLat(coordinates)
                        .setHTML(description)
                        .addTo(map);
                });

                map.on('mouseenter', 'places', () => {
                    map.getCanvas().style.cursor = 'pointer';
                });

                map.on('mouseleave', 'places', () => {
                    map.getCanvas().style.cursor = '';
                });
            });

            map.addControl(new mapboxgl.NavigationControl());

            // Limpiar el mapa al desmontar el componente
            return () => map.remove();
        }
    }, []);

    return (
        <>

            <section className="view-property p-8 bg-gray-100">
                <div className="details bg-white shadow-lg p-8 rounded-lg">
                    <div className="thumb">
                        <div className="big-image mb-4">
                            <img src={house1} alt="" className="w-full h-64 object-cover rounded-md" />
                        </div>
                        <div className="small-images grid grid-cols-4 gap-2">
                            <img src={house2} alt="" className="w-full h-24 object-cover rounded-md" />
                            <img src={house3} alt="" className="w-full h-24 object-cover rounded-md" />
                            <img src={house4} alt="" className="w-full h-24 object-cover rounded-md" />
                            <img src={house5} alt="" className="w-full h-24 object-cover rounded-md" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mt-6">Modern Flats and Apartments</h3>
                    <p className="text-gray-500 flex items-center my-2">
                        <i className="fas fa-map-marker-alt mr-2 text-black"></i>
                        <span>Jaipur, India - 302001</span>
                    </p>
                    <div className="info grid grid-cols-2 gap-4 my-4">
                        <p className="text-gray-700"><i className="fas fa-tag mr-2 text-black"></i>15 lac</p>
                        <p className="text-gray-700"><i className="fas fa-user mr-2 text-black"></i>Shubham (owner)</p>
                        <p className="text-gray-700"><i className="fas fa-phone mr-2 text-black"></i><a href="tel:1234567890">1234567890</a></p>
                        <p className="text-gray-700"><i className="fas fa-building mr-2 text-black"></i>Flat</p>
                        <p className="text-gray-700"><i className="fas fa-house mr-2 text-black"></i>Sale</p>
                        <p className="text-gray-700"><i className="fas fa-calendar mr-2 text-black"></i>10-02-2023</p>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Details</h3>
                    <div className="flex mt-4">
                        <div className="box flex-1">
                            <p className="text-gray-700 mb-2"><i>Rooms :</i><span> 3 BHK</span></p>
                            <p className="text-gray-700 mb-2"><i>Deposit amount :</i><span> 0</span></p>
                            <p className="text-gray-700 mb-2"><i>Status :</i><span> Ready to move</span></p>
                            <p className="text-gray-700 mb-2"><i>Bedroom :</i><span> 3</span></p>
                            <p className="text-gray-700 mb-2"><i>Bathroom :</i><span> 3</span></p>
                            <p className="text-gray-700 mb-2"><i>Balcony :</i><span> 1</span></p>
                        </div>
                        <div className="box flex-1">
                            <p className="text-gray-700 mb-2"><i>Carpet area :</i><span> 750 sqft</span></p>
                            <p className="text-gray-700 mb-2"><i>Age :</i><span> 3 years</span></p>
                            <p className="text-gray-700 mb-2"><i>Room floor :</i><span> 3</span></p>
                            <p className="text-gray-700 mb-2"><i>Total floors :</i><span> 22</span></p>
                            <p className="text-gray-700 mb-2"><i>Furnished :</i><span> Semi-furnished</span></p>
                            <p className="text-gray-700 mb-2"><i>Loan :</i><span> Available</span></p>
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mt-6">Amenities</h3>
                    <div className="flex mt-4">
                        <div className="box flex-1">
                            <p className="text-gray-700 mb-2"><i className="fas fa-check mr-2 text-green-500"></i>Lifts</p>
                            <p className="text-gray-700 mb-2"><i className="fas fa-check mr-2 text-green-500"></i>Security guards</p>
                            <p className="text-gray-700 mb-2"><i className="fas fa-times mr-2 text-red-500"></i>Play ground</p>
                            <p className="text-gray-700 mb-2"><i className="fas fa-check mr-2 text-green-500"></i>Gardens</p>
                            <p className="text-gray-700 mb-2"><i className="fas fa-check mr-2 text-green-500"></i>Water supply</p>
                            <p className="text-gray-700 mb-2"><i className="fas fa-check mr-2 text-green-500"></i>Power backup</p>
                        </div>
                        <div className="box flex-1">
                            <p className="text-gray-700 mb-2"><i className="fas fa-check mr-2 text-green-500"></i>Parking area</p>
                            <p className="text-gray-700 mb-2"><i className="fas fa-times mr-2 text-red-500"></i>Swimming pool</p>
                            <p className="text-gray-700 mb-2"><i className="fas fa-check mr-2 text-green-500"></i>Terrace</p>
                            <p className="text-gray-700 mb-2"><i className="fas fa-times mr-2 text-red-500"></i>Gym</p>
                            <p className="text-gray-700 mb-2"><i className="fas fa-times mr-2 text-red-500"></i>Prayer room</p>
                            <p className="text-gray-700 mb-2"><i className="fas fa-times mr-2 text-red-500"></i>Library</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="map w-full h-96 mt-8">
                <div ref={mapContainerRef} className="w-full h-full"></div>
            </section>
        </>
    );
};

export default View_property;
