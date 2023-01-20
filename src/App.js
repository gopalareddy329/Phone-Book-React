import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Contacts from './pages/contactlist'
import './App.css'
import Editcontact from './pages/editcontact'
const App = () =>{
  return(
    <div className="main-container">
      <div className="contacts-container">
        <Router>
          <Routes>
              <Route path="/" element={<Contacts/>}/>
              <Route path="/contact/:id" element={<Editcontact/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App