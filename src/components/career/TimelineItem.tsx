import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { FC } from "react";
import "./TimelineItem.css";

interface TimeLineItemProps {
  title?: string;
  children?: React.ReactNode;
}

export const TimeLineItem: FC<TimeLineItemProps> = ({ title, children }) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <p className="title">{title}</p>
        {children}
      </TimelineContent>
    </TimelineItem>
  );
};
