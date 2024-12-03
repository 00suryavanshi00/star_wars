import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: 'https://swapi.dev/api', // using a base url so if change is needed direcly replace this
  timeout: 10000,                    
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor (optional)
apiClient.interceptors.request.use(
  (config) => {
    // Add token or modify config if needed
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor (optional)
apiClient.interceptors.response.use(
  (response) => response.data, // Directly return the data
  (error) => {
    // Handle errors globally
    console.error(error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
