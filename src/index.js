import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import ChangeNumber from './state/ChangeNumber';
// import BackgroundColor from './state/BackgroundColor';
// import AppHello from './state/AddHello';
// import AddHome from './state/AddHome';
// import Alert from './Component/Alert';
// import ExpandCollapse from './state/ExpandCollapse';
// import Calculator from './state/Calculator';
import AddLogin from './state/AddLogin';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <ExpandCollapse/>
  // <Calculator/>

  <AddLogin/>

  // <ChangeNumber />
  // <BackgroundColor/>
  // <AppHello/>
  // <AddHome/>
  // <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
