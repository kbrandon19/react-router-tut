import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Expenses from "./Routes/expenses";
import Invoices from "./Routes/invoices";
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route path="/expenses" element={<Expenses/>}/>          
        <Route path="/invoices" element={<Invoices/>}/>
        <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
        </Route>
        
      </Routes>
    </BrowserRouter>
  
);

