import type { IContainer } from "../../types/container";

const Container: React.FC<IContainer> = ({children}) => {

  return (
    <div className={`w-full`}>
        <div className="mt-2 rounded-xl">{children}</div>
    </div>
  );
};

export default Container;
