import { Link, Text } from "@chakra-ui/react";
import { FC } from "react";
import "../../styles/navbar.css";

interface NavbarLinkProps {
  children: React.ReactNode;
  to?: string;
  isActive?: boolean;
}

export const NavbarLink: FC<NavbarLinkProps> = ({ children, to = "/", isActive }) => {
  return (
    <Link
      href={to}
      className={`navLink ${isActive ? "active-link" : ""}`}
      _hover={{ textDecoration: "none" }}
    >
      <Text display="block" className={isActive ? "activeText" : ""}>
        {children}
      </Text>
    </Link>
  );
}
