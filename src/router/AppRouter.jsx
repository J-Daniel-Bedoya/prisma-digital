import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Registro from '../components/registro/Registro';
import Home from '../components/home/home';

function App() {
  

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          {/* <Route>

          </Route>

          <Route element={}>
             
          </Route>           */}
          {/* <Route path='/' element={<Registro/>}/> */}
          <Route path='/' element={<Home/>}/>
          

                  

        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
