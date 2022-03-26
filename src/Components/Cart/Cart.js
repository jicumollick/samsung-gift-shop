import React from 'react';
import './Cart.css';
import { AiFillDelete } from 'react-icons/ai';

const Cart = ({cart}) => {
    return (
        <div>
            {
                cart.map(cart => 
                
                <div className='cart'>
                    <img src={cart.image} alt="" />
                    <p>{cart.phone_name}</p>
                   
<button>

                    <AiFillDelete className='icon2'></AiFillDelete>
</button>
                    
                </div>    
                
                )
            }
            
        </div>
    );
};

export default Cart;