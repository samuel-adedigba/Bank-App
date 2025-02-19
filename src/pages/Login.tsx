import React, { useState } from "react";
import { Formik, Form, Field,ErrorMessage } from 'formik'
import { useDispatch } from "react-redux";
import { LoginSlice } from "../slice/authSlice";
import * as Yup from 'yup'
import { useNavigate } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";
import redirectConfig from "../routes/redirectConfig";


 interface User {
        email: string,
        password: string
    }

const Login = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();   
    const [loginError, setLoginError] = useState<string>("");

    const handleLogin = async (values: User): Promise<void> => {
      setLoginError("");
      try {
        const result = await dispatch(LoginSlice(values)).unwrap();
            if (result){
                //localStorage.setItem('banktoken', JSON.stringify({email: values.email, role: result.role,  token: result.token}) );
                console.log('login succesful', result);
                console.log('Logged in as a', result.role);
                const redirect = redirectConfig[result.role] || "/user";
                navigate(redirect);
            }  
            else{
                setLoginError('Invalid email or password');
            }    
           
        } catch (error) {
        console.error('Invalid email or password. Login failed:', error);
        
      }
    }
    const validationSchema = Yup.object({
        email: Yup.string().email( 'Invalid email address').required('Required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required')
    });

    return(
              <div className="flex justify-center items-center min-h-screen bg-slate-100">
        <div className="w-full  max-w-md  p-10 rounded-t-3xl bg-white shadow-lg md:max-w-lg relative">
        <div className="text-3xl mx-6 absolute top-10 left-5 text-center flex items-center gap-4">
            <GoChevronLeft />
            <span className="text-xl font-bold text-[#3629b6] "> Sign in</span>
          </div>
          <div className="bg-white" >
          <div className="text-left mt-14">
            <h1 className="text-[#3629b6] text-3xl font-bold  ">Welcome Back</h1>
            <p className="text-lg text-[#8e8e8e] mt-2">Hello there, sign in to continue</p>
             <div className="w-full mx-auto rounded-full flex items-center justify-center p-6 ">
              <img
                src="src/assets/sign-in.png"
                alt="lock icon"
                className=""
              />
            </div>

          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ errors, touched }) => (
              <Form className="mt-6">
                <div className="mb-4">
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className={`w-full px-4 py-3 border ${
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
                <div className="">
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className={`w-full px-4 py-3 border ${
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
                <div className="text-right text-base  my-6">
                  <a href="#" className="text-[rgb(225,177,177)] hover:text-[#3629b6]">
                    Forgot your password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#3629b6] text-white py-3 rounded-lg font-semibold text-sm hover:bg-[#251f8f] transition disabled:bg-[#e4e2ff]"
                >
                  Sign in
                </button>
              </Form>
            )}
          </Formik>
          <div className="mt-6 flex flex-col items-center">
            <div className="rounded-full flex items-center justify-center shadow-lg">
              <img
                src="src/assets/fingerprint.png"
                alt="fingerprint icon"
                className="w-12 h-12"
              />
            </div>
            <p className="text-base font-semibold text-[#343434] mt-4 ">
              Don’t have an account?{" "}
              <a href="/register" className="text-[#3629B7] text-lg font-semibold  ml-2">
                Sign Up
              </a>
            </p>
          </div>
          </div>
        </div>
      </div>
    )
}

export default Login