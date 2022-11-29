import React, {useState} from 'react';
import NavBar from "./components/NavBar/NavBar";
import Home from "./containers/Home/Home";
import {Route, Routes} from "react-router-dom";
import ShopItems from "./containers/ShopItems/ShopItems";
import Contacts from "./containers/Contacts/Contacts";
import Basket from "./containers/Basket/Basket";
import {BasketItems, Jewelry} from "./types";

function App() {
  const [jewelry, setJewelry] = useState<Jewelry[]>([
    {
      id: '1', name: 'Кольцо из белого золота с бриллиантами',
      image: 'https://pmdn.sokolov.io/pics/C2/16/7C6FE646D94F09BE8E1E7C8EDEA5.jpg', price: 5990
    },
    {
      id: '2', name: 'Кольцо из золота с бриллиантом',
      image: 'https://pmdn.sokolov.io/pics/6D/F9/04106E539005CB021E9312CEFDBB.jpg', price: 8990
    },
    {
      id: '3', name: 'Кольцо из золота с бриллиантом',
      image: 'https://pmdn.sokolov.io/pics/E8/82/DB76564E12A91A0320AA1286407E.jpg', price: 92990
    },
    {
      id: '4', name: 'Обручальное кольцо из красного золота',
      image: 'https://pmdn.sokolov.io/pics/E2/7B/C579259D0FFE351D7FC683DB3624.jpg', price: 55990
    },
    {
      id: '5', name: 'Серьги из белого золота с бриллиантами',
      image: 'https://pmdn.sokolov.io/pics/3B/D0/8967A8FC8EA388ACCDA8786A3FD3.jpg', price: 300990
    },
    {
      id: '6', name: 'Серьги-пусеты из белого золота с бриллиантами',
      image: 'https://pmdn.sokolov.io/pics/06/F5/1FFC05DE2BE511D5D21E9D8BA309.jpg', price: 149990
    },
    {
      id: '7', name: 'Серьги из золота с фианитами',
      image: 'https://pmdn.sokolov.io/pics/13/8B/7547387EA60F842EED40B8BFAAD0.jpg', price: 4490
    },
    {
      id: '8', name: 'Серьги из белого золота с бриллиантами и сапфирами',
      image: 'https://pmdn.sokolov.io/pics/D7/78/F4645AF27603B9CB3BB20F3E6046.jpg', price: 108500
    },
    {
      id: '9', name: 'Браслет из золота с топазом',
      image: 'https://pmdn.sokolov.io/pics/5B/B7/1BB74F4A86410ED038447D0B114A.jpg', price: 27990
    },
    {
      id: '10', name: 'Браслет из золота',
      image: 'https://pmdn.sokolov.io/pics/95/30/5C4FCB477C91F7319881D13E23A3.jpg', price: 20490
    },
    {
      id: '11', name: 'Браслет из золота с фианитами',
      image: 'https://pmdn.sokolov.io/pics/FD/31/DA58F82A36571BEDA80D9EFD7AD6.jpg', price: 10590
    },
    {
      id: '12', name: 'Браслет из белого золота с бриллиантами',
      image: 'https://pmdn.sokolov.io/pics/6D/C1/F8258D4DA22CB0FAF3F9753FD7D6.jpg', price: 156590
    },
  ]);

  const [basket, setBasket] = useState<BasketItems[]>([]);

  const addItems = (jewelry: Jewelry) => {
    setBasket(prev => {
      const existingIndex = prev.findIndex(item => {
        return item.jewelry === jewelry;
      });

      if (existingIndex !== -1) {
        const itemsCopy = [...prev];
        const itemCopy = {...prev[existingIndex]};
        itemCopy.amount++;
        itemsCopy[existingIndex] = itemCopy;
        return itemsCopy;
      }
      return [...prev, {jewelry, amount: 1}];
    });
  };

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={(
            <Home/>
          )}>
          </Route>
          <Route path="/shop" element={(
            <ShopItems jewelry={jewelry} addToBasket={addItems}/>
          )}>
          </Route>
          <Route path="/basket" element={(
            <Basket basket={basket}/>
          )}>
          </Route>
          <Route path="/contacts" element={(
            <Contacts/>
          )}>
          </Route>
          <Route path="*" element={(
            <h1>Not found!</h1>
          )}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
