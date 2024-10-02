import React from 'react';
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'md' | 'lg';
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, size = 'md', asChild }) => {
  const Comp = asChild ? Slot : 'button';
  const sizeClass = size === 'lg' ? 'py-3 px-6 text-lg' : 'py-2 px-4';
  return (
    <Comp
      onClick={onClick}
      className={`bg-blue-600 text-white rounded ${sizeClass} hover:bg-blue-700`}
    >
      {children}
    </Comp>
  );
};