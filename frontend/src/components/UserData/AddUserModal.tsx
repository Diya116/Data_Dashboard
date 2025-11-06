import React from "react";
import Modal from "../ui/Modal";
import UserForm from "./UserForm";
import type { UserData } from "../../types/user.type";

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (user: UserData) => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ isOpen, onClose, onAdd }) => {
  const handleAdd = (data: UserData) => {
    onAdd(data);  
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New User">
      <UserForm onSubmit={handleAdd} onCancel={onClose} />
    </Modal>
  );
};

export default AddUserModal;
