import { Outlet } from "react-router";
import Navbar from "./Navbar";
import "../App.css";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
