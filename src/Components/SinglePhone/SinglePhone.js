import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './SinglePhone.css';
const SinglePhone = ({phone, handleAddToCart}) => {
    return (
        <div className="col-md-4 col-sm-12">
            <Card style={{ "width": '18rem'  }}>
                 <Card.Img variant="top" src={phone.image} />
        <Card.Body>
        <Card.Title> {phone.phone_name} </Card.Title>
        <Card.Text>
            Price: ${phone.price}
     
        </Card.Text>
    <Button  variant="primary" onClick={ () => handleAddToCart(phone)}>ADD TO CART  <AiOutlineShoppingCart className='icon' > </AiOutlineShoppingCart>  </Button>
  </Card.Body>
</Card> 
        </div>
    );
};

export default SinglePhone;