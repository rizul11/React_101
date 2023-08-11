import { Field, Form, Formik } from "formik";
import React from "react";

function FormikForm() {
  return (
    <div>
      <Formik
        initialValues={{ name: "", age: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <label htmlFor="">Enter Name :</label>
          <Field type="text" name="name" />
          <br />
          <br />
          <label htmlFor="">Enter Age :</label>
          <Field type="number" name="age" />
          <br />
          <br />
          <label htmlFor="">Enter Password</label>
          <Field type="password" name="password" />
          <br />
          <br />
          <label htmlFor="">Gender: &nbsp;</label>
          <label htmlFor="">Male &nbsp;</label>
          <Field type="radio" name="gender" value="Male" />
          &nbsp;
          <label htmlFor="">Female &nbsp;</label>
          <Field type="radio" name="gender" value="Female" />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
