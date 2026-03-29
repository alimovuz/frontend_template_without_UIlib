interface BaseFileInputProps {
  label: string;
  touched?: boolean;
  error?: string;
  name: string;
  className?: string;
  placeholder?: string;
  accept?: string;
  labelClassName?: string;
  multiple?: boolean;
}

interface FileModeProps extends BaseFileInputProps {
  type?: "file"; // yoki umuman yozilmasa ham "file" deb qabul qilinadi
  onChange: (files: File[] | File | null) => void;
  value?: File[] | File | null;
}

interface Base64ModeProps extends BaseFileInputProps {
  type: "base64"; // majburiy bo'lishi shart emas, lekin aniqlik uchun yozilgan
  onChange: (files: {base64: string, name: string, size: any}[] | {base64: string, name: string, size: any} | null) => void;
  value?: string[] | string | null;
}

type CustomFileInputMultipleProps = Base64ModeProps | FileModeProps ;

interface FileWithId {
  id?: string;
  nomi?: string;
  name?: string;
  file_name?: string;
}

export type {CustomFileInputMultipleProps, FileWithId}