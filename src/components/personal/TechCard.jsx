import { Card, CardBody, Progress, Text } from "@chakra-ui/react";

export default function TechCard({ icon: Icon, text, progress, cardId }) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      mt={10}
      w={"90%"}
      id={cardId}
    >
      <Icon size={75} />
      <CardBody>
        <Text pb={4}>{text}</Text>
        <Progress value={progress} variant="filled" color="blue" />
      </CardBody>
    </Card>
  );
}
