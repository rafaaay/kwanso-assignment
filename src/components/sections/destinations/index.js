import React from 'react';
import SectionTitle from '../../atoms/sectionTitle';
import DestinationCard from '../../atoms/destinationCard';
import DestinationsRecord from "../../../destinations.json";

function Destinations() {
  return (
    <section className='destinations'>
        <div className='container'>
            <SectionTitle 
              title="Top Destinations"
              description="Tick one more destination off of your bucket list with one of our most popular vacations in 2022" 
            />

            <div className='slider'>
              {
                DestinationsRecord.map( record => {
                  return(
                    <DestinationCard destination = {record.destination} />
                  )
                })
              }
            </div>
        </div>
    </section>
  );
}

export default Destinations;