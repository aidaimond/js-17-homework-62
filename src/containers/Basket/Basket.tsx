import React from 'react';
import {BasketItems} from "../../types";
import BasketCard from "../../components/BasketCard/BasketCard";
import {Link} from "react-router-dom";

interface Props {
  basket: BasketItems[];
}

const Basket: React.FC<Props> = ({basket}) => {

  const total = basket.reduce((sum, jewelry) => {
    return sum + jewelry.amount * jewelry.jewelry.price;
  }, 0);

  const continues = () => {
    alert('Заказ оформлен!');
  };

  let card = (
    <div className="alert alert-secondary">
      В корзине пока пусто :(
    </div>
  )

  if (basket.length) {
    card = (
      <div className="m-5">
        {basket.map((item) => (
          <BasketCard key={item.jewelry.id} item={item}/>
        ))}
        <h4 className="text-center mt-4">Total: {total} KGS</h4>
        <div className="d-flex gap-2 justify-content-center mt-5">
          <Link to="/" className="btn btn-outline-secondary">Cancel</Link>
          <button className="btn btn-outline-secondary" onClick={continues}>Continue</button>
        </div>
      </div>
    );
  }

  return (
    <div className="m-5">
      {card}
    </div>
  );
};

export default Basket;