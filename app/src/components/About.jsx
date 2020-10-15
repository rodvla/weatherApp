import React from 'react';
import './About.css';
import Logo from '../img/logoHenry.png'
import { Link } from 'react-router-dom';

export default function About(){
    return <div className='about'>WeatherApp desarrollada en Henry
            <p>By Rodvla</p>
            <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            <Link to='/'>volver</Link>
           </div>

}

