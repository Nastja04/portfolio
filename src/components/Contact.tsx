import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Form } from "../components/contact/Form";
import "../styles/contact.css";

export const Contact = () => {
  return (
    <Flex className="flexbox" direction={["column", "column", "column", "row"]}>
      {/* Contact */}
      <Box flex="1" maxW={["100%", "100%", "100%", "35%"]}>
        <Card className="card" bg="#9FDEFD">
          <CardHeader className="card-header">
            <Heading size={"lg"}>Contact informatie</Heading>
          </CardHeader>
          <CardBody>
            <Flex gap={4} direction="column">
              <p className="contact-text">
                Aarzel niet om contact op te nemen indien u vragen heeft. Ik sta
                open voor nieuwe opportuniteiten en ideëen.
              </p>
              <p>
                <a
                  href="mailto:nastjavinck2004@gmail.com"
                  className="flex-link"
                >
                  <FaEnvelope /> nastjavinck2004@gmail.com
                </a>
              </p>
              <p className="flex-link">
                <FaMapMarkerAlt /> 9200 Dendermonde, België
              </p>
            </Flex>
          </CardBody>
        </Card>
      </Box>
      {/* Formulier */}
      <Box flex="1" maxW={["100%", "100%", "100%", "50%"]}>
        <Card className="card" variant="elevated">
          <CardHeader className="card-header">
            <Heading size={"lg"}>Stuur mij een bericht</Heading>
          </CardHeader>
          <CardBody>
            <Form />
          </CardBody>
        </Card>
      </Box>
    </Flex>
  );
};
