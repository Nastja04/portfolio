import { Input } from "@chakra-ui/react";
import { FC, HTMLInputTypeAttribute } from "react";
import "../../styles/form.css";

interface InputFieldProps {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
}

export const InputField: FC<InputFieldProps> = ({ label, name, type, placeholder }) => {
  return (
    <>
      <label className="input-label">{label}</label>
      <Input type={type} name={name} placeholder={placeholder} required focusBorderColor={"dodgerBlue"} />
    </>
  );
};
