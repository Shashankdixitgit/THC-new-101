import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API_BASE = `${BACKEND_URL}/api`;

const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
});

export const fetchEvents = async (upcoming) => {
  const params = upcoming !== undefined ? { upcoming } : {};
  const res = await api.get('/events', { params });
  return res.data;
};

export const submitPartnerInquiry = async (data) => {
  const res = await api.post('/partner-inquiry', data);
  return res.data;
};

export const submitContactMessage = async (data) => {
  const res = await api.post('/contact', data);
  return res.data;
};

export const subscribeNewsletter = async (email) => {
  const res = await api.post('/newsletter', { email });
  return res.data;
};

export default api;
