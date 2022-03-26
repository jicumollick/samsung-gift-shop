import React, { useEffect } from 'react';
import './Cart.css';
import { AiFillDelete } from 'react-icons/ai';

const Cart = ({cart,setCart}) => {
  
    // clearning all selected phones 
    const clearAll = () => {
        cart = [];
        setCart(cart);
       
    }

    // choosing one randomly 

    const chooseOne = (cart) => {
      
        if(cart.length === 0){
             
            cart= [];
            return 0;

        }
         
        var item = cart[Math.floor(Math.random()*cart.length)];   
        
        cart = [item];
        setCart(cart);  
        
    } 

    
    useEffect(()=> { 
        setCart(cart);
       
    },[cart,setCart])

    // deleting a single item 
    const deleteMe = (item) => {
       
        cart = cart.filter(
        (cart) => {
            return cart.id !== item.id;
        }
        );  
        setCart(cart);
        
    }
 
    return (
        <div>
            <h3>Selected Phones</h3>
            {
                cart.map(cart => 
                
                <div className='cart' key={Math.random(0,10)}>
                    <img src={cart.image} alt="" />
                    <p>{cart.phone_name}</p>
                   
<button onClick={()=> deleteMe(cart)}>

                    <AiFillDelete className='icon2'></AiFillDelete>
</button>
                    
                </div>    
                
                )
                
            }
           
            <div className="buttons mt-5">
           
            <button type="button" className="btn btn-outline-success" onClick={ ()=>chooseOne(cart)}>Choose 1 for Gift
       
             
                    
           
            </button>
            <button type="button" className="btn btn-outline-danger ms-3" onClick={clearAll}>Clear All</button>
            </div>
            
        </div>
    );
};

export default Cart;