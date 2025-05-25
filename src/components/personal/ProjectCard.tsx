/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export default function ProjectCard({
  title,
  imgUrl,
  imgAlt,
  text,
  period,
  languages,
}) {
  return (
    <Card
      direction="row"
      overflow="hidden"
      variant="outline"
      alignItems="center"
      textAlign="center"
      w={"100%"}
      maxW={"70%"}
      m={"auto"}
      mb={10}
    >
      <Box p={4}>
        <Image
          objectFit="cover"
          maxW={"250px"}
          src={"./" + imgUrl}
          alt={imgAlt}
          w={"100%"}
          m={"auto"}
        />
      </Box>

      <Box flex="1">
        <CardHeader>
          <Heading size="lg">{title}</Heading>
        </CardHeader>

        <CardBody textAlign={"left"}>
          <Text pb={4}>
            <b>Omschrijving:</b> {text}
          </Text>
          <Text pb={4}>
            <b>Periode:</b> {period}
          </Text>
          <Text pb={4}>
            <b>Gebruikte programmeertalen:</b> {languages}
          </Text>
        </CardBody>
      </Box>
    </Card>
  );
}
