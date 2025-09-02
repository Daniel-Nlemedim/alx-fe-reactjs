import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ValidationSchema = Yup.object({
  username: Yup.string().required("Username Required"),
  email: Yup.string().email("Invalid email address").required("Enter Email"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

function FormikForm() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className=" text-2xl font-bold text-center mb-6">Register</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={ValidationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form Data:", values);
          alert("Registration Successful!");
          resetForm();
        }}
      >
        {() => (
          <Form className="space-y-4">
            <div>
              <label className="block font-medium">Username</label>
              <Field
                type="text"
                name="username"
                placeholder="Enter username"
                className="w-full px-3 py-2 border rounded-md"
              />

              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            {/*email  */}
            <div>
              <label className="block font-medium">Email</label>
              <Field
                type=" email"
                name=" email"
                placeholder="Enter email"
                className=" w-full px-3 py-2 border rounded-md"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            {/*password*/}
            <div>
              <label className="block font-medium"> Password</label>
              <Field
                type="password"
                name="password"
                placeholder=" Enter password"
                className=" w-full px-3 py-2 border rounded-md"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className=" w-full border rounded-md px-4 py-2 font-semibold bg-blue-500 text-white"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
