import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/navbar.css";
import { NavbarLink } from "./nav/NavbarLink";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  const toggle = () => setOpen(!isOpen);
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <Flex as="nav" className="nav-bar">
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
          {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </Box>
        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <Stack
            spacing={8}
            align={"center"}
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
          >
            <NavbarLink to="/">
              <img
                src="/Logo_NV.png"
                alt="Logo"
                className="h-10 w-10 rounded-full"
              />
            </NavbarLink>
            <NavbarLink to="/" isActive={isActive("/")}>
              Home
            </NavbarLink>
            <NavbarLink to="/school" isActive={isActive("/school")}>
              Opleidingen
            </NavbarLink>
            <NavbarLink to="/technologies" isActive={isActive("/technologies")}>
              Technologieën
            </NavbarLink>
            <NavbarLink to="/projects" isActive={isActive("/projects")}>
              Projecten
            </NavbarLink>
            <NavbarLink to="/contact" isActive={isActive("/contact")}>
              Contact
            </NavbarLink>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}
