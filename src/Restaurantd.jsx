import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { useState, useEffect } from 'react'
import restaurantImg from './image/restaurant-1.jpg'
import Contact from './Contact'
import resto1 from './image/resto1.jpg'
import Breakfast from './Breakfast'
import Lunch from './Lunch'
import Dinner from './Dinner'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { addProductToCart, getCartProducts, getRestaurantById, getRestaurantSubscriptionPackages } from './data/data'
import Menu from './Menu'
import { getLoggedInUser, isLoggedIn } from './auth_cotroller/security'

export default function Restaurantd() {

  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('breakfast');
  const { restaurant_id } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [subscriptionPackages, setSubscriptionPackages] = useState([]);
  const [cart, setCart] = useState({cartId:'',user:{userId:getLoggedInUser()?.userId}, subscriptionPackages:''});
  const [activeUser, setActiveUser] = useState();
  useEffect(() => {
    const fetchRestaurant = async () => {
      const data = await getRestaurantById(restaurant_id);
      setRestaurant(data);
    };
    fetchRestaurant();

    const fetchCart = async () => {
      const data = await getCartProducts(getLoggedInUser()?.userId);
      setCart({...cart, cartId:data?.cartId, subscriptionPackages:data?.subscriptionPackages});
      setActiveUser(isLoggedIn());
    };

    fetchCart();

    const fetchSubscriptionPackages = async () => {
      const data = await getRestaurantSubscriptionPackages(restaurant_id);
      setSubscriptionPackages(data);
    }
    fetchSubscriptionPackages();
  }, []);

  const addToCart = async (newPackage) => {
    if(!getLoggedInUser()){
      alert('Please login to add to cart');
      return;
    }
    const updatedCart = {...cart, subscriptionPackages:[...cart.subscriptionPackages, newPackage]};
    console.log(updatedCart);
    await addProductToCart(updatedCart);
    navigate('/checkout');
    console.log(updatedCart);
  }

  const showResult = (page) => {
    setActivePage(page);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'breakfast':
        return <Breakfast />;
      case 'lunch':
        return <Lunch />;
      case 'dinner':
        return <Dinner />;
      default:
        return null;
    }
  };

  const menu =()=>{
    return (
      <Menu />
    );
  }

  const displayMenu = () => {
    const menuContainer = document.querySelector('.menu-container');
    menuContainer.scrollIntoView({ behavior: 'smooth' });
    // ReactDOM.render(menu(), menuContainer);
    createRoot(menuContainer).render(menu());
  }


  return (

    <div>
      <Navbar/>

      <div className='container'>
        <div className="d-flex justify-content-between flex-wrap py-5">
          <div className=" text-start w-50 py-5" style={{ width: "28rem" }}>
            <div className="card  mb-4 border-0 " style={{ backgroundColor: "transparent" }}>
              <div className="container">

                <div className="text-start pt-3">
                  <img style={{ height: "100px", width: "100px", borderRadius: "7px" }} src={resto1} alt="" />
                </div>
                <div className="pt-1 text-start">
                  <p style={{ fontWeight: "bold", fontSize: "50px" }}>{restaurant ? restaurant.resturantName : ""}</p>
                </div>
                <div className="rate">
                  <p style={{ color: "grey" }}>Ratings</p>
                </div>
                <div className="d-flex pb-4 " style={{ color: "#f29f05" }}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>

                <div className='d-flex py-2'>
                  <button className='me-2 ' style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent" }}>
                    Breakfast
                  </button>
                  <button className='me-2 ' style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent" }}>Lunch</button>
                  <button className='me-2 ' style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent" }}>Dinner</button>

                </div>

                <div className="detail py-2 text-start" style={{ color: "grey" }}>
                  <p>
                    {restaurant ? restaurant.restaurantDescription : ""}
                  </p>
                </div>

              </div>
            </div>

          </div>
          <div style={{ width: "28rem" }}>
            <img className='img-fluid' src={restaurantImg} alt="" style={{ borderRadius: "8px" }} />
          </div>
        </div>

        {/* {cart ? JSON.stringify(cart) : ""} */}

        <div className="container">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <div className="d-flex justify-content-between">
                <h6 className="m-0 font-weight-bold text-orange">Subscription Packages</h6>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%">
                  <thead>
                    <tr>
                      <th>Duration(<i className="fas fa-clock fa-sm"></i> Days)</th>
                      <th>No. of Meals (per day)</th>
                      <th>Price (₹)</th>
                      <th>Menu</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      subscriptionPackages ?
                        subscriptionPackages.map((subscriptionPackage, index) => { 
                          return (
                            <tr key={index}>
                              <td>{subscriptionPackage.duration}</td>
                              <td>{subscriptionPackage.numberOfMealsPerDay}</td>
                              <td><span className="text-dark" style={{ fontSize: 'larger' }}>₹<span>{subscriptionPackage.sellingPrice}</span></span> <span style={{ textDecoration: 'line-through' }}>₹<span>{subscriptionPackage.maximumRetailPrice}</span></span></td>
                              <td><button className='btn' onClick={displayMenu} style={{ backgroundColor: "#f59f05" }}>View Menu</button></td>
                              <td><button onClick={() => addToCart(subscriptionPackage)} className='btn btn-success'>Buy Now</button></td>
                            </tr>
                          )
                        }) : ""

                      
                    }
                    {subscriptionPackages?
                      subscriptionPackages.length == 0 ? <tr><td colSpan={4}>No Subscription Package Available</td></tr> : "":""
                    }
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="menu-container">
          </div>
        </div>


        <div className="restonav py-5">
          <ul className="nav nav-underline">
            <li className="nav-item">
              <a className={`nav-link ${activePage === 'breakfast' ? 'active' : ''}`} href="#" style={{
                color: activePage === 'breakfast' ? '#f59f06' : 'black',
                fontWeight: activePage === 'breakfast' ? 'bold' : 'bold',
              }} onClick={() => showResult('breakfast')}>
                Breakfast
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activePage === 'lunch' ? 'active' : ''}`} href="#" style={{
                color: activePage === 'lunch' ? '#f59f06' : 'black',
                fontWeight: activePage === 'lunch' ? 'bold' : 'bold',
              }} onClick={() => showResult('lunch')}>
                Lunch
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activePage === 'dinner' ? 'active' : ''}`} href="#" style={{
                color: activePage === 'dinner' ? '#f59f06' : 'black',
                fontWeight: activePage === 'dinner' ? 'bold' : 'bold',
              }} onClick={() => showResult('dinner')}>
                Dinner
              </a>
            </li>
          </ul>
        </div>

        <div id="result">{renderPage()}</div>
      </div>
      <Footer />
    </div>
  );
}
