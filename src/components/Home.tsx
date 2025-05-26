import { Card, CardBody, CardHeader, Heading, Image } from "@chakra-ui/react";
import "../styles/home.css";

export const Home = () => {
  return (
    <div className="flex-container">
      <div className="flex-img">
        <Image
          objectFit="cover"
          maxW={"250px"}
          src="./Selfie.jpg"
          alt="Selfie van mezelf"
          className="rounded-lg"
        />
        <div className="flex-img">
          <Image
            objectFit="cover"
            maxW={"250px"}
            src="./books.png"
            alt="Foto van boeken"
            ml={"-150"}
          />
        </div>
        <div className="flex-img">
          <Image
            objectFit="cover"
            maxW={"250px"}
            src="./cooking.png"
            alt="Foto van bakken"
            ml={50}
            mt={-100}
          />
        </div>
      </div>
      <div className="flex-text">
        <Card align={"left"}>
          <CardHeader>
            <Heading size="lg">Welkom!</Heading>
          </CardHeader>
          <CardBody>
            <p className="home-text">
              Hallo, ik ben Nastja Vinck, 20 jaar en woon in Dendermonde. Ik ben
              student PBA Toegepaste informatica aan HoGent met specialisatie
              Mobile & Enterprise Development en zit in mijn laatste jaar.
            </p>
            <br />
            <p className="home-text">
              In mijn vrije tijd lees ik graag boeken en koken of bakken vind ik
              ook wel ontspannend. Ook ben ik graag bezig aan kleine projecten
              om mijn kennis toe te passen en eventueel iets nieuws proberen.
            </p>
            <br />
            <p className="home-text">
              Dit is mijn digitale portfolio dat wat meer over mezelf verteld.
              Hier kan je mijn opleidingen zien, de technologieën waar ik kennis
              in heb en de projecten die ik in mijn school periode heb gemaakt.
              Kijk gerust rond en indien je eventuele vragen hebt kan je mij
              altijd contacteren via de pagina <a href="/contact">Contact</a>
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
