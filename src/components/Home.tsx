import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "../styles/home.css";

export const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Box
      className="flex-container"
      flexDirection={isMobile ? "column" : "row"}
      alignItems={isMobile ? "center" : "flex-start"}
    >
      <Box className="flex-img">
        <img
          src="./Selfie.jpg"
          alt="Selfie van mezelf"
          style={{
            objectFit: "cover",
            maxWidth: "250px",
            borderRadius: "12px",
          }}
          className="rounded-lg"
        />

        {!isMobile && (
          <>
            <Box className="flex-img">
              <img
                src="./books.png"
                alt="Foto van boeken"
                style={{
                  objectFit: "cover",
                  maxWidth: "250px",
                  marginLeft: "-150px",
                }}
              />
            </Box>
            <Box className="flex-img">
              <img
                src="./cooking.png"
                alt="Foto van bakken"
                style={{
                  objectFit: "cover",
                  maxWidth: "250px",
                  marginLeft: "50px",
                  marginTop: "-100px",
                }}
              />
            </Box>
          </>
        )}
      </Box>
      <Box
        className="flex-text"
        // justifyContent="center"
      >
        <Card sx={{ textAlign: "left" }}>
          <CardHeader
            title={
              <Typography variant="h4" fontWeight={700} align="center">
                Welkom!
              </Typography>
            }
          />
          <CardContent>
            <Typography className="home-text" component={"p"}>
              Hallo, ik ben Nastja Vinck, 21 jaar en woon in Dendermonde. Ik heb
              een passie voor software development en ben altijd op zoek naar
              manieren om mijn vaardigheden te verbeteren en nieuwe
              technologieën te leren.
            </Typography>
            <Typography className="home-text" component={"p"}>
              In mijn vrije tijd lees ik graag boeken en koken of bakken vind ik
              ook wel ontspannend. Ook ben ik graag bezig aan kleine projecten
              om mijn kennis toe te passen en eventueel iets nieuws proberen.
            </Typography>
            <Typography className="home-text" component={"p"}>
              Dit is mijn digitale portfolio dat wat meer over mezelf vertelt.
              Hier kan je mijn opleidingen zien, de technologieën waar ik kennis
              in heb en de projecten die ik in mijn schoolperiode heb gemaakt.
              Kijk gerust rond en indien je eventuele vragen hebt kan je mij
              altijd contacteren via de pagina{" "}
              <a href="/contact" style={{ color: "black", fontWeight: "bold" }}>
                Contact
              </a>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
