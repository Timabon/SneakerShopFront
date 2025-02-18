import axios from "axios";

const REST_API_BASE_URL = 'https://sneakershopback.onrender.com/api/v1/products'
const REST_API_BASE_URL_LOCAL = "http://localhost:8080/api/v1/products"

export const listProducts = () => axios.get(`${REST_API_BASE_URL}/all`);
export const listProductsLocal = () => axios.get(`${REST_API_BASE_URL_LOCAL}/all`);
export const getProductById = (id) => axios.get(`${REST_API_BASE_URL_LOCAL}/${id}`)