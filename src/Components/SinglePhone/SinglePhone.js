import React from 'react';
import { Button} from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './SinglePhone.css';
const SinglePhone = ({phone, handleAddToCart}) => {
    return (
        <div className="col-md-3 col-sm-12  card ">
          
            
                <img src={phone.image} alt="phone_image" className='image-fluid' />
                
               <h3 style={{"backgroundColor":'#fff',"marginTop":'15px'}}>{phone.phone_name}</h3> 
        
            Price: ${phone.price}
     
       
    <Button  variant="primary" onClick={ () => handleAddToCart(phone)} className="mt-3" >ADD TO CART  <AiOutlineShoppingCart className='icon ' > </AiOutlineShoppingCart>  </Button>
  </div>


    );
};

export default SinglePhone;