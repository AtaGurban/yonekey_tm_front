import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {UserStore} from './store/UserStore';  
import { BannerStore } from './store/bannerStore';
import { CategoryStore } from './store/category';

export const Context = createContext(null);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    category: new CategoryStore(),
    banner: new BannerStore(),
  }}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Context.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

