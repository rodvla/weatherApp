import React from 'react';
import './Ciudad.css';
import { Link } from 'react-router-dom';

export default function Ciudad({city}) {
    return (
        <div className="ciudad">
                <div className="container">
                    <h2>{city.name + ' ' + city.country}</h2>
                    <div className="info">
                        <div>Temperatura: {Number.parseFloat(city.temp-273).toFixed(2)} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Humedad: {city.humidity} %</div>
                        <div>Presión: {city.pressure} Hpa</div>
                        <div>% de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
                    <Link to='/'>volver</Link>
            </div>
        </div>
    )
}