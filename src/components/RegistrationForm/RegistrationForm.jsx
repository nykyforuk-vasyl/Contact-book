import { Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(register(values));
    options.resetForm();
  };

  return (
    <div className={s.wrapForm}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <label className={s.label}>Name</label>
          <Field
            name="name"
            type="name"
            placeholder="name"
            className={s.field}
            required
          />
          <label className={s.label}>Email</label>
          <Field
            name="email"
            type="email"
            placeholder="email"
            className={s.field}
            required
          />
          <label className={s.label}>Password</label>
          <Field
            name="password"
            type="password"
            placeholder="password"
            className={s.field}
            required
          />

          <button type="submit" className={s.button}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
