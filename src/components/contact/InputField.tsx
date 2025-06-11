import { TextField, TextFieldProps } from "@mui/material";
import { FC } from "react";
import "../../styles/form.css";

export const InputField: FC<TextFieldProps> = (props) => {
  return (
    <TextField
      {...props}
      required
      fullWidth
      margin="normal"
      variant="outlined"
      sx={{
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderColor: "dodgerblue",
          },
          "&.Mui-focused fieldset": {
            borderColor: "dodgerblue",
          },
        },
      }}
    />
  );
};
