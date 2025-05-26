import { Card, CardContent, CardHeader } from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";
import "./TimelineCard.css";

interface TimelineCardProps {
  title?: string;
  location?: string;
  children?: React.ReactNode;
}

export const TimelineCard: FC<TimelineCardProps> = ({
  title,
  location,
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={`timeline-card${visible ? " visible" : ""}`}>
      <Card
        sx={{
          backgroundColor: "#eefbff",
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        }}
      >
        <CardHeader
          title={title}
          sx={{
            py: 1,
            "& .MuiCardHeader-title": {
              fontSize: "medium",
              fontWeight: "bold",
            },
          }}
        />
        <CardContent sx={{ py: 0.5 }}>
          <p style={{ paddingBottom: "0.5em" }}>{location}</p>
          <p>{children}</p>
        </CardContent>
      </Card>
    </div>
  );
};
