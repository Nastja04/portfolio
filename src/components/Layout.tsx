import { Outlet } from "react-router";
import "../App.css";
import { Footer } from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
