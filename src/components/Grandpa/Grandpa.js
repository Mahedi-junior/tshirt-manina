import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

//context api
//1. call crateContex with a default value
//2. set a variable of the contex with uppercase
//3. make sure you export the context to use it in other places
//4. wrap you child content using RinContext.Provider
//5. Provaide a value
//6. to consume the context from child compontent
//7. useContext hook and you will you need to  pass the contextName

export const RingContext = createContext('diamond');
const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const ornament = 'Diamond Ring';

    const handleBuyAhouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }

    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <h3>Grandpa</h3>
                <button onClick={handleBuyAhouse}>Buy A House</button>
                <p>house: {house}</p>
                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>

            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;