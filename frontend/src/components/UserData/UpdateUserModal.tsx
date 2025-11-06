import React from "react";
import Modal from "../ui/Modal";
import UserForm from "./UserForm";
import type { UserData } from "../../types/user.type";

interface UpdateUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (userId: string, userData: Partial<UserData>) => void;
  user: UserData | null;
}

const UpdateUserModal: React.FC<UpdateUserModalProps> = ({ isOpen, onClose, onUpdate, user }) => {
  const handleUpdate = (data: UserData) => {
    console.log("Updating user with data:", data);
    if (user?.id) {
        console.log("Calling onUpdate with:", user.id, data);
      onUpdate(user.id, data);
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Update User">
      <UserForm onSubmit={handleUpdate} onCancel={onClose} initialData={user} />
    </Modal>
  );
};

export default UpdateUserModal;