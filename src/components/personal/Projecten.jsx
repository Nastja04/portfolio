import { Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

export default function Projecten() {
  return (
    <div>
      <Text py={2} px={10} pb={10}>
        Hieronder kan u al mijn projecten zien die ik in mijn periode aan HoGent
        heb gemaakt, zowel zelfstandig als in groep.
      </Text>

      <ProjectCard
        title={"Splendor"}
        imgUrl={"splendor.jpg"}
        imgAlt={"Foto van splendor"}
        text="Nadat ik een brede basis in Java had gekregen werd het tijd om dit toe te passen in een project. 
        In mijn 1ste jaar in het 2de semester moest ik in team Splendor maken in Java. Dit werd gedaan aan de hand
        van een analyse, door Use cases die ons werden aangeleverd."
        period={"Februari 2022 - Juni 2023"}
        languages={"Java, JavaFX"}
      />

      <ProjectCard
        title={"Carnaval webshop"}
        imgUrl={"carnaval_mask.png"}
        imgAlt={"Foto van carnaval masker"}
        text="In mijn 2de jaar in het 1ste semester heb ik leren programmeren in React en NodeJS. Dit moest ik
        dan ook direct verwerken in een zelfstandig project. Ik had de vrije keuze om te kiezen wat soort 
        website ik wou maken. Tenslotte heb ik een website gemaakt waarbij carnaval verenigingen bepaalde zaken
        kan verkopen en waarbij klanten deze dan kunnen kopen, het lijkt op het principe van 2de-hands.
        De front-end werd gemaakt met React en de backend was met NodeJS."
        period={"September 2023 - December 2023"}
        languages={"React, NodeJS"}
      />

      <ProjectCard
        title={"Delaware"}
        imgUrl={"delaware.png"}
        imgAlt={"Logo van Delaware"}
        text="In mijn 2de jaar in het 2de semester was er opnieuw een goepsproject dat gemaakt moest 
        worden in Java. De opdracht hield in dat we een website moesten ontwikkelen voor Delaware dat B2B werkt,
        waarbij leveranciers hun bestellingen konden opvolgen en hiervan dan ook details bekijken. Als klant 
        kon er een bestelling gemaakt worden en ook betaald worden. De bedrijven konden inloggen en er was de mogelijkheid
        om profiel en een bestelling aan te passen."
        period={"Februari 2024 - Juni 2024"}
        languages={"Java, JavaFX"}
      />

      <ProjectCard
        title={"Olympische spelen 2024"}
        imgUrl={"olympic_games.jpg"}
        imgAlt={"Logo van Olympische spelen 2024"}
        text="In mijn 2de jaar in het 2de semester moest ik ook zelfstandig een project maken, dit was dan
        met Spring Boot. Ik moest een website ontwikkelen voor de olympische spelen waarbij een bezoeker
        de mogelijkheid heeft om voor een bepaalde wedstrijd een ticket te kopen, hier stond een limiet op. 
        De bezoeker kan ook een overzicht bekijken van al zijn gekochte tickets. De administrator kan 
        wedstrijden toevoegen of aanpassen."
        period={"Februari 2024 - Juni 2024"}
        languages={"Java, Spring boot"}
      />

      <ProjectCard
        title={"Buut"}
        imgUrl={"buut.png"}
        imgAlt={"Logo van Buut"}
        text="In mijn 3de jaar in het 1ste semester had ik een groepsopdracht gekregen van een echte klant
        om zijn/haar website opnieuw te maken. Ook moest er een mobiele app ontwikkeld worden met dezelfde
        functionaliteiten. Voor mijn groep was dit het bedrijf Buut, zij huren deelboten in een wijk in Gent.
        We moesten het reservatiesysteem hermaken zodat dit voldeed aan de GDRP-normen. Ook hadden we nog andere
        functionaliteiten toegevoegd zoals meldingen versturen, gebruikers hun rol aanpassen en een overzicht
        van de verschillende batterijen per boot."
        period={"September 2024 - December 2024"}
        languages={"C#, Blazor, MongoDB, Kotlin, RoomDB"}
      />
    </div>
  );
}
