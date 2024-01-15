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
          }} > 
          
          {
      <select name="Currency" id="Currency" 
      style={{
        backgroundColor: 'lightgreen',
        fontFamily: 'arial',
        color: 'white',
        width: 250,
        height: 60,
      }}
      onChange={event=>changeCurrency(event.target.value)}>
        <option style={{backgroundColor:'lightgreen'}} value="$">Currency $ Dollar</option>
        <option style={{backgroundColor:'lightgreen'}} value="£">£ Pound</option>
        <option style={{backgroundColor:'lightgreen'}} value="€">€ Euro</option>
        <option style={{backgroundColor:'lightgreen'}} value="₹">₹ Ruppee</option>
      </select> 
      } 
    </div>
    );
};

export default Currency;

