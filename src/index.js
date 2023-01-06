import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import ChangeNumber from './state/ChangeNumber';
// import BackgroundColor from './state/BackgroundColor';
// import AppHello from './state/AddHello';
import AddHome from './state/AddHome';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>npm start

  // <ChangeNumber />
  // <BackgroundColor/>
  // <AppHello/>
  <AddHome/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
