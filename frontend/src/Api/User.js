import axios from 'axios';

export const PostUser = async (data) => {
  try {
    const reqOptions = {
      url: 'http://localhost:5000/api/user',
      method: 'POST',
      data: data,
    };
    const response = await axios.request(reqOptions);

    return response;
  } catch (err) {
    return err.response;
  }
};

export const LoginUser = async (data) => {
  try {
    const reqOptions = {
      url: 'http://localhost:5000/api/user/login',
      method: 'POST',
      data: data,
    };
    const response = await axios.request(reqOptions);

    return response;
  } catch (err) {
    return err.response;
  }
};
export const PlaceOrder = async (data) => {
  try {
    const reqOptions = {
      url: 'http://localhost:5000/api/order/',
      method: 'POST',
      data: data,
    };
    const response = await axios.request(reqOptions);

    return response;
  } catch (err) {
    return err.response;
  }
};
