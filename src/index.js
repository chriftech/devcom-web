import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './context/AuthContext';
import {RouterProvider} from 'react-router-dom';
import {router} from './router'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <AuthContextProvider>
      <section className="flex justify-between items-center bg-blue-500 p-2">
            <div>
                <a href="/" className="text-[12pt]">YangaList</a>
            </div>
            <div className="flex justify-center items-center gap-4 text-white font-bold"> 
                <a href="" className="md:text-[12pt] text-[8pt]">About us</a>
                <a href="" className="md:text-[12pt] text-[8pt]">Support</a>
                <a href="" className="md:text-[12pt] text-[8pt]">Statistics</a>
                <a href="" className="md:text-[12pt] text-[8pt]">Pricing</a>
                {/* <a href="" className="text-[12pt]">workspace</a> */}
            </div>
            <div>
                <img className='rounded-full md:h-10 md:w-10 h-8 w-8 lg:h-12 lg:w-12 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSecWFwNqqM7uIjorZo32oIEfywcGtkB5JAsw&s" alt="profile photo" />
            </div>
        </section>
      <RouterProvider router={router} />
    </AuthContextProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
