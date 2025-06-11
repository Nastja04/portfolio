import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { skills } from "../data/skills";
import TechCard from "./skills/TechCard";

export const Skills = () => {
  console.log("skills:", skills);
  console.log("grid", Grid);
  return (
    <>
      <Card>
        <CardHeader title="Vaardigheden" />
        <CardContent>
          <Grid container spacing={2}>
            {skills.map((card) => (
              <Grid key={card.title} size={{ xs: 12, md: 4 }}>
                <Card
                  sx={{
                    boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                    mb: 5,
                  }}
                >
                  <CardHeader title={card.title} />
                  <CardContent>
                    {card.skills.map((skill) => (
                      <TechCard
                        key={skill.name}
                        text={skill.name}
                        progress={skill.progress}
                      />
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
