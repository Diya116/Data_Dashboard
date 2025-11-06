import React, { useState, useEffect } from "react";
import type { UserData } from "../../types/user.type";
import Button from "../ui/Button";

interface UserFormProps {
  initialData?: UserData|null;
  onSubmit: (data: UserData) => void;
  onCancel: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ initialData, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<UserData>({
    name: "",
    email: "",
    status: "Active",
    joiningDate: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof UserData, string>>>({});

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name as keyof UserData]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof UserData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.joiningDate) {
      newErrors.joiningDate = "Joining date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
          Name
        </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter full name"
          className={`w-full bg-background text-foreground border ${
            errors.name ? "border-destructive" : "border-input"
          } rounded-md px-3 py-2 placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-colors`}
        />
        {errors.name && (
          <p className="text-destructive text-xs mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email address"
          className={`w-full bg-background text-foreground border ${
            errors.email ? "border-destructive" : "border-input"
          } rounded-md px-3 py-2 placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-colors`}
        />
        {errors.email && (
          <p className="text-destructive text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* Status Field */}
      <div>
        <label htmlFor="status" className="block text-sm font-medium text-foreground mb-1.5">
          Status
        </label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full bg-background text-foreground border border-input rounded-md px-3 py-2 focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-colors cursor-pointer"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Joining Date Field */}
      <div>
        <label htmlFor="joiningDate" className="block text-sm font-medium text-foreground mb-1.5">
          Joining Date
        </label>
        <input
          id="joiningDate"
          name="joiningDate"
          type="date"
          value={formData.joiningDate}
          onChange={handleChange}
          className={`w-full bg-background text-foreground border ${
            errors.joiningDate ? "border-destructive" : "border-input"
          } rounded-md px-3 py-2 focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-colors`}
        />
        {errors.joiningDate && (
          <p className="text-destructive text-xs mt-1">{errors.joiningDate}</p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-2 pt-3">
        <Button
          type="button"
          variant="danger"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          type="submit"

        >
          {initialData ? "Update" : "Add"}
        </Button>
      </div>
    </form>
  );
};

export default UserForm;