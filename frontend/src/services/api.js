import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Category APIs
export const categoryAPI = {
  getAll: () => api.get('/categories'),
};

// Product APIs
export const productAPI = {
  getAll: (params) => api.get('/products', { params }),
  getByCategory: (slug) => api.get(`/products/category/${slug}`),
};

// Contact API
export const contactAPI = {
  submit: (data) => api.post('/contact', data),
};

export default api;
