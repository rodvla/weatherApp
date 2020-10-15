import React from 'react';
import './Cards.css';
import Card from './Card.jsx';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  if(props.cities.length>=1){
    return <div className='cards'>     
            {props.cities.map((elem,index) =>
              <Card 
                  key={index}
                  name={elem.name}
                  country={elem.country}
                  img={elem.img} 
                  min={elem.min-273} 
                  max={elem.max-273} 
                  id={elem.id}
                  onClose = {props.onClose} 
              />
          )}   
            </div>
  }else{
    return <div>Sin ciudades</div>
  }       
};
