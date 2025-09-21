import { commonApi } from "./AllApis";
import { BASE_URL } from "./BaseURL";

export const loginApi = async (data) => {
    return await commonApi("POST", `${BASE_URL}/login`, data);
};