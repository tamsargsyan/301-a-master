import axios from "axios";

const BASE_URL = "https://301.machtech.site/api";

export const apiService = {
  getData: async (data: string) => {
    const response = await axios.get(`${BASE_URL}/${data}`);
    return response.data;
  },
  // other API methods...
};
