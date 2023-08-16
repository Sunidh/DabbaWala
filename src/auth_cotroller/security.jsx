import { checkSession, privateAxiosRequest } from "../axios_request/requests";
import { sessionUrl } from "../data/apiLinks";

export const isLoggedIn = () => {
  if (localStorage.getItem('dabbawala_auth_token')) {
    return true;
  } else {
    return false;
  }
}

export const isSessionValid = async () => {
  await privateAxiosRequest(sessionUrl, "get")
}

export const getLoggedInUser = () => {
  if (localStorage.getItem('dabbawala_auth_token')) {
    return JSON.parse(localStorage.getItem('dabbawala_auth_token')).user;
  } else {
    return null;
  }
}

export const logout = () => {
  localStorage.removeItem('dabbawala_auth_token');
}

export const doLogin = ()=>{

}