import React, { useEffect, useState } from 'react';
import fakeData from '../../../Data/data.json';
import Item from '../Item/Item';
import './Feature.css'

const InvestDirectly = () => {
    const [items, setItems ] = useState([]);

    useEffect(() => {
        setItems(fakeData)
    }, []);

    return (
       <div className="row">
           <div className="col-md-2">
             <div className="text-white ml-3 mt-3">
               <h1>Upcoming Startups</h1>
               <h6>These visionary companies and disruptors are on their journey to change the world.</h6>
             </div>
           </div>
           <div className="col-md-10">
            <div className="items">
                {
                    items.map(item => <Item item={item} key={item.id} ></Item>)
                }
            </div>
            </div>
     </div>
    );
};

export default InvestDirectly;