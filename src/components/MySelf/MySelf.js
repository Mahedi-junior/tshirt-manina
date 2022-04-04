import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house }) => {
    return (
        <div>
            <h3>MySelf</h3>
            <p>house: {house}</p>
            <Special house={house} ></Special>

        </div>
    );
};

export default MySelf;