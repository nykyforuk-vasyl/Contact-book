import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(5, "Too short")
      .max(20, "Too long")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = { ...values };
    dispatch(addContact(newContact));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <label className={s.label} htmlFor="name">
          Name
        </label>
        <Field className={s.field} type="text" name="name" id="name" />
        <ErrorMessage name="name" component="span" className={s.error} />

        <label className={s.label} htmlFor="number">
          Number
        </label>
        <Field className={s.field} type="text" name="number" id="number" />
        <ErrorMessage name="number" component="span" className={s.error} />

        <button type="submit" className={s.button}>
          Add
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
