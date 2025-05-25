import { Button, Textarea } from "@chakra-ui/react";
import emailjs from '@emailjs/browser';
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
  const form = useRef<HTMLFormElement>(null);

  const sendMail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) {
      setStateMessage("Form is not available");
      setIsSubmitting(false);
      return;
    }
    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then(
        (result) => {
          console.log(result);
          setStateMessage("Verstuurd!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          console.error("Error sending email:", error);
          setStateMessage("Er ging iets mis bij het versturen. Probeer het later opnieuw.");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendMail} className="form">
      <InputField name={"name"} label="Naam" type={"text"} placeholder={"Naam"} />
      <InputField name={"email"} label="E-mail" type={"text"} placeholder={"E-mail"} />
      <InputField name={"title"} label="Onderwerp" type={"text"} placeholder={"Onderwerp"} />
      <label className="input-label">Bericht</label>
      <Textarea name={"message"} placeholder={"Typ hier je bericht..."} rows={4} required focusBorderColor={"dodgerBlue"} />

      <Button type="submit" disabled={isSubmitting} className="submit-button">Verstuur</Button>
      {stateMessage && <p>{stateMessage}</p>}
    </form>
  );
};
