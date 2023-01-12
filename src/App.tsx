import React from 'react';
import './App.css';
import { CounterComponent } from './CounterComponent';

function App() {
  const handler = () => {
    console.log('была нажата');
  };
  return (
    <div className="App">
      <p className="discount">-17%</p>
      <img className="img" src={'/img.jpg'} alt="img" />
      <button className="btn" onClick={handler}>
        Быстрый просмотр
      </button>
      <h1 className="price">
        {' '}
        20 630 руб. <span> 25 000 руб.</span>
      </h1>
      <h2 className="discountTwo"> Скидка! </h2>
      <h3> Компьютер iRU Game 510B5GE, Intel Core i5 10400F,DDR4<br />
       16ГБ, 1ТБ, <br />240ГБ(SSD), NVIDIA GeForce
        GTX 1650 - 4096 Мб </h3>
      <CounterComponent title={'В корзину'}/>

    </div>
  );
}

export default App;
