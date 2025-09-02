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
  return React.createElement(
    "div",
    { className: "max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl" },
    [
      React.createElement(
        "h2",
        { key: "title", className: "text-2xl font-bold text-center mb-6" },
        "Register"
      ),
      React.createElement(Formik, {
        key: "formik",
        initialValues: { username: "", email: "", password: "" },
        validationSchema: ValidationSchema,
        onSubmit: (values, { resetForm }) => {
          console.log("Form Data:", values);
          alert("Registration Successful!");
          resetForm();
        },
        children: () =>
          React.createElement(Form, null, [
            // Username
            React.createElement("div", { key: "username", className: "mb-4" }, [
              React.createElement(
                "label",
                { key: "label", className: "block font-medium" },
                "Username"
              ),
              React.createElement(Field, {
                key: "field",
                type: "text",
                name: "username",
                placeholder: "Enter username",
                className: "w-full px-3 py-2 border rounded-md",
              }),
              React.createElement(ErrorMessage, {
                key: "error",
                name: "username",
                component: "div",
                className: "text-red-500 text-sm",
              }),
            ]),
            // Email
            React.createElement("div", { key: "email", className: "mb-4" }, [
              React.createElement(
                "label",
                { key: "label", className: "block font-medium" },
                "Email"
              ),
              React.createElement(Field, {
                key: "field",
                type: "email",
                name: "email",
                placeholder: "Enter email",
                className: "w-full px-3 py-2 border rounded-md",
              }),
              React.createElement(ErrorMessage, {
                key: "error",
                name: "email",
                component: "div",
                className: "text-red-500 text-sm",
              }),
            ]),
            // Password
            React.createElement("div", { key: "password", className: "mb-4" }, [
              React.createElement(
                "label",
                { key: "label", className: "block font-medium" },
                "Password"
              ),
              React.createElement(Field, {
                key: "field",
                type: "password",
                name: "password",
                placeholder: "Enter password",
                className: "w-full px-3 py-2 border rounded-md",
              }),
              React.createElement(ErrorMessage, {
                key: "error",
                name: "password",
                component: "div",
                className: "text-red-500 text-sm",
              }),
            ]),
            // Submit
            React.createElement(
              "button",
              {
                key: "submit",
                type: "submit",
                className:
                  "w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700",
              },
              "Register"
            ),
          ]),
      }),
    ]
  );
}

export default FormikForm;
