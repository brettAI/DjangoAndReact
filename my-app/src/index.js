import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Form from './components/Form';

function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element = {<App />}></Route>
        <Route exact path = "/login" element = {<Form />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(

  <React.StrictMode>
    <Router />
  </React.StrictMode>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
