
import About from './About';
import './App.css';
import Body from './Body';
import CheckoutPage from './Checkout';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';
import Restaurantd from './Restaurantd';
import Restaurants from './Restaurants';
import Checkout from './Checkout';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
     
{/*      
      <Body/>
      {/* <About/> */}
     {/* <Contact/>  */}
     {/* <Restaurantd/>   */}
      <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route exact path='/' element={<Body/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/contact' element={<Contact/>}></Route>
      <Route exact path='/restaurants' element={<Restaurants/>}></Route>
      <Route exact path='/checkout' element={<Checkout/>}></Route>
      
    </Routes>
     </BrowserRouter> 
      
     <Footer/>  
     {/* <Checkout/> */}
    
    </div>
  );
}

export default App;
