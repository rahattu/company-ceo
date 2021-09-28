import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = ({items,handleCart}) => {
   
   const total=items.reduce((sum,cart)=>sum+cart.salary,0);
   const element = <FontAwesomeIcon icon={faMoneyBill} />////use font awesome
  
    return (
        <div className="carts">
 <h1>Count People:{items.length}</h1>
            <h1 className="hi" >{element}Total Salary:{total}</h1> 
        </div>
    );
};

export default Cart;