import { Box, Divider, Link, Stack, Typography } from "@mui/material";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/footer.css";

export const Footer = () => {
  return (
    <Box className="footer-box">
      <Stack
        spacing={8}
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Box className="footer-column">
          <Link href="/" sx={{ mr: 4 }}>
            <img
              src="/Logo_NV.png"
              alt="Logo"
              style={{ width: "100px", height: "auto", borderRadius: "50%" }}
            />
          </Link>
          <Typography>
            Gemaakt door Nastja Vinck, software developer bij{" "}
            <Link
              href="https://irc.be"
              target="_blank"
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              IRC Engineering
            </Link>
          </Typography>
        </Box>
        <Box className="footer-column">
          <Typography variant="h6" fontWeight="bold">
            Pagina&apos;s
          </Typography>
          <Box className="footer-col-links">
            <Link href="/career" className="footer-link">
              Loopbaan
            </Link>
            <Link href="/skills" className="footer-link">
              Vaardigheden
            </Link>
            <Link href="/contact" className="footer-link">
              Contact
            </Link>
          </Box>
        </Box>
        <Box className="footer-column">
          <Typography variant="h6" fontWeight="bold">
            Contact
          </Typography>
          <Box className="footer-col-links">
            <Link
              href="https://github.com/Nastja04"
              target="_blank"
              rel="noopener"
              className="footer-link"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <FaGithub />
              <Typography sx={{ ml: 1 }}>GitHub</Typography>
            </Link>
            <Link
              href="https://www.linkedin.com/in/nastja-vinck"
              target="_blank"
              rel="noopener"
              className="footer-link"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <FaLinkedin />
              <Typography sx={{ ml: 1 }}>LinkedIn</Typography>
            </Link>
            <Link
              href="mailto:nastjavinck2004@gmail.com"
              className="footer-link"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <FaEnvelope />
              <Typography sx={{ ml: 1 }}>E-mail</Typography>
            </Link>
          </Box>
        </Box>
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Nastja Vinck. Alle rechten
        voorbehouden.
      </Typography>
    </Box>
  );
};
