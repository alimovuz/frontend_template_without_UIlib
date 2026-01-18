import xIcon from "@/assets/close.svg";
import { useRef, useState, type ChangeEvent, type FC, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { truncate } from "@/utils/truncate";
import { getBase64 } from "@/utils/getBase64";
import { Upload } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomFileInputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    placeholder?: string;
    labelClassName?: string;
    label?: string;
    touched?: boolean;
    error?: string;
    className?: string;
    name: string;
    onFileChange: (name: string, value: string) => void;
    value?: string;
    accept?: string;
    isClear?: boolean;
}

const CustomFileInput: FC<CustomFileInputProps> = ({
    label,
    touched,
    error,
    name,
    className,
    placeholder,
    value,
    accept,
    labelClassName,
    onFileChange,
    isClear = false,
}) => {
    const [file, setFile] = useState<File | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClear = (e: MouseEvent<HTMLImageElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setFile(null);
        if (inputRef.current) {
            inputRef.current.value = "";
        }
        onFileChange(name, "");
    };

    console.log(file)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            getBase64(selectedFile).then((base64: string) => {
                onFileChange(name, base64);
            });
        }
    };

    return (
        <div className="grid gap-2">
            <label className={cn("flex justify-between", labelClassName)} htmlFor={name} >
                <span>{label}</span>
            </label>

            <label
                htmlFor={name}
                className={cn(
                    "input group",  // 'group' qo'shildi
                    value ? "text-foreground" : "text-muted-foreground",
                    className,
                    touched && error ? "border-red-500!" : ""
                )}
            >
                <div className="flex items-center flex-1">
                    {file?.name ? (
                        <span className="file-value mr-2">{truncate(file.name || placeholder || "", 25)}</span>
                    ) : value ? (
                        <Link
                            className="text-blue-400 underline mr-2"
                            target="_blank"
                            to={`${import.meta.env.VITE_BASE_URL}${value}`}
                        >
                            Yuklangan fayl
                        </Link>
                    ) : (
                        <span className="placeholder text-[#9C9DA7] mr-2">
                            {placeholder || "Fayl yuklang"}
                        </span>
                    )}
                </div>


                {(file || value) && isClear && (
                    <img
                        src={xIcon}
                        alt="clear"
                        className={cn(
                            "w-5 h-5 cursor-pointer mr-2 opacity-0 group-hover:opacity-100 transition-opacity",
                            "hover:text-red-500"
                        )}
                        onClick={handleClear}
                    />
                )}

                <Upload className={cn("w-5 h-5 text-primaryBlue", touched && error ? "text-red-500" : "")} />

                <input ref={inputRef} id={name} type="file" hidden onChange={handleChange} accept={accept} />
            </label>
        </div>

    );
};

export default CustomFileInput;