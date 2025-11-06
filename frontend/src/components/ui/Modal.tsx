import React, { type ReactNode, useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  width?: string; // optional width customization
  showCloseButton?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  width = "max-w-md",
  showCloseButton = true,
}) => {
  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center  animate-fadeIn"
      onClick={onClose}
    >
      <div
        className={`bg-card rounded-2xl shadow-lg border border-border w-11/12 ${width} p-6 relative animate-scaleIn`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md hover:bg-accent cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        )}

        {/* Title */}
        {title && (
          <h2 className="text-lg font-semibold mb-4 text-card-foreground pr-8">
            {title}
          </h2>
        )}

        {/* Body */}
        <div className="text-foreground">{children}</div>
      </div>
    </div>
  );
};

export default Modal;