import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Box,
  Text,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { BsEnvelopeAt, BsGithub } from "react-icons/bs";
import "../../styles/contact.css";

export default function Contact() {
  return (
    <div>
      <Text py={2} pb={5}>
        Indien u meer informatie wilt kan u mij contacteren via onderstaande
        kanalen.
      </Text>
      <Flex justifyContent="center" wrap="wrap" className="flexbox">
        {/* LinkedIn */}
        <Box flex="1" maxW="300px" minW="200px">
          <Card border={"2px solid blue"} height="100%" bg={"blue.100"}>
            <CardHeader
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Heading size={"lg"}>
                <FaLinkedin />
              </Heading>
            </CardHeader>
            <CardBody>
              <p>
                Link naar mijn{" "}
                <a href="https://www.linkedin.com/in/nastja-vinck-9b667a300">
                  LinkedIn profiel
                </a>
              </p>
            </CardBody>
          </Card>
        </Box>
        {/* Email */}
        <Box flex="1" maxW="300px" minW="200px">
          <Card
            border={"2px solid skyblue"}
            height="100%"
            bg="rgba(135, 206, 235, 0.5)"
          >
            <CardHeader
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Heading size={"lg"}>
                <BsEnvelopeAt />
              </Heading>
            </CardHeader>
            <CardBody>
              <p>
                School e-mailadres{" "}
                <a href="mailto:nastja.vinck@student.hogent.be">
                  nastja.vinck@student.hogent.be
                </a>
              </p>
              <br />
              <p>
                Persoonlijk e-mailadres{" "}
                <a href="mailto:nastjavinck2004@gmail.com">
                  nastjavinck2004@gmail.com
                </a>
              </p>
            </CardBody>
          </Card>
        </Box>
        {/* GitHub */}
        <Box flex="1" maxW="300px" minW="200px">
          <Card border={"2px solid purple"} height="100%" bg={"purple.100"}>
            <CardHeader
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Heading size={"lg"}>
                <BsGithub />
              </Heading>
            </CardHeader>
            <CardBody>
              <p>
                Link naar mijn persoonlijk{" "}
                <a href="https://github.com/Nastja04">Github profiel</a>
              </p>
            </CardBody>
          </Card>
        </Box>
      </Flex>
    </div>
  );
}
