import React, {  useState } from 'react';


import { Menu } from '../Data/Data';
import Cart from './Cart/Cart';
import MenuDetail from './MenuDetail';


 



const Gallery = () => {
   
    const [menu,setMenu]=useState(Menu)
    const [items,setItems]=useState([])
    const [cart,setCart]=useState([])
  
  
    
    

    const handleClick=(item)=>{
      
        const newItem=[...items,
        item]
        setItems(newItem)
    }
    const handleCart=(carts)=>{
     
        const newItem=[...cart,
        carts]
            setCart(newItem)
            
    }
    return (
        <div className="container">
             <h1>COMPANY CEO</h1>

      <hr/>
      <h3>Budeget list: $1B </h3>
             <div className="row pt-5">
           
            <div className="m-auto">
                <Cart items={items} handleCart={handleCart} />
            </div>
            </div> 
            <div className="row">
                {
                    menu.map((menu)=>{
                        return <MenuDetail  handleClick={handleClick}  key={menu.id} menu={menu}/>
                    })
                }
            </div>
        </div>
    );
};

export default Gallery;