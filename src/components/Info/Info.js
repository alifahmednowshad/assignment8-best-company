import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDonate, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import "./Info.css";

const Info = (props) => {
    const {founder, img, sector, company, employees, revenue } = props.info || {};

    return (     
        <div className="col-lg-4 col-md-6 col-12">
            <div className="card my-card h-100">
                <div className='d-flex justify-content-center'>
                    <img src={img} className="card-img-top circle img-fluid founder-img" alt="..."/>
                </div>
                <div className="card-body">
                    <h5 className="card-title title">Founder: <span className='title-text'>{founder}</span></h5>
                    <h5 className="card-title title">Company: <span className='title-text'>{company}</span></h5>
                    <h5 className="card-title title">Employees: <span className='title-text'>{employees}</span></h5>
                    <h5 className="card-title title">Sector: <span className='title-text'>{sector}</span></h5>
                    <h5 className="card-title title">Revenue: <span className='title-text'>${revenue} Billion</span></h5>
                    {/* button area  */}
                    <button onClick={() => props.revenueBtn(props.info)} className='revenue-btn mt-3 fs-5'><FontAwesomeIcon icon={faDonate}/>  Add Revenue</button>
                </div>
                {/* Icons area  */}
                <div className="d-flex pb-2 m-0 fs-2 align-items-center justify-content-center">
                    <div className="me-5 my-icon"><FontAwesomeIcon icon={faHome}/></div>
                    <div className="me-5 my-icon"><FontAwesomeIcon icon={faPhoneSquare}/></div>
                </div>
            </div>
        </div>    
    );
};

export default Info; 