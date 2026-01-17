import { truncate } from "@/utils/truncate";
import { FileSpreadsheet, Trash, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import type { FileBoxProps } from "./types";

export const FileBox: React.FC<FileBoxProps> = ({ item, onRemove, isLoading }) => {
  return (
    <div className="flex items-center gap-4 px-4 py-3 border border-[#DCE4E8] rounded">
      <FileSpreadsheet size={24} color="#5C9FB9" />
      <div className="flex-1">
        <Link
          to={item.url ? `${import.meta.env.VITE_FILE_URL}/${item.url}` : ""}
          className="text-sm font-interRegular text-secondaryDark"
        >
          {truncate(item.name, 20)}
        </Link>
      </div>
      <button
        disabled={isLoading}
        onClick={onRemove}
        type="button"
        className="text-[#9B9CA7] hover:text-red-500"
      >
        {isLoading ? (
          <Loader2 size={20} className="animate-spin" />
        ) : (
          <Trash size={20} />
        )}
      </button>
    </div>
  );
};