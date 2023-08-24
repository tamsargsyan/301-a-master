import axios from "axios";

const BASE_URL = "https://301.machtech.site/api/home";

export const apiService = {
  getData: async () => {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  },
  // other API methods...
};
