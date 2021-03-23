import React from 'react';
import ReactDOM from 'react-dom';
import { BallTriangle, Grid, Hearts, LoaderProvider, Oval, Puff, Rings, SpinningCircles, TailSpin, ThreeDots } from '@agney/react-loading'
import App from './App';

const Loader = ({ ...rest }) => <p {...rest}>Loading...</p>;

ReactDOM.render(
  <React.StrictMode>
    <LoaderProvider indicator={<Loader />} >
      <App />
    </LoaderProvider>
  </React.StrictMode>,
  document.getElementById('root')
);