import axios from "axios";

const REST_API_BASE_URL = 'https://sneakershopback.onrender.com/api/v1/users'
const REST_API_BASE_URL_LOCAL = "http://localhost:8080/api/v1/users"

export const listUsers = () => axios.get(REST_API_BASE_URL);
export const createUser = (user) => axios.post(REST_API_BASE_URL, user);

export const listUsersLocal = () => axios.get(REST_API_BASE_URL_LOCAL);
export const createUserLocal = (user) => axios.post(REST_API_BASE_URL_LOCAL, user);