import axios from 'axios';

export const API_URL = "https://opendata.concordia.ca/API/v1";
export const concordia_open = axios.create({ baseURL: API_URL });