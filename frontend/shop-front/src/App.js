import React from 'react';
import Main from './template/Main';
import Footer from './template/Footer'
import { BrowserRouter } from "react-router-dom";
import Nav from './template/Nav';
//import Routes from './Routes';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

const App = () => {
  return(
    <BrowserRouter>
    <div>
     <Main />
     <Nav />
     
     <Footer />
     </div>
    </BrowserRouter>
  )
}

export default App;
