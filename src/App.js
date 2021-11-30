import logo from './logo.svg';
import './App.css';
import DefaultAppbar from './components/appbar'
import Home from './components/Home';
import Pricing from './components/Pricing';
import Profile from './components/Profile';
import LogIn from './components/Login';
import Footer from './components/Footer';

import {Route, Routes, BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>  
      <DefaultAppbar/>   
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/pricing" element={<Pricing/>}></Route>
  <Route path="/profile" element={<Profile/>}></Route>
  <Route path="/login" element={<LogIn/>}></Route>
 </Routes>
<Footer/>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
