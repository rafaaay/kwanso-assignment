import React from 'react';

function DestinationCard(props) {

  const destination = props.destination;

  return (
    <div className='destinationCard'>
        <img src='./sample_img.jpg' alt='story image' />
        <h3>{destination}</h3>
    </div>
  );
}

export default DestinationCard;