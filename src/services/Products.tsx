import { instance } from "../utils/axiosInstance";
export const getProducts = async ()=> {
    const response = await instance.get("");
    const aldata = await response.data;
    return aldata;
  };