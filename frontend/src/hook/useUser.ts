import { useState } from "react";
import type { UserData } from "../types/user.type";
import { getAllUser, createUser, updateUser, deleteUser } from "../service/userService";
export function useUser()
{
    const [users,setUsers]=useState<UserData[]>([]);
    const [loading,setLoading]=useState<boolean>(false);
    const [error,setError]=useState<string | null>(null);
// Fetch all users
    const fetchUsers=async ()=>{
        setLoading(true);
        try {
            const data = await getAllUser();
            setUsers(data);
        }
        catch (error) {
            setError("Failed to fetch users");
        } finally {
            setLoading(false);
        }
    };
    const handleAddUser=async (userData: Partial<UserData>)=>{
        setLoading(true);
        try {
            const newUser = await createUser(userData);
            setUsers((prevUsers) => [...prevUsers, newUser]);
        } catch (error) {
            setError("Failed to add user");
        } finally {
            setLoading(false);
        }
    };
    const handleUpdateUser=async (userId: string, userData: Partial<UserData>)=>{
        setLoading(true);
        try {
            const updatedUser = await updateUser(userId, userData);
            
            setUsers((prevUsers) =>
                prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
            );
        } catch (error) {
            setError("Failed to update user");
        } finally {
            setLoading(false);
        }
    };
    const handleDeleteUser=async (userId: string)=>{
        setLoading(true);
        try {
            await deleteUser(userId);
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
        } catch (error) {
            setError("Failed to delete user");
        } finally {
            setLoading(false);
        }
    };
    return{
        users,
        loading,
        error,
        fetchUsers,
        handleAddUser,
        handleDeleteUser,
        handleUpdateUser
    }
}