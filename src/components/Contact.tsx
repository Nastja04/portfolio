import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Form } from "../components/contact/Form";
import "../styles/contact.css";

export const Contact = () => {
  return (
    <Box className="flexbox" flexDirection={{ xs: "column", md: "row" }}>
      {/* Contact */}
      <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: "35%" } }}>
        <Card className="card" sx={{ backgroundColor: "#9FDEFD" }}>
          <CardHeader
            title={
              <Typography variant="h5" fontWeight={700} className="card-header">
                Contact informatie
              </Typography>
            }
          />
          <CardContent>
            <Box display="flex" gap={2} flexDirection="column">
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
            </Box>
          </CardContent>
        </Card>
      </Box>
      {/* Formulier */}
      <Box
        sx={{
          flex: 1,
          maxWidth: { xs: "100%", md: "50%" },
        }}
      >
        <Card className="card" variant="elevation">
          <CardHeader
            title={
              <Typography variant="h5" fontWeight={700} className="card-header">
                Stuur mij een bericht
              </Typography>
            }
          />
          <CardContent>
            <Form />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
