import emailjs from "@emailjs/browser";
import { Alert, Button, Collapse } from "@mui/material";
import { useRef, useState } from "react";
import "../../styles/form.css";
import { InputField } from "./InputField";

export const Form = () => {
  // @ts-ignore
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  // @ts-ignore
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  // @ts-ignore
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendMail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) {
      setIsError(true);
      setStateMessage("Form is not available");
      setIsSubmitting(false);
      return;
    }
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        setIsError(false);
        setStateMessage("Verstuurd!");
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000);
      },
      (error) => {
        setIsError(true);
        setStateMessage(
          "Er ging iets mis bij het versturen. Probeer het later opnieuw."
        );
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000);
      }
    );
    e.target.reset();
  };

  return (
    <>
      <Collapse in={!!stateMessage}>
        {stateMessage && (
          <Alert severity={isError ? "error" : "success"} sx={{ mb: 2 }}>
            {stateMessage}
          </Alert>
        )}
      </Collapse>
      <form ref={form} onSubmit={sendMail} className="form">
        <InputField
          name={"name"}
          label="Naam"
          type={"text"}
          placeholder={"Naam"}
        />
        <InputField
          name={"email"}
          label="E-mail"
          type={"text"}
          placeholder={"E-mail"}
        />
        <InputField
          name={"title"}
          label="Onderwerp"
          type={"text"}
          placeholder={"Onderwerp"}
        />
        <InputField
          label={"Bericht"}
          name={"message"}
          placeholder={"Typ hier je bericht..."}
          multiline
          minRows={4}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="contained"
          className="submit-button"
        >
          Verstuur
        </Button>
      </form>
    </>
  );
};
