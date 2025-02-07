import axios from "axios";

const REST_API_BASE_URL = 'https://sneakershopback.onrender.com/api/v1/products'

export const listProducts = () => axios.get(`${REST_API_BASE_URL}/all`);
