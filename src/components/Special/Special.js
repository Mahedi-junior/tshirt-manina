import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h3>Special one</h3>
            <p>Gift: {house}</p>
            <button onClick={() => setHouse(house + 1)}>Buy a house</button>

        </div>
    );
};

export default Special;