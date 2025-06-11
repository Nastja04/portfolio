import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

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
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
        maxWidth: "70%",
        margin: "auto",
        mb: 4,
      }}
      variant="outlined"
    >
      <Box sx={{ p: 2 }}>
        <CardMedia
          component="img"
          image={"./" + imgUrl}
          alt={imgAlt}
          sx={{
            objectFit: "cover",
            maxWidth: 250,
            width: "100%",
            margin: "auto",
            borderRadius: 2,
          }}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <CardHeader
          title={
            <Typography variant="h5" component="div">
              {title}
            </Typography>
          }
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography paragraph>
            <b>Omschrijving:</b> {text}
          </Typography>
          <Typography paragraph>
            <b>Periode:</b> {period}
          </Typography>
          <Typography paragraph>
            <b>Gebruikte programmeertalen:</b> {languages}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
