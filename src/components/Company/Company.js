import React, { useEffect, useState } from 'react';
import Info from '../Info/Info';
import Hire from '../Hire/Hire';
import './Company.css';

const Company = () => {

    const [infos, setInfos] = useState([]);

    const [hire, setHire] = useState([]);

//  Company data load 
    useEffect( () => {
        fetch('./companyData.JSON')
        .then(res => res.json())
        .then(data => setInfos(data))
    }, [])

// button handle     
    const revenueBtn = (info) => {
        const newHire = [...hire, info];
        setHire(newHire);
    }

    return (
        // company details area 
        <div className='container p-0'>
            <div className="d-flex row my-5">
                {/* company info area  */}
                <div className="col-md-9">
                <div className="row gy-4">
                {
                    infos.map(info => <Info key={info.link} revenueBtn={revenueBtn} info={info}></Info>)
                }
                 </div>
                </div>
                {/* company hired area  */}
                <div className="col-md-3">
                   <div className="card hire-card">
                        <div className="card-body">
                            <Hire hire={hire}></Hire>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Company;