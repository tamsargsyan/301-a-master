import axios from "axios";

const BASE_URL = "https://301.machtech.site/api";

export const apiService = {
  get: async (data: any) => {
    const response = await axios.get(`${BASE_URL}/${data}`);
    return response.data;
  },

  post: async (data: any, payload: Object) => {
    const response = await axios.post(`${BASE_URL}/${data}`, payload);
    return response.data;
  },

  // other API methods...
};

