

import SinglePhone from '../SinglePhone/SinglePhone';

const Phones = ({phones,setPhones,handleAddToCart}) => {

    return (
        <div className="row">
           

            {
               phones.map(phone => <SinglePhone key={phone.id} phone={phone} handleAddToCart={handleAddToCart}></SinglePhone>)

            }
         
            
        </div>
    );
};

export default Phones;