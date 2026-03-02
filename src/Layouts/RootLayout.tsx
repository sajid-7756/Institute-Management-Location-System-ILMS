import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import CampusChat from "../Components/CampusChat/CampusChat";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar></Navbar>
      <main className="flex-1 max-w-7xl mx-auto">
        <Outlet></Outlet>
        <CampusChat />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
