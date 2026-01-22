import { Outlet } from "react-router-dom";
import DrawerAppBar from "./appBar";
import SidPar from "./sidBar";

export default function Layout({ toggleMode, mode }){
    return(
        <>
        {/* <SidPar/> */}
      <DrawerAppBar toggleMode={toggleMode} mode={mode}  />
   <Outlet/>
    </>
    )
}