import  { useEffect, useState } from "react";
import AddUserModal from "../components/UserData/AddUserModal";
import {type UserData } from "../types/user.type";
import {UserTable} from "../components/UserData/UserTable";
import UpdateUserModal from "../components/UserData/UpdateUserModal";
import { useUser } from "../hook/useUser";
import Button from "../components/ui/Button";

const UserManagement = () => {
  const { users, loading, error, fetchUsers, handleAddUser, handleDeleteUser, handleUpdateUser } = useUser();
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  
  useEffect(() => {
    fetchUsers();
  }, []);
  
  const handleEdit = (user: UserData) => {
    setSelectedUser(user);
    setEditOpen(true);
  };

  const handleUpdate = async (userId: string, userData: Partial<UserData>) => {
    let response = await handleUpdateUser(userId, userData);
    console.log(response);
    setEditOpen(false);
    setSelectedUser(null);
  };

  const handleDelete = async (userId: string) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await handleDeleteUser(userId);
    }
  };

  return (
    <div className="p-6 bg-background min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-foreground">User Management</h1>
        <Button
          onClick={() => setAddOpen(true)}
        >
          + Add User
        </Button>
      </div>
      
      <UserTable  
        users={users}
        loading={loading}
        error={error}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      
      {/* Modals */}
      <AddUserModal
        isOpen={addOpen}
        onClose={() => setAddOpen(false)}
        onAdd={handleAddUser}
      />
      <UpdateUserModal
        isOpen={editOpen}
        onClose={() => {
          setEditOpen(false);
          setSelectedUser(null);
        }}
        onUpdate={handleUpdate}
        user={selectedUser}
      />
    </div>
  );
};

export default UserManagement;