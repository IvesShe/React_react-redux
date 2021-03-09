import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store'
import {Provider} from 'react-redux'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* 此處需要用Provider包裏App，目的是讓App所有的後代組件都能接收到store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// 使用react-redux之後，不用再自己監測redux狀態的改變
// 監測redux中狀態的改變，如redux的狀態發生了改變，那麼重新渲染App組件
// store.subscribe(()=>{
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// })