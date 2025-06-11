import {
  Box,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
} from "@mui/material";

export default function TechCard({ text, progress }) {
  return (
    <Box mb={2}>
      <Typography pb={1} align="left">
        {text}
      </Typography>
      <BorderLinearProgress value={progress} variant="determinate" />
    </Box>
  );
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#98aeba",
  },
}));
