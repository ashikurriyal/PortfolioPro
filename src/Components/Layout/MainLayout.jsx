import { Outlet } from "react-router-dom";
import Navbar from "../SharedComponents/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-362px)]">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;