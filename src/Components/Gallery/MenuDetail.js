import React from 'react';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faMoneyBill,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
const GalleryDetail = ({menu,handleClick}) => {///use destructuring
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="col-md-4">
            <div className="card mt-5 ">
                
                <div className="d-flex">
                    <div>
                    <img style={{height:'100px'}}  src={require(`../../images/${menu.images}`).default} alt={menu.name}/>
                    </div>
                    <div>
                        <h5 className="h">{menu.name}</h5>
                        <p>Phone_No:{menu.phone}</p>
                        <p>Email:{menu.email}</p>
                        <p>Country:{menu.country}</p>
                       
                        <h5 className="h text-danger">Salary:{menu.salary}<span onClick={()=>handleClick(menu)}  style={{float:'right',marginRight:'10px'}} className="mb-6 ms-3 btns btn btn-sm btn-success ">{element} Add Now</span></h5>
                       
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default GalleryDetail;