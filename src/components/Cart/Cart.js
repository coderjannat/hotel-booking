import React from 'react';

const Cart = (props) => {

    const {cart}= props || {}


    const totalReducer=(prevValue,currentValue)=>prevValue+currentValue.price

   const total=cart.reduce(  totalReducer   ,  0).toFixed(2)

   const totalPrice=total

    


    console.log(cart)
    return (
        <div>
              <h3><i class="fas fa-map-marked-alt me-2"></i>
                 Booked : {cart.length}
               </h3>
            
                <h1>Total Cost: ${totalPrice}</h1>
               <ul>
                   {
                       cart.map( hotel=> <li>{hotel.name}</li>)
                   }
               </ul>
        </div>
    );
};

export default Cart;