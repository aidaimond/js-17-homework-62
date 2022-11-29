import React from 'react';
import {BasketItems} from "../../types";

interface Props {
  item: BasketItems;
}

const BasketCard: React.FC<Props> = ({item}) => {
  return (
    <>
      <div className="card mb-2 p-2">
        <div className="row align-items-center">
          <div className="col">Dish name: {item.jewelry.name}</div>
          <div className="col-2">x {item.amount}</div>
          <div className="col-3 text-right">Price: {item.jewelry.price} KGS</div>
        </div>
      </div>
    </>
  );
};

export default BasketCard;