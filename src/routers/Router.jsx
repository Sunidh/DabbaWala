import React from 'react'
import About from '../About';
import Body from '../Body';
import Contact from '../Contact';
import Restaurantd from '../Restaurantd';
import Restaurants from '../Restaurants';
import Checkout from '../dashboard/Checkout';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from '../Signup';
import Login from '../Login';
export default function Router() {
  return (
    <div>
      <BrowserRouter>
    
    <Routes>
      <Route exact path='/' element={<Body/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/contact' element={<Contact/>}></Route>
      <Route exact path='/restaurants' element={<Restaurants/>}></Route>
      <Route exact path='/checkout' element={<Checkout/>}></Route>
      <Route exact path='/restaurantd' element={<Restaurantd/>}></Route>
      <Route exact path='/restaurants/:restaurant_id' element={<Restaurantd/>}></Route>
      <Route exact path='/signup' element={<Signup/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      
    </Routes>
     </BrowserRouter> 
    </div>
  )
}
