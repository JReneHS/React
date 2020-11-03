import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import Badge from "./components/Badge";
//Lo que pinta es un Component
ReactDOM.render(
  <React.StrictMode>
    <Badge
      firstName = "Giovanny"
      lastName="Hernández"
      job="UX Design & ICPC Dev"
      twitter="@gioKim"
      footTitle="#ICPC_ESCOM"
    />
  </React.StrictMode>,
  document.getElementById('root')
);
