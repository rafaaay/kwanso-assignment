import React from 'react';

function SectionTitle(props) {
    const title = props.title;
    const description = props.description;

    return (
        <div className='sectionTitle'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>

    );
}

export default SectionTitle;