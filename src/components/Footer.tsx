import {
  Box,
  Divider,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/footer.css";

export const Footer = () => {
  return (
    <Box p={{ base: 4, md: 8 }} className="footer-box">
      <Stack
        spacing={{ base: 8, md: 8 }}
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
      >
        <Stack
          spacing={8}
          direction={"row"}
          justifyContent="space-between"
          display={{ base: "none", sm: "flex" }}
        >
          <VStack spacing={4} boxSize={{ base: "100%", md: "50%" }}>
            <Box display="flex" alignItems="center">
              <Link href="/" mr={4}>
                <Image
                  src="/Logo_NV.png"
                  alt="Logo"
                  width="100px"
                  height="auto"
                  borderRadius="full"
                />
              </Link>
              <Text>
                Gemaakt door Nastja Vinck, frontend developer en student
                Toegepaste Informatica aan HoGent.
              </Text>
            </Box>
          </VStack>
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="xl" fontWeight="bold">
              Pagina's
            </Text>
            <VStack spacing={4} alignItems="flex-start">
              <Link href="/contact" className="footer-link">
                Contact
              </Link>
            </VStack>
          </VStack>
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="xl" fontWeight="bold">
              Contact
            </Text>
            <VStack spacing={2} alignItems="flex-start">
              <Link
                href="https://github.com/Nastja04"
                target="_blank"
                className="footer-link"
              >
                <FaGithub />
                <Text>GitHub</Text>
              </Link>
              <Link
                href="https://www.linkedin.com/in/nastja-vinck-9b667a300/"
                target="_blank"
                className="footer-link"
              >
                <FaLinkedin />
                <Text>LinkedIn</Text>
              </Link>
              <Link
                href="mailto:nastjavinck2004@gmail.com"
                target="_blank"
                className="footer-link"
              >
                <FaEnvelope />
                <Text>E-mail</Text>
              </Link>
            </VStack>
          </VStack>
        </Stack>
      </Stack>

      <Divider my={4} />

      <Text fontSize="sm">
        &copy; {new Date().getFullYear()} Nastja Vinck. Alle rechten
        voorbehouden.
      </Text>
    </Box>
  );
};
