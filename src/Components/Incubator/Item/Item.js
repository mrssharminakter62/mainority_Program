import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import imag from '../../../images/fund.png';
import './Item.css';

const Item = (props) => {

    const {id, name, image, Description1} = props.item;

    const history = useHistory();

    const handleClick = (id) =>{
            history.push(`/mangoswap/${id}`);
    }

    return (
             <div className="col-md-6">
                <div className="box__design ">
                    <div class="px-4">
                        <div className="row gx-5 align-items-center">
                            <div><img src={image} alt="" style={{maxWidth:'80px'}}/></div>
                            <div>{name}</div> 
                        </div>
                      </div>
                           <p>{Description1}</p>
                           <img src={imag} style={{maxWidth:'300px', marginTop:'10px'}} alt="" />
                            <div className="mt-2">
                            <div class="px-4">
                                <div className="row gx-5 align-items-center">
                                  <div className="col">
                                  <div className="p-3"> <button className="btn__design"><Link to="/startup">Fund Startup</Link></button></div>
                                  </div>
                                  <div className="col">
                                  <div clasNames="btn btn-light p-3">
                              <button onClick={()=>handleClick(id)}  className="learn__btn" >Learn More</button>
                           </div>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
             </div>          
        
    );
};

export default Item;
