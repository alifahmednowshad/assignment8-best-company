import React, { useEffect, useState } from 'react';
import Info from '../Info/Info';

const Company = () => {
    const [companys, setCompanys] = useState([])

    useEffect( () => {
        fetch('./companyData.JSON')
        .then(res => res.json())
        .then(data => setCompanys(data))
    }, [])
    return (
        <div className='container p-0'>
            <div class="d-flex row row-cols-1 row-cols-md-3 my-5">
                <div className="col-lg-9">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    companys.map(company => <Info company={company}></Info>)
                }
                 </div>
                </div>
                <div className="col-lg-3">
                   <div class="card">
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natura.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Company;