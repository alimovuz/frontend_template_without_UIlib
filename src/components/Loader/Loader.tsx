import { LoaderIcon } from "lucide-react"

const Loader = () => {
    return (
      <div className="absolute flex flex-col justify-center items-center gap-3 w-full h-full">
          <LoaderIcon className="h-20 w-20 animate-spin text-muted-foreground" />
          <p className="text-muted-foreground">Ma'lumotlar yuklanmoqda...</p>
      </div>
    );
}

export default Loader;