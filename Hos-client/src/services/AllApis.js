import axios from "axios";

export const commonApi = async (method, url, body = null, headers = {}) => {
  try {
    const config = {
      method: method.toLowerCase(),
      url,
      headers: {
        ...headers,
        "Content-Type": body instanceof FormData ? "multipart/form-data" : "application/json",
      },
    };

    if (method.toLowerCase() !== "get" && body) {
      config.data = body;
    }

    if (method.toLowerCase() === "get" && body) {
      config.params = body; 
    }

    const response = await axios(config);
    return response;
  } catch (error) {
    console.error("API Error:", error);
    return error.response ? error.response : { error: "Unknown network error" };
  }
};
