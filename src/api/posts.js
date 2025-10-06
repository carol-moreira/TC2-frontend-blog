import axios from "axios";

// CRA usa REACT_APP_* no .env
const API = process.env.REACT_APP_API_URL || "http://localhost:3000";

export const getPosts = async () => (await axios.get(`${API}/posts`)).data;
export const getPostById = async (id) => (await axios.get(`${API}/posts/${id}`)).data;
export const searchPosts = async (term) => (await axios.get(`${API}/posts/search?term=${encodeURIComponent(term)}`)).data;
export const createPost = async (data, token) =>
  (await axios.post(`${API}/posts`, data, { headers: { Authorization: `Bearer ${token}` } })).data;
export const updatePost = async (id, data, token) =>
  (await axios.put(`${API}/posts/${id}`, data, { headers: { Authorization: `Bearer ${token}` } })).data;
export const deletePost = async (id, token) =>
  (await axios.delete(`${API}/posts/${id}`, { headers: { Authorization: `Bearer ${token}` } })).data;