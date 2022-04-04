import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [house, setHouse] = useContext(RingContext);
    const handleHouseIncrease = () => {
        const newIncrease = house - 1;
        setHouse(newIncrease);
    }
    return (
        <div>
            <h3>Aunty</h3>
            <button onClick={() => handleHouseIncrease(house)}>Increase</button>

        </div>
    );
};

export default Aunty;