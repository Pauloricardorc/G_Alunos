import React from 'react';
import ReactDOM from 'react-dom';
import { BallTriangle, Grid, Hearts, LoaderProvider, Oval, Puff, Rings, SpinningCircles, TailSpin, ThreeDots } from '@agney/react-loading'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <LoaderProvider indicator={<ThreeDots width="50" />} >
      <App />
    </LoaderProvider>
  </React.StrictMode>,
  document.getElementById('root')
);