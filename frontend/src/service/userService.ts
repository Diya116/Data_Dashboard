import { api } from "../utils/axiosInstance";
import type { UserData } from "../types/user.type";
export const getAllUser = async (): Promise<UserData[]> => {
  const response = await api.get("/api/user");
  return response.data;
};

export const getUserById = async (userId: string): Promise<UserData> => {
  const response = await api.get<UserData>(`/api/user/${userId}`);
  console.log({response});
  return response.data;
}

export const createUser=async (userData: Partial<UserData>): Promise<UserData> => {
  const response = await api.post<UserData>("/api/user", userData);
  console.log({response});
  return response.data;
};

export const updateUser=async (userId: string, userData: Partial<UserData>): Promise<UserData> => {
  const response = await api.put<UserData>(`/api/user/${userId}`, userData);
  console.log({response});
  return response.data;
};
export const deleteUser=async (userId: string): Promise<void> => {
    await api.delete<void>(`/api/user/${userId}`);
};