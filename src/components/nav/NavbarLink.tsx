import { Link, Typography } from "@mui/material";
import { FC } from "react";
import "../../styles/navbar.css";

interface NavbarLinkProps {
  children: React.ReactNode;
  to?: string;
  isActive?: boolean;
}

export const NavbarLink: FC<NavbarLinkProps> = ({
  children,
  to = "/",
  isActive,
}) => {
  return (
    <Link
      href={to}
      className={`navLink ${isActive ? "active-link" : ""}`}
      sx={{
        textDecoration: "none",
        "&:hover": {
          textDecoration: "none",
        },
      }}
    >
      <Typography display="block" color="black" fontWeight={500}>
        {children}
      </Typography>
    </Link>
  );
};
