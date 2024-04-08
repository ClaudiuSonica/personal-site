import { useContext, useState } from "react";
import "./contactForm.scss";
import validationSchema from "../../../utils/functions/validationSchema";
import * as Yup from "yup";
import { ThemeContext } from "../../../utils/context/themeContext";

interface FormValues {
  Name: string;
  Email: string;
  Subject: string;
  Message: string;
}

const initialFormData: FormValues = {
  Name: "",
  Email: "",
  Subject: "",
  Message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormValues>(initialFormData);
  const [formErrors, setFormErrors] = useState<Partial<FormValues>>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setFormErrors({ Name: "", Email: "", Subject: "", Message: "" });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const newErrors: Partial<FormValues> = {};
        error.inner.forEach((err) => {
          if (err.path) {
            newErrors[err.path as keyof FormValues] = err.message;
          }
        });
        setFormErrors(newErrors);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name !== "Email") {
      updatedValue = value.replace(/\b\w/g, (char: string) =>
        char.toUpperCase()
      );
    }

    setFormData((prevValues) => ({
      ...prevValues,
      [name]: updatedValue,
    }));

    if (value.trim() !== "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const { Name, Email, Subject, Message } = formData;

  const {theme} = useContext(ThemeContext);

  return (
    <form onSubmit={handleSubmit} className={`form ${theme}`}>
      <div className="form-field">
        <input
          type="text"
          placeholder="Name"
          id="name"
          name="Name"
          onChange={handleChange}
          value={Name}
          autoComplete="off"
        />
        {formErrors.Name && <p className="error-message">{formErrors.Name}</p>}
      </div>
      <div className="form-field">
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="Email"
          onChange={handleChange}
          value={Email}
          autoComplete="off"
        />
        {formErrors.Email && (
          <p className="error-message">{formErrors.Email}</p>
        )}
      </div>
      <div className="form-field">
        <input
          type="text"
          placeholder="Subject"
          id="subject"
          name="Subject"
          onChange={handleChange}
          value={Subject}
          autoComplete="off"
        />
        {formErrors.Subject && (
          <p className="error-message">{formErrors.Subject}</p>
        )}
      </div>
      <div className="form-field">
        <textarea
          placeholder="Message"
          id="message"
          name="Message"
          onChange={handleChange}
          value={Message}
          autoComplete="off"
        />
        {formErrors.Message && (
          <p className="error-message">{formErrors.Message}</p>
        )}
      </div>
      <button type="submit">Get in touch!</button>
    </form>
  );
};

export default ContactForm;
