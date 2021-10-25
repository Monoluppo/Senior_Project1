import axios from 'axios';

const url = "http://localhost:5000/sites";

export const fetchSites = () => axios.get(url);
