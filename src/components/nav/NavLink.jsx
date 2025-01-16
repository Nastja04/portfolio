import { Link, Text } from "@chakra-ui/react";
import "../../styles/navbar.css";

export default function NavLink({ children, to = "/", isActive }) {
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
