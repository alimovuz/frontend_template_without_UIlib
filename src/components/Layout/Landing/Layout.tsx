import { Outlet } from "react-router-dom";
import Header from "./Footer";
import Footer from "./Footer";

const Layout = () => {
  
  return (
      <div className="w-full min-h-screen flex bg-[#f8f9fa]">
          <Header/>
          <div className="p-2.5 pb-0 m-2.5 bg-white border rounded-md shadow-xs min-h-[calc(100vh-85px)] relative">
            <Outlet/>
          </div>
          <Footer/>
      </div>
  )
}

export default Layout

// bg-[#F1F4F9]