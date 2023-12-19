import validationSchema from "../../../utils/functions/validationSchema";
import "./contactForm.scss";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";

const ContactForm: React.FC = () => {
  const initialValues = {
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  };

  const handleSubmit = (
    values: typeof initialValues,
    { setSubmitting }: FormikHelpers<typeof initialValues>
  ) => {
    // Handle form submission here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className="contact-form">
          <div className="form-group">
            <Field
              type="text"
              name="Name"
              placeholder="Name"
              className="form-control"
            />
            <ErrorMessage name="Name" component="div" className="error" />
          </div>
          <div className="form-group">
            <Field
              type="email"
              name="Email"
              placeholder="Email"
              className="form-control"
            />
            <ErrorMessage name="Email" component="div" className="error" />
          </div>
          <div className="form-group">
            <Field
              type="text"
              name="Subject"
              placeholder="Subject"
              className="form-control"
            />
            <ErrorMessage name="Subject" component="div" className="error" />
          </div>
          <div className="form-group">
            <Field
              as="textarea"
              name="Message"
              placeholder="Message"
              className="form-control"
            />
            <ErrorMessage name="Message" component="div" className="error" />
          </div>
          <button type="submit" disabled={isSubmitting} className="submit-btn">
            Send message
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
