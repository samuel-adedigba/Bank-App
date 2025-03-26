import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { RegisterSlice } from "../slice/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GoChevronLeft } from "react-icons/go";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = async (values: User) => {
    const formValue = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      role: values.role,
    };
    try {
      const result = await dispatch(RegisterSlice(formValue)).unwrap();
      if (result) {
        // localStorage.setItem('banktoken', JSON.stringify(formValue) )
        console.log("register succesful", formValue);
        navigate("/login");
      }
    } catch (error) {
      console.error("Register failed:", error);
    }
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
    role: Yup.string().required("Role is required"),
  });

  return (
    // <div className="register-container">
    //   <h1>Create an Account</h1>
    //   <Formik
    //     initialValues={{
    //       firstName: "",
    //       lastName: "",
    //       email: "",
    //       password: "",
    //       role: "user",
    //     }}
    //     validationSchema={validationSchema}
    //     onSubmit={handleRegister}
    //   >
    //     <Form>
    //       <label>First Name</label>
    //       <Field name="firstName" />
    //       <ErrorMessage name="firstName" component="div" className="error" />

    //       <label>Last Name</label>
    //       <Field name="lastName" />
    //       <ErrorMessage name="lastName" component="div" className="error" />

    //       <label>Email</label>
    //       <Field name="email" type="email" />
    //       <ErrorMessage name="email" component="div" className="error" />

    //       <label>Password</label>
    //       <Field name="password" type="password" />
    //       <ErrorMessage name="password" component="div" className="error" />
    //       <label>Role</label>
    //       <Field as="select" name="role">
    // <option value="user">User</option>
    // <option value="bankManager">Bank Manager</option>
    // <option value="superAdmin">Super Admin</option>
    //       </Field>
    //       <ErrorMessage name="role" component="div" />

    //       <button type="submit">Register</button>
    //     </Form>
    //   </Formik>
    // </div>
    <div className="flex justify-center items-center min-h-screen  bg-slate-100">
      <div className="w-full  max-w-xs p-6 md:p-8 lg:p-6 rounded-t-3xl bg-white shadow-lg md:max-w-md   relative">
        <div className="text-3xl mx-6 absolute top-10 left-5 text-center flex items-center gap-4">
          <GoChevronLeft />
          <span className="text-xl font-bold text-[#3629b6] "> Sign up</span>
        </div>
        <div className="bg-white">
          <div className="text-left mt-14">
            <h1 className="text-[#3629b6] text-3xl font-bold  ">
              Welcome to us
            </h1>
            <p className="text-lg text-[#8e8e8e] mt-2">
              Hello there, create New account
            </p>
            <div className="w-full mx-auto rounded-full flex items-center justify-center p-6 ">
              <img src="/register.png" alt="lock icon" className="" />
            </div>
          </div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              role: "user",
            }}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
            {({ errors, touched }) => (
              <Form className="mt-6">
                <div className="mb-4">
                  <Field
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    className={`w-full px-4 py-2 border ${
                      errors.email && touched.email
                        ? "border-red-500"
                        : "border-[#e0e0e0]"
                    } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3629b6]`}
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    className={`w-full px-4 py-2 border ${
                      errors.password && touched.password
                        ? "border-red-500"
                        : "border-[#e0e0e0]"
                    } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3629b6]`}
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    className={`w-full px-4 py-2 border ${
                      errors.email && touched.email
                        ? "border-red-500"
                        : "border-[#e0e0e0]"
                    } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3629b6]`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className={`w-full px-4 py-2 border ${
                      errors.password && touched.password
                        ? "border-red-500"
                        : "border-[#e0e0e0]"
                    } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3629b6]`}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    id="role"
                    name="role"
                    type="text"
                    placeholder="Role"
                    as="select"
                    className={`w-full px-4 py-2 border ${
                      errors.password && touched.password
                        ? "border-red-500"
                        : "border-[#e0e0e0]"
                    } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3629b6]`}
                  >
                    <option value="user">User</option>
                    <option value="bankManager">Bank Manager</option>
                    <option value="superAdmin">Super Admin</option>
                  </Field>
                  <ErrorMessage
                    name="role"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#3629b6] text-white py-3 my-4 rounded-lg font-semibold text-sm hover:bg-[#251f8f] transition disabled:bg-[#e4e2ff]"
                >
                  Register
                </button>
                <input type="checkbox" id="check" className="m-4 border border-none outline-none "  />{" "}
                <label htmlFor="check">
                  By creating an account your aggree to our Term and Condtions
                </label>
              </Form>
            )}
          </Formik>
          <div className="mt-6 flex flex-col items-center">
            <div className="rounded-full flex items-center justify-center shadow-lg"></div>

            <p className="text-base font-semibold text-[#343434] mt-4 ">
              Have an account?{" "}
              <a
                href="/login"
                className="text-[#3629B7] text-lg font-semibold  ml-2"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
