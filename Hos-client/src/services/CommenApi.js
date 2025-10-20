import { commonApi } from "./AllApis";
import { BASE_URL } from "./BaseURL";

export const loginApi = async (data) => {
    return await commonApi("POST", `${BASE_URL}/user/login`, data);
};
export const allAppointments = async (params = null) => {
    return await commonApi("GET", `${BASE_URL}/appointment/allAppointments`, params);
  };