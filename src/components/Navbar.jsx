import { Box, Flex, Stack } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import NavLink from "./nav/NavLink";

import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  const toggle = () => setOpen(!isOpen);
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <Flex
        as="nav"
        className="nav-bar"
        w="100%"
        bg="#6996ff"
        position="sticky"
        top="0"
        zIndex="1000"
        mb={4}
        p={4}
      >
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
            <NavLink to="/">
              <img
                src="/Logo_NV.png"
                alt="Logo"
                className="h-10 w-10 rounded-full"
              />
            </NavLink>
            <NavLink to="/" isActive={isActive("/")}>
              Home
            </NavLink>
            <NavLink to="/school" isActive={isActive("/school")}>
              Opleidingen
            </NavLink>
            <NavLink to="/technologies" isActive={isActive("/technologies")}>
              Technologieën
            </NavLink>
            <NavLink to="/projects" isActive={isActive("/projects")}>
              Projecten
            </NavLink>
            <NavLink to="/contact" isActive={isActive("/contact")}>
              Contact
            </NavLink>
          </Stack>
        </Box>
      </Flex>
    </>
  );
}
