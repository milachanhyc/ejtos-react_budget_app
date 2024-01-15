import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch} = useContext(AppContext);

    const changeCurrency = (currency)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: currency,
            })
    }
    

    return (
        <div style={{
            backgroundColor: 'lightgreen',
            fontFamily: 'arial',
            color: 'white',
            width: 250,
            height: 60,
            textalign: 30
          }} > Currency {
      <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select> 
      } 
    </div>
    );
};

export default Currency;

