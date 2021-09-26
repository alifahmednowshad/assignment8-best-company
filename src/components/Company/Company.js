import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Info from '../Info/Info';
import './Company.css';

const Company = () => {
    const [companys, setCompanys] = useState([])

    const [cart, setCart] = useState([])

    useEffect( () => {
        fetch('./companyData.JSON')
        .then(res => res.json())
        .then(data => setCompanys(data))
    }, [])

    const buyBtn = (company) => {
        const newCart = [...cart, company];
        setCart(newCart);
    }

    return (
        <div className='container p-0'>
            <div class="d-flex row my-5">
                <div className="col-lg-9">
                <div class="row gy-4">
                {
                    companys.map(company => <Info company={company} buyBtn={buyBtn}></Info>)
                }
                 </div>
                </div>
                <div className="col-lg-3">
                   <div class="card cost-card">
                        <div class="card-body">
                            <Cart cart={cart}></Cart>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Company;