import React from 'react';

function Button(props) {
    const text = props.text;

    return (
        <a className='btn'>{text}</a>
    );
}

export default Button;