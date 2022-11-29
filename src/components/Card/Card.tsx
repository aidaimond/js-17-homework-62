import React from 'react';
import {Jewelry} from "../../types";

interface Props {
  jewelry: Jewelry;
  onClick: React.MouseEventHandler;
}

const Card: React.FC<Props> = ({jewelry, onClick}) => {
  return (
    <div className="col-3 mb-4" onClick={onClick}>
      <div className="card">
        <img src={jewelry.image} className="card-img-top" alt="items"/>
        <div className="card-body">
          <h5 className="card-title">{jewelry.name}</h5>
        </div>
        <div className="card-footer">
          <strong className="text-muted">{jewelry.price} KGS</strong>
        </div>
      </div>
    </div>
  );
};

export default Card;