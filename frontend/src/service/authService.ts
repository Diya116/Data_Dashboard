import { api } from "../utils/axiosInstance";

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  message: string;
  user?: any;
}

export const loginUserapi = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  console.log("Calling loginUserapi with credentials:", credentials);
  const response = await api.post<AuthResponse>("/auth/login", credentials);
  console.log({ response });
  
  // Extract token from Authorization header if present
  const authHeader = response.headers?.authorization;
  const tokenFromHeader = authHeader?.replace('Bearer ', '');
  
  return {
    ...response.data,
    token: tokenFromHeader || response.data.token
  };
};

export const logoutUserapi = async (): Promise<void> => {
  await api.post("/auth/logout");
};