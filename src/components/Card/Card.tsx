import React from 'react';
import {Jewelry} from "../../types";

interface Props extends Jewelry{
}

const Card: React.FC<Props> = (props) => {
  return (
   <div className="col-3 mb-4">
     <div className="card">
       <img src={props.image} className="card-img-top" alt="items"/>
       <div className="card-body">
         <h5 className="card-title">{props.name}</h5>
       </div>
       <div className="card-footer">
         <strong className="text-muted">{props.price} KGS</strong>
       </div>
     </div>
   </div>
  );
};

export default Card;