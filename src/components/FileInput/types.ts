interface CustomFileInputMultipleProps {
  label: string;
  touched?: boolean;
  error?: string;
  name: string;
  className?: string;
  placeholder?: string;
  onChange: (files: File[] | null) => void;
  value?: File | File[] | string;
  accept?: string;
  labelClassName?: string;
  multiple?: boolean;
}

interface FileWithId {
  id?: string;
  nomi?: string;
  name?: string;
  file_name?: string;
}

export type {CustomFileInputMultipleProps, FileWithId}