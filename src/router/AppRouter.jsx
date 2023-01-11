import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/home/Home';
import Registro from '../components/registro/Registro';

const App = () => {
  

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          {/* <Route>

          </Route>

          <Route element={}>
             
          </Route>           */}
          <Route path='/home' element={<Home />}/>
          <Route path='/' element={<Registro />}/>

                  

        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
