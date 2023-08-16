import axios from "axios";
import { base_url } from "../data/apiLinks";
import { logout } from "../auth_cotroller/security";

// export const privateAxiosRequest = (url, method, data) => {
//     const token = JSON.parse(localStorage.getItem('dabbawala_auth_token'))?.token;
//     url = `${base_url}${url}`;
//     const headers = {
//       Authorization: `Bearer ${token}`
//     }
//     method = method.toLowerCase();
//     if (method === 'get') {
//       return axios.get(`${url}`, {
//         //authorization header
//         headers: {
//           ...headers
//         }
//       });
//     }
//     else if (method === 'post') {
//       return axios.post(`${url}`, data, {
//         //authorization header
//         headers: {
//           ...headers
//         }
//       });
//     }
//   }


//   export const axiosRequest = (url, method, data) => {
//     method = method.toLowerCase();

//     if (method === 'get') {
//       return axios.get(`${url}`);
//     }
//     else if (method === 'post') {
//       return axios.post(`${url}`, data);
//     }
//     // Add more conditions for other request types if needed
//   };


export const privateAxiosRequest = async (url, method, data) => {
  const token = JSON.parse(localStorage.getItem('dabbawala_auth_token'))?.token;
  url = `${base_url}${url}`;
  let tok="xyx";
  const headers = {
    Authorization: `Bearer ${token}`
  };
  method = method.toLowerCase();

  try {
    if (method === 'get') {
      const response = await axios.get(url, {
        // authorization header
        headers: {
          ...headers
        }
      });
      return response.data; // Return response data directly
    } else if (method === 'post') {
      const response = await axios.post(url, data, {
        // authorization header
        headers: {
          ...headers
        }
      });
      return response.data; // Return response data directly
    }
    // Add more conditions for other request types if needed

  } catch (error) {
    // Handle any errors that occur during the request
    console.log("printing error response status:"+error.response?.status);
    console.log(error.response)
    if(error.response?.status === 401){
      logout();
    }
    console.error('Error during privateAxiosRequest:', error);
    // return error.response.status;
    // throw error; // Rethrow the error to be handled at the caller's end
  }
};

export const axiosRequest = async (url, method, data) => {
  method = method.toLowerCase();
  url = `${base_url}${url}`;
  try {
    if (method === 'get') {
      const response = await axios.get(url);
      return response.data; // Return response data directly
    } else if (method === 'post') {
      const response = await axios.post(url, data);
      return response.data; // Return response data directly
    }
    // Add more conditions for other request types if needed

  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Error during axiosRequest:', error);
    // throw error; // Rethrow the error to be handled at the caller's end
  }
};
