import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import {BreakpointProvider} from './breakpoint'

const queries = {
    xs: '(max-width: 320px)',
    sm: '(max-width: 720px)',
    md: '(max-width: 1024px)',
    or: '(orientation: portrait)', // we can check orientation also
  }

  

ReactDOM.render(
    <BreakpointProvider queries={queries}>
  <App />
</BreakpointProvider>
,document.getElementById('container'));
