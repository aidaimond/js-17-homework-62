import React from 'react';
import {Jewelry} from "../../types";
import Card from "../Card/Card";

interface Props {
  jewelry: Jewelry[];
}

const Shop: React.FC<Props> = ({jewelry}) => {
  return (
    <div className="row m-4">
      {jewelry.map(item => (
        <Card id={item.id} name={item.name} image={item.image} price={item.price}/>
      ))}
    </div>
  );
};

export default Shop;