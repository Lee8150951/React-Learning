import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 用于记录页面性能，里面使用了web-vitals库
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>用处：检查<App />及<App />内部所有子组件不合理的地方
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
