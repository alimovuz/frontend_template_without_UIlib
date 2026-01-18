import { Upload } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { truncate } from "@/utils/truncate";
import type { CustomFileInputMultipleProps, FileWithId } from "./types";

export const CustomFileInputMultiple: React.FC<CustomFileInputMultipleProps> = ({
  label,
  touched,
  error,
  name,
  className,
  placeholder,
  onChange,
  value,
  accept,
  labelClassName,
  multiple
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const displayValue = Array.isArray(value)
    ? value
        .map((file: File | FileWithId) => {
          if ('id' in file && file.id) {
            return file.nomi || file.name || file.file_name;
          }
          return (file as File).name || (file as FileWithId).file_name;
        })
        .join(", ")
    : value instanceof File
    ? value.name
    : value === ""
    ? placeholder
    : value;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      onChange(multiple ? Array.from(files) : [files[0]]);
    } else {
      onChange(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="grid gap-2">
      <label className={cn("flex justify-between", labelClassName)} htmlFor={name} >
        <span>{label}</span>
      </label>
      <label
        className={cn(
          "input",
          value instanceof File || Array.isArray(value)
            ? "text-foreground"
            : "text-muted-foreground",
          className,
          touched && error ? "border-red-500!" : ""
        )}
      >
        <span className="text-sm">
          {truncate(displayValue || placeholder || "", 25)}
        </span>
        <Upload
          className={cn(
            "w-5 h-5 text-primaryBlue",
            touched && error ? "text-red-500" : ""
          )}
        />
        <input
          hidden
          ref={fileInputRef}
          type="file"
          name={name}
          id={name}
          accept={accept}
          onChange={handleChange}
          multiple={multiple}
        />
      </label>
    </div>
  );
};