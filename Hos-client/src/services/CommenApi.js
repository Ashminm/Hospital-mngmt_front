import { commonApi } from "./AllApis";
import { BASE_URL } from "./BaseURL";

export const loginApi = async (data) => {
    return await commonApi("POST", `${BASE_URL}/user/login`, data);
};
export const allAppointments = async (headers) => {
    return await commonApi("GET", `${BASE_URL}/appointment/allAppointments`,null, headers);
};



export const allDoc = async (headers) => {
    return await commonApi("GET", `${BASE_URL}/doctor/allDoctors`,null, headers);
};
export const postDoc = async (headers) => {
    return await commonApi("POST", `${BASE_URL}/doctor/allDoctors`,null, headers);
};