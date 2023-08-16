import { allRestaurants, cartUrl, restaurantId, restaurantSubscriptionPackages } from "./apiLinks"
import { axiosRequest, privateAxiosRequest } from "../axios_request/requests"

export const getAllRestaurants = async () => {
    return await axiosRequest(allRestaurants, 'get');
}

export const getRestaurantById = async (restaurant_id) => {
    return await axiosRequest(`${restaurantId}/${restaurant_id}`, 'get');
}

export const getRestaurantSubscriptionPackages = async (restaurant_id) => {
    return await axiosRequest(`${restaurantSubscriptionPackages}/${restaurant_id}`, 'get');
}

export const getCartProducts = async (userId) => {
    return await privateAxiosRequest(`${cartUrl}/${userId}`, 'get');
}

export const addProductToCart = async (cart) => {
    return await privateAxiosRequest(`${cartUrl}`, 'post', cart);
}