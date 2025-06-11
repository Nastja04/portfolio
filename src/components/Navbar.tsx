import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/navbar.css";
import { NavbarLink } from "./nav/NavbarLink";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const toggle = () => setOpen((open) => !open);
  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar position="sticky" elevation={0} className="nav-bar">
      <Toolbar>
        {/* Hamburger menu button */}
        {!isDesktop && (
          <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </Box>
        )}

        {/* Links */}
        {(isDesktop || isOpen) && (
          <Box
            sx={{
              width: { xs: "100%", md: "auto" },
            }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={4}
              alignItems="center"
              pt={{ xs: 2, md: 0 }}
            >
              <NavbarLink to="/">
                <img
                  src="/Logo_NV.png"
                  alt="Logo"
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: "50%",
                  }}
                />
              </NavbarLink>
              <NavbarLink to="/" isActive={isActive("/")}>
                Home
              </NavbarLink>
              <NavbarLink to="/career" isActive={isActive("/career")}>
                Loopbaan
              </NavbarLink>
              <NavbarLink to="/skills" isActive={isActive("/skills")}>
                Vaardigheden
              </NavbarLink>
              <NavbarLink to="/contact" isActive={isActive("/contact")}>
                Contact
              </NavbarLink>
            </Stack>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
