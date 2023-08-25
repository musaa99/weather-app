/* eslint-disable react/jsx-key */
// import {useState} from 'react';
// import axios from 'axios';
import React, { useState } from 'react';
import CurrencyWidget from '../component/currencyWidget';
import Footer from '../component/footer';
import Header from '../component/header';
import WeatherWidget from '../component/weatherWidget';

const Main = () => {
	const [showWeather, setShowWeather] = useState(true);
	const [showCurrency, setShowCurrency] = useState(true);
  return (
    <div className=" flex gap-[30px] m-[20px]">
    <div>
      <Header />
      {showWeather && <WeatherWidget />}
      {showCurrency && <CurrencyWidget />}
      <Footer />
    </div>
    </div>
  );
};

export default Main;
