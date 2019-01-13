import axios from "axios";
import AXIOS_CONFIGS from "./axiosConfig";

async function getFact(endpoint) {
  const response = await axios(AXIOS_CONFIGS[endpoint]);
  return response.data;
}

export default getFact;
