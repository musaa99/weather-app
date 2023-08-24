/* eslint-disable react/jsx-key */
// import {useState} from 'react';
// import axios from 'axios';
import React from "react";

const Main = () => {
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
