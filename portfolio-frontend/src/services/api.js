import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

export const fetchProjects = () => api.get('projects/').then(res => res.data);
export const fetchSkills = () => api.get('skills/').then(res => res.data);
export const fetchExperience = () => api.get('experience/').then(res => res.data);
export const submitContact = (data) => api.post('contact/', data).then(res => res.data);

export default api;
