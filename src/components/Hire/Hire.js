import React from 'react';
import './Hire.css';

const Hire = (props) => {
    const {hire} = props || {};

    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.revenue;

    const totalRevenue = hire.reduce(totalReducer, 0);
    
    return (
        <div>
            <h3 className='text-center'>Hire Company</h3>
            <h5 className="card-title">Person Added: {props.hire.length}</h5>
            <ul>
                {
                    hire.map(info => <li className='fw-bold'>{info.founder}</li>)
                }
            </ul>
            <h5 className="card-title">Total Renevue: ${totalRevenue} <small>Billion</small></h5>
        </div>
    );
};

export default Hire;

