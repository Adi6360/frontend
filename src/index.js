import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { disableReactDevTools} from '@fvilers/disable-react-devtools'; 

if (process.env.NODE_ENV === 'production') disableReactDevTools()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Suspense>
    <>
      <App />
    </>
  </Suspense>,
);

