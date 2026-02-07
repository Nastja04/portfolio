import { Link, Typography } from "@mui/material";
import { FC } from "react";
import "../../styles/navbar.css";

interface NavbarLinkProps {
  children: React.ReactNode;
  to?: string;
  isActive?: boolean;
  className?: string;
}

export const NavbarLink: FC<NavbarLinkProps> = ({
  children,
  to = "/",
  isActive,
  className = "",
}) => {
  return (
    <Link
      href={to}
      underline="none"
      className={`navLink ${className} ${isActive ? "active-link" : ""}`}
      sx={{
        display: "inline-flex",
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
