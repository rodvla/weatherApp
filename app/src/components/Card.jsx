import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card (props) {
    return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={(e) => {e.preventDefault(); props.onClose(props.id)}} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.name + ' ' + props.country}</h5>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{props.min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{props.max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+props.img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
        <Link to={`/ciudad/${props.id}`} >
          <h5 className="card-title"> Details {props.name}</h5>
        </Link>
      </div>
    );
};
