import React from 'react';
import SectionTitle from '../../atoms/sectionTitle';

function Destinations() {
  return (
    <section className='destinations'>
        <div className='container'>
            <SectionTitle 
              title="Top Destinations"
              description="Tick one more destination off of your bucket list with one of our most popular vacations in 2022" 
            />
        </div>
    </section>
  );
}

export default Destinations;