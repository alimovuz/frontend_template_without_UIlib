import type { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  close: () => void;
  className?: string;
  children: ReactNode;
  header?: string;
}

export type { ModalProps }