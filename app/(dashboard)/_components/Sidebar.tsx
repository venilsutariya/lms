import LogoMain from "./LogoMain";
import SidebarRoutes from "./sidebar-routes";


const  Sidebar = () => {
    return ( 
        <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
            <div className="p-6">
                <LogoMain />
            </div>
            <div className=" flex flex-col w-full">
                <SidebarRoutes />
            </div>
        </div>
     );
}
 
export default Sidebar;