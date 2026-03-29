import { cn } from "@/lib/utils";
import type { IContainer } from "./types";
import { useTranslation } from "react-i18next";

const Container: React.FC<IContainer> = ({children, className, title, actions}) => {
  const { t } = useTranslation()

  return (
    <div className={cn("rounded-lg bg-white p-4 md:p-5 shadow-sm ", className)}>
      <div className="flex justify-between items-center">
        <h2 className="text-lg md:text-xl font-semibold text-slate-700">{t(title)}</h2>
        {actions}
      </div>
      {children}
    </div>
  );
};

export default Container;
