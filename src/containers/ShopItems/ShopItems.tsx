import React from 'react';
import {Jewelry} from "../../types";
import Card from "../../components/Card/Card";

interface Props {
  jewelry: Jewelry[];
  addToBasket: (jewelry: Jewelry) => void;
}

const ShopItems: React.FC<Props> = ({jewelry, addToBasket}) => {
  return (
    <div className="row m-4">
      {jewelry.map(item => (
        <Card key={Math.random()} jewelry={item} onClick={() => addToBasket(item)}/>
      ))}
    </div>
  );
};

export default ShopItems;