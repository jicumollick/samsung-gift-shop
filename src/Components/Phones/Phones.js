

import SinglePhone from '../SinglePhone/SinglePhone';

const Phones = ({phones,setPhones,handleAddToCart}) => {

    return (
        <div className="row d-flex gap-5 align-items-center">
           

            {
               phones.map(phone => <SinglePhone key={phone.id} phone={phone} handleAddToCart={handleAddToCart}></SinglePhone>)

            }
         
            
        </div>
    );
};

export default Phones;