import Timeline from "@mui/lab/Timeline";
import { Card, CardContent, CardHeader } from "@mui/material";
import "../styles/career.css";
import { TimelineCard } from "./career/TimelineCard";
import { TimeLineItem } from "./career/TimelineItem";

export const Career = () => {
  return (
    <>
      <Card>
        <CardHeader title="Werkervaring" />
        <CardContent>
          <Timeline position="alternate-reverse">
            <TimeLineItem title="Augustus 2025 - heden">
              <TimelineCard
                title="Software Developer"
                location="IRC, Dendermonde"
              >
                <ul className="timeline-list">
                  <li>Database conversie (SSMS naar PostgreSQL)</li>
                </ul>
              </TimelineCard>
            </TimeLineItem>
            <TimeLineItem title="Februari 2025 - Mei 2025">
              <TimelineCard
                title="React Developer (stage)"
                location="Picky, Gent"
              >
                <ul className="timeline-list">
                  <li>Features toevoegen</li>
                  <li>Bugs oplossen</li>
                  <li>Code reviews</li>
                </ul>
              </TimelineCard>
            </TimeLineItem>
            <TimeLineItem title="Juli 2020 - Augustus 2024">
              <TimelineCard
                title="Winkel bediende (studentenjob)"
                location="Delhaize, Dendermonde"
              >
                <ul className="timeline-list">
                  <li>Rekken vullen</li>
                  <li>Klanten bedienen</li>
                </ul>
              </TimelineCard>
            </TimeLineItem>
          </Timeline>
        </CardContent>
      </Card>

      <Card>
        <CardHeader title="Opleiding" />
        <CardContent>
          <Timeline position="alternate-reverse">
            <TimeLineItem title="September 2022 - Juni 2025">
              <TimelineCard
                title="Bachelor Toegepaste Informatica"
                location="Hogeschool Gent"
              >
                <p>Specialisatie Mobile & Enterprise development</p>
              </TimelineCard>
            </TimeLineItem>
            <TimeLineItem title="September 2020 - Juni 2022">
              <TimelineCard
                title="IT & Netwerken"
                location="Oscar Romerocollege, Dendermonde"
              >
                <p>Diploma Informaticabeheer</p>
              </TimelineCard>
            </TimeLineItem>
          </Timeline>
        </CardContent>
      </Card>
    </>
  );
};
