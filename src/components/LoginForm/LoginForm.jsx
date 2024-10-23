import { Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };

  return (
    <div className={s.wrapForm}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
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
          <label className={s.label}>
            <a href="#" className={s.link}>
              Forgot password?
            </a>
          </label>

          <button type="submit" className={s.button}>
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
