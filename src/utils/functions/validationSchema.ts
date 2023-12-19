import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  Name: Yup.string().required('Name is required'),
  Email: Yup.string().email('Invalid email').required('Email is required'),
  Subject: Yup.string().required('Subject is required'),
  Message: Yup.string().required('Message is required'),
});

export default validationSchema;
