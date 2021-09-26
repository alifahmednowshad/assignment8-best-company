import React from 'react';
import "./Info.css";

const Info = (props) => {
    const {founder, img, sector, company, employees, revenue } = props.company;
    return (     
        <div class="col-lg-4">
            <div class="card my-card h-100">
                <img src={img} class="card-img-top circle img-fluid founder-img" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title title">Founder: <span className='title-text'>{founder}</span></h5>
                    <h5 class="card-title title">Company: <span className='title-text'>{company}</span></h5>
                    <h5 class="card-title title">Employees: <span className='title-text'>{employees}</span></h5>
                    <h5 class="card-title title">Sector: <span className='title-text'>{sector}</span></h5>
                    <h5 class="card-title title">Revenue: <span className='title-text'>${revenue} Billion</span></h5>
                </div>
            </div>
        </div>    
    );
};

export default Info; 