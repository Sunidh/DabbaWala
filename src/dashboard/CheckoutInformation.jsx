import React, { useState } from "react";
import { getLoggedInUser } from "../auth_cotroller/security";
import CartItemCard from "./CartItemCard";
import { privateAxiosRequest } from "../axios_request/requests";
import { addSubscription } from "../data/apiLinks";

const CheckoutInformation=({subscriptionPackage,sleectedPackage, updateCart})=>{
    const [subscription, setSubscription] = useState({
        user: {
          userId: getLoggedInUser().userId,
        },
        deliveryAddress: '',
        subscriptionPackage: {
          subscriptionPackageId: subscriptionPackage.id,
        },
      });
    
      // Function to handle the delivery address change
      const handleDeliveryAddressChange = (event) => {
        const { value } = event.target;
        setSubscription((prevSubscription) => ({
          ...prevSubscription,
          deliveryAddress: value,
        }));
        console.log(subscription);
      };

      const handleSubmit = async(event) => {
        console.log(subscriptionPackage.id);
        event.preventDefault();
        const deliveryAddress = event.target.elements.deliveryAddress.value;
        console.log(event.target.elements.deliveryAddress.value)
        const sub = {
            user: {
              userId: getLoggedInUser().userId,
            },
            deliveryAddress: deliveryAddress,
            subscriptionPackage: {
              subscriptionPackageId: subscriptionPackage.id,
            },
          }
        setSubscription((prevSubscription) => ({
            ...prevSubscription,
            deliveryAddress: deliveryAddress,
          }));
        console.log(subscription)
          await privateAxiosRequest(addSubscription, 'post', sub);
          alert("Successfully Subscribed For this food package");
          sleectedPackage();
          updateCart(subscriptionPackage.id);
      }

    return (
        <div>
            <CartItemCard cartItem={subscriptionPackage} />
            <form onSubmit={handleSubmit}>
            <input type="text" name="deliveryAddress" />
            <button>continue</button>
            </form>
        </div>
    );
}

export default CheckoutInformation;