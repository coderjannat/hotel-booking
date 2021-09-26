import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Hotel from "../Hotel/Hotel";

const Hotels = () => {
  
    const [hotels, setHotels] = useState([]);
    
    const [ cart , setCart ] = useState([]);



const handleAddHotel=(hotel)=>{

    const newCart=[ ...cart  , hotel ]
    setCart(newCart)
}


  useEffect(() => {
    fetch("/hotelsData.json")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);

  return (
    <div className = "m-3">
      <div className="row">
        <div className="col-md-9 mt-4 ">
         
         {/* hotel data load */}
          <div className="row">
            {
                hotels.map(hotel=>  
            <Hotel
                key={hotel.key}
                hotel={hotel}
                handleAddHotel={handleAddHotel}
                >

                </Hotel>)
            }
           
          
          </div>
        </div>
        <div className="col-md-3 mt-4">
          {/*cart calculation*/}
             <Cart
                cart={cart}
             >

             </Cart>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
