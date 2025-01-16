import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import "../../styles/school.css";
import { Text } from "@chakra-ui/react";

export default function School() {
  return (
    <div className="timeline">
      <Text pt={2} pb={10} px={10}>
        Hieronder kan u de tijdlijn zien van mijn school carrière. Deze start
        onderaan en bovenaan staat mijn meest recentste opleiding.
      </Text>
      <Timeline>
        <TimelineItem>
          <TimelineConnector className="timeline-connector" />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              HOGent (Gent) - 2022-2025
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="small"
              color="gary"
              className="font-normal text-gray-600"
            >
              Professionele Bachelor Toegepaste Informatica met specialisatie
              Mobile & Enterprise Development.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector className="timeline-connector" />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Oscar Romerocollege (Dendermonde) - 3de graad - 2020-2022
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="small"
              color="gary"
              className="font-normal text-gray-600"
            >
              IT en Netwerken
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector className="timeline-connector" />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Oscar Romerocollege (Dendermonde) - 2de graad - 2018-2020
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="small"
              color="gary"
              className="font-normal text-gray-600"
            >
              Sociale en Technische Wetenschappen
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Oscar Romerocollege (Dendermonde) - 1ste graad - 2016-2018
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="small"
              color="gary"
              className="font-normal text-gray-600"
            >
              Sociale en Technische Vorming
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
