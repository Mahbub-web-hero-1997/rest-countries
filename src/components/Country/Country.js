import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, population, flags, area, region } = props.country

    return (
        <div className='country'>
            <h3>Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population :{population}</p>
            <p>Area : {area}</p>
            <p>Area : {region}</p>
        </div>
    );
};

export default Country;