import React from 'react';
import ReactDOM from 'react-dom';
import Search from "./components/Search";



ReactDOM.render(
  <div className='sm:w-[400px] md:w-full'>
    <h1 className='font-mono font-extrabold text-[50px] text-[#c3073f]'>Github Finder</h1>
    <Search />
  </div>
  , document.getElementById('root')
);

