import { Text } from "@chakra-ui/react";
import {
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem
} from "@material-tailwind/react";
import "../../styles/school.css";

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
            <Text variant="h6" color="blue-gray" className="leading-none">
              HoGent (Gent) - 2022-2025
            </Text>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Text
              variant="small"
              color="gray"
              className="font-normal text-gray-600"
            >
              Professionele Bachelor Toegepaste Informatica met specialisatie
              Mobile & Enterprise Development.
            </Text>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector className="timeline-connector" />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Text variant="h6" color="blue-gray" className="leading-none">
              Oscar Romerocollege (Dendermonde) - 3de graad - 2020-2022
            </Text>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Text
              variant="small"
              color="gray"
              className="font-normal text-gray-600"
            >
              IT en Netwerken
            </Text>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector className="timeline-connector" />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Text variant="h6" color="blue-gray" className="leading-none">
              Oscar Romerocollege (Dendermonde) - 2de graad - 2018-2020
            </Text>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Text
              variant="small"
              color="gray"
              className="font-normal text-gray-600"
            >
              Sociale en Technische Wetenschappen
            </Text>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Text variant="h6" color="blue-gray" className="leading-none">
              Oscar Romerocollege (Dendermonde) - 1ste graad - 2016-2018
            </Text>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Text
              variant="small"
              color="gray"
              className="font-normal text-gray-600"
            >
              Sociale en Technische Vorming
            </Text>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
