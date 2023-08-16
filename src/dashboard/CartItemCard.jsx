import React from "react";

const CartItemCard = ({ cartItem, removeItem, checkout }) => {
    return (
        <>
            <div className="row">
                <div className="col mb-3">
                    <div className="card shadow">
                        <div className="container">
                            <div className="row py-1">
                                <div className="col my-auto">
                                    {cartItem.restaurant}
                                    <img src={cartItem.productImage} alt="Product Image" className="img-fluid" />
                                </div>
                                <div className="col my-auto">{cartItem.name}</div>
                                <div className="col my-auto"><b>Duration:</b><br/>{cartItem.duration} Days<br/>{cartItem.numberOfMealsPerDay} meals per day</div>
                                <div className="col"><b>Price</b><br/>₹{cartItem.price}</div>
                                <div className="col my-auto">
                                <button onClick={()=>removeItem(cartItem.id)} className="btn btn-danger mb-2">Remove</button>
                                <button onClick={()=>checkout(cartItem)} className="btn btn-success">Pay Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartItemCard;