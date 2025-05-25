import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
} from "@chakra-ui/react";
import "../../styles/contact.css";
import { Form } from "../contact/form";

export default function Contact() {
  return (
    <div>
      <Flex justifyContent="center" wrap="wrap" className="flexbox">
        {/* Contact */}
        <Box flex="1" maxW="25%">
          <Card height="100%" width="100%" bg={"blue.100"}>
            <CardHeader
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Heading size={"lg"}>Contact informatie</Heading>
            </CardHeader>
            <CardBody>
              <p>
                Aarzel niet om contact op te nemen indien u vragen heeft. Ik sta
                open voor nieuwe opportuniteiten en ideëen.
              </p>
              {/* <p>
                Link naar mijn{" "}
                <a href="https://www.linkedin.com/in/nastja-vinck-9b667a300">
                  LinkedIn profiel
                </a>
              </p> 
              <p>
                Persoonlijk e-mailadres{" "}
                <a href="mailto:nastjavinck2004@gmail.com">
                  nastjavinck2004@gmail.com
                </a>
              </p>
              <p>
                Link naar mijn persoonlijk{" "}
                <a href="https://github.com/Nastja04">Github profiel</a>
              </p>
              */}
            </CardBody>
          </Card>
        </Box>
        {/* Formulier */}
        <Box flex="1" maxW="25%" pl={5}>
          <Card height="100%" width="100%" bg={"blue.100"}>
            <CardHeader
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Heading size={"lg"}>Stuur mij een bericht</Heading>
            </CardHeader>
            <CardBody>
              <Form />
            </CardBody>
          </Card>
        </Box>
      </Flex>
    </div>
  );
}
