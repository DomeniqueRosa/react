import axios from "axios";

export default function api() {
  const api = axios.create({
    baseURL: 'https://the-one-api.dev/v2'
  });

  api.interceptors.request.use(async (conf) => {
    const token = 'h0Z4xq_V2c13wGgviqy8'

    conf.headers.authorization = `Bearer ${token}`;
    return conf;
  });

  return api;
}
