import { commonApi } from "./AllApis";
import { BASE_URL } from "./BaseURL";

// login & reg
export const loginApi = async (data) => {
    return await commonApi("POST", `${BASE_URL}/user/login`, data);
};

// Appoiments
export const allAppointments = async (headers) => {
    return await commonApi("GET", `${BASE_URL}/appointment/allAppointments`,null, headers);
};

// Patients
export const allPatients = async (headers) => {
    return await commonApi("GET", `${BASE_URL}/patient/allPatients`,null, headers);
};

// doc
export const allDoc = async (headers) => {
    return await commonApi("GET", `${BASE_URL}/doctor/allDoctors`,null, headers);
};
export const postDoc = async (data,headers) => {
    return await commonApi("POST", `${BASE_URL}/appointment/setAppointment`,data, headers);
};

// rooom
export const allRooms = async (headers) => {
    return await commonApi("GET", `${BASE_URL}/room/allRooms`,null, headers);
};