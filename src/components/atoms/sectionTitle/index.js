import React from 'react';

function SectionTitle(props) {
    const title = props.title;

    return (
        <h2 className='sectionTitle'>{title}</h2>
    );
}

export default SectionTitle;