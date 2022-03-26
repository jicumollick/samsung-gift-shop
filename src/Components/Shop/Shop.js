import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

import Phones from '../Phones/Phones';



const Shop = () => {


    const [phones,setPhones] = useState([]);
    const [cart,setCarts] = useState([]);


const handleAddToCart = (addedCart) => {
    const newCart = [...cart,addedCart];
    setCarts(newCart);
}

useEffect( () => {
    fetch('phones.json')
    .then(res => res.json())
    .then(data => setPhones(data));
} , []);


    return (
        <div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-8 col-sm-12 ps-md-5 ">
                   <Phones phones={phones} setPhones={setPhones} handleAddToCart={handleAddToCart}></Phones>
                    </div>
                    <div className="col-md-4 col-sm-12">
                <Cart cart={cart} ></Cart> 

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;