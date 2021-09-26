import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faDonate, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import "./Info.css";

const Info = (props) => {
    const {founder, img, sector, company, employees, revenue } = props.company;
    return (     
        <div class="col-lg-4 col-md-6 col-">
            <div class="card my-card h-100">
                <img src={img} class="card-img-top circle img-fluid founder-img" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title title">Founder: <span className='title-text'>{founder}</span></h5>
                    <h5 class="card-title title">Company: <span className='title-text'>{company}</span></h5>
                    <h5 class="card-title title">Employees: <span className='title-text'>{employees}</span></h5>
                    <h5 class="card-title title">Sector: <span className='title-text'>{sector}</span></h5>
                    <h5 class="card-title title">Revenue: <span className='title-text'>${revenue} Billion</span></h5>
                    <button onClick={ () => props.myBtn(props.company)} className='renevue-btn mt-3 fs-5'><FontAwesomeIcon icon={faCoins}/>  Buy</button>
                </div>
                <div className="d-flex py-2 m-0 fs-2 align-items-center justify-content-center">
                    <div className="me-5 my-icon"><FontAwesomeIcon icon={faDonate}/></div>
                    <div className="me-5 my-icon"><FontAwesomeIcon icon={faPhoneSquare}/></div>
                </div>
            </div>
        </div>    
    );
};

export default Info; 