import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import CartItemCard from './CartItemCard';
import { addProductToCart, getCartProducts } from '../data/data';
import CheckoutInformation from './CheckoutInformation';

const Cart = ({ userId }) => {
    const [cart, setCart] = useState({});
    const [selectedSubscriptionPackage, setSelectedSubscriptionPackage] = useState(null);


    useEffect(() => {
        const fetchCart = async () => {
            const data = await getCartProducts(userId);
            setCart(data);
        }
        fetchCart();
    }, [cart]);

    const removeSelectedPackage = ()=>{
        setSelectedSubscriptionPackage(null)
    }

    const increment = (id) => {

        let input = document.getElementById(id);
        let i = input.value;
        input.value = parseInt(i) + 1;

    }
    const subscription = {

        user: {
          userId: 0,
        },
        
        deliveryAddress: null,
        
        subscriptionPackage: {
          subscriptionPackageId: 0,
        },
      };

    const removeItem = async (packageId) => {
        //i will call this function when user clicks on remove button
        //i will remove the item subscriptionPackage of the given id from the list of subscription package from the cart and update the cart
        // Filter out the subscription package with the given packageId
        const updatedSubscriptionPackages = cart.subscriptionPackages.filter(
            (subscriptionPackage) => subscriptionPackage.subscriptionPackageId !== packageId
        );
        await addProductToCart({ ...cart, subscriptionPackages: updatedSubscriptionPackages });
        // Update the cart state with the new subscription packages list
        setCart({ ...cart, subscriptionPackages: updatedSubscriptionPackages });

    }

    const proceedToCheckout = (subPackage) => {
        // const checkoutContainer = document.querySelector('.checkout-area');
        // // checkoutContainer.scrollIntoView({ behavior: 'smooth' });
        // // ReactDOM.render(menu(), menuContainer);
        // createRoot(checkoutContainer).render(
        //     <CheckoutInformation subscriptionPackage={subPackage} />
        // );
        setSelectedSubscriptionPackage(subPackage);
    }

    const cartItem = {
        productImage: "https://bslthemes.com/html/quickeat/assets/img/dish-2.png",
        name: "Special Food Package",
        price: "$150",
        duration: "30 Days",
        numberOfMealsPerDay: 3,
    }

    const decrement = (id) => {

        let input = document.getElementById(id);
        let i = input.value;
        if (parseInt(i) > 1) {
            input.value = parseInt(i) - 1;
        }

    }

    return (
        <div>
            {/* {
            cart? JSON.stringify(cart): ""
           } */}
            <div className="container text-start bg-white">
                <p className='px-4 my-cart' style={{ fontSize: "40px", fontFamily: "sans-serif", fontWeight: "500" }}>My Cart</p>
                <div className="row">
                    <div className="col-xl-6 col-md-6 pt-3 border">

                        {
                            cart?.subscriptionPackages ? cart.subscriptionPackages.map((item, index) => {
                                const item2 = { id: item.subscriptionPackageId, restaurant:item.restaurantName, productImage: cartItem.productImage, name: item.name, price: item.sellingPrice, duration: item.duration, numberOfMealsPerDay: item.numberOfMealsPerDay }
                                return <CartItemCard key={index} cartItem={item2} removeItem={removeItem} checkout={proceedToCheckout}/>
                            }
                            ) : <div>Oops! Something went wrong</div>
                        }

                    </div>
                    <div className="col-xl-6 col-md-6 border">
                        <div className="checkout-area">
                            {selectedSubscriptionPackage && <CheckoutInformation subscriptionPackage={selectedSubscriptionPackage} sleectedPackage={removeSelectedPackage} updateCart={removeItem}/>}
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className='py-5' style={{ borderRadius: "20px", minHeight: "100vh" }}>
                <div className="container text-start bg-white ">
                    <p className='px-4' style={{ fontSize: "40px", fontFamily: "sans-serif", fontWeight: "500" }}>All Items</p>
                    <div className="items">
                        <div className='row'>
                            <div class="col-xl-6 col-md-6 mb-4">
                                <div class="card shadow py-0">
                                    <div class="card-body py-1">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div>
                                                    <img className='img-fluid' src="https://bslthemes.com/html/quickeat/assets/img/dish-2.png" alt="" />
                                                </div>

                                            </div>
                                            <div class="col">
                                                <h4>item name</h4>

                                            </div>
                                            <div class="col mr-2">
                                                <h3>$50</h3>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div><p style={{ fontSize: "35px", fontWeight: "bolder" }}>Rs.50</p></div>
                                                <div className='d-flex'>
                                                    <button className='me-2' onClick={() => decrement('myNumberInput')} style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent", width: '35px' }}>
                                                        <span style={{ fontSize: "25px" }}>-</span>
                                                    </button>
                                                    <div className='border me-2 rounded border-1' style={{ width: '35px', overflow: 'hidden' }}>
                                                        <input type="number" defaultValue={1} id={'myNumberInput'} style={{ width: "55px", marginLeft: '-5px', height: '100%', outlineColor: 'salmon', textAlign: 'center', outline: 'none', border: 'none' }} />
                                                    </div>

                                                    <button className='me-2' id='btnc' onClick={() => increment('myNumberInput')} style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent", width: '35px' }}>
                                                        <span style={{ fontSize: "25px" }}>+</span>
                                                    </button>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <CartItemCard cartItem={cartItem} />
                                </div>
                            </div>
                            <div className='col-xl-6 border col-md-6 mb-4 '>

                                <div>Total Price</div>
                                <div>Rs. 195</div>


                            </div>

                        </div>
                    </div>
                </div>

            </div> */}
        </div>
    );
}

export default Cart;