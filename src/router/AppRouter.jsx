import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Registro from '../components/registro/Registro';

function App() {
  

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          {/* <Route>

          </Route>

          <Route element={}>
             
          </Route>           */}
          <Route path='/' element={<Registro/>}/>
          

                  

        </Routes>
      </div>
    </HashRouter>
  )
}

export default App