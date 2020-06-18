import axios from 'axios';
import * as environments from '../utils/environments'

export const API = axios.create({
    baseURL: environments.API_V1_HOST,
    timeout: 3000
});