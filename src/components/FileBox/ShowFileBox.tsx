import { truncate } from "@/utils/truncate";
import { FileSpreadsheet } from "lucide-react";
import { Link } from "react-router-dom";
import type { ShowFileBoxProps } from "./types";

export const ShowFileBox: React.FC<ShowFileBoxProps> = ({ url, label, size }) => {
  return (
    <div className="flex items-center gap-4 px-4 py-3 border border-[#DCE4E8] rounded">
      <FileSpreadsheet size={24} color="#5C9FB9" />
      <div className="flex-1 grid">
        <Link
          target="_blank"
          to={url}
          className="text-sm font-interRegular text-secondaryDark"
        >
          {truncate(label, 20)}
        </Link>
        <span className="text-xs text-[#9C9DA7]">
          {Number(size).toFixed(2)} mb
        </span>
      </div>
    </div>
  );
};