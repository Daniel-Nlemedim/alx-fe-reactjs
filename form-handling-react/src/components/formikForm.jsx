// src/components/formikForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup Validation Schema
const ValidationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

function FormikForm() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={ValidationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form Data:", values);
          alert("Registration Successful!");
          resetForm();
        }}
      >
        {/* Use Formik’s <Form> */}
        {() => (
          <Form>
            {/* Username Field */}
            <div className="mb-4">
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

            {/* Email Field */}
            <div className="mb-4">
              <label className="block font-medium">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Enter email"
                className="w-full px-3 py-2 border rounded-md"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label className="block font-medium">Password</label>
              <Field
                type="password"
                name="password"
                placeholder="Enter password"
                className="w-full px-3 py-2 border rounded-md"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
