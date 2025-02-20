import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Adjust backend URL if needed

export const login = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, formData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

export const checkAuth = async () => {
  try {
    const response = await axios.get(`${API_URL}/check`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Auth check failed:", error);
    throw error;
  }
};
