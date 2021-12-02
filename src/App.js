import React from 'react';
import DefaultAppbar from './components/appbar'
import Home from './components/Home';
import Pricing from './components/Pricing';
import Profile from './components/Profile';
import LogIn from './components/Login';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

import {Route, Routes, BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>  
      <DefaultAppbar/>   
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/pricing" element={<Pricing/>} />
  <Route path="/profile" element={<Profile/>} />
  <Route path="/login" element={<LogIn/>} />
  <Route path="/signUp" element={<SignUp/>} />
  <Route path="*" element={<NotFound/>} />
 </Routes>
<Footer/>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
