import axios from "axios";

const REST_API_BASE_URL = 'https://sneakershopback.onrender.com/api/v1/users'

export const listUsers = () => axios.get(REST_API_BASE_URL);
export const createUser = (user) => axios.post(REST_API_BASE_URL, user);