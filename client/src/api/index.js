import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3006/api'
});

const getBikes = () => api.get(`/bikes`);
const addBike = payload => api.post(`/bike`, payload);
const updateBikeById = (id, payload) => api.put(`/bike/${id}`, payload);
const deleteBikeById = id => api.delete(`/bike/${id}`);

const apis = {
  addBike,
  getBikes,
  updateBikeById,
  deleteBikeById
};

export default apis;
