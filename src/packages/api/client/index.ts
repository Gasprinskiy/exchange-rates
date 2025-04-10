import { ofetch } from 'ofetch';

const $api = ofetch.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: 'application/json',
  },
});

export default $api;
