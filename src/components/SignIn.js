import React, {useContext} from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useHistory } from "react-router";
import Header from "./Header";
import ContextShopProvider from "../stateManagment/Context";
const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateEmail(value) {
    if (value === "") return "Email is Required";

    const isValidEmail = emailRegex.test(value);
    if (!isValidEmail) return "Invalid Email";

    return undefined;
}

function validatePassword(value) {
    if (value === "") return "Password is Required";
    if (value.length < 8) return "Too short";
    return undefined;
}

const SignIn = () => {
    const hisotry = useHistory();
    useContext(ContextShopProvider)

    return (
        <div>
            <Header/>
        <Formik
            initialValues={{ password: "", email: "" }}
            onSubmit={values => {
                hisotry.push(`/one/${values.email}`);
            }}
        >
            {formikProps => (
                <Form>
                    <label className='labelEmail' htmlFor="email">Email</label>
                    <div className='Email'>
                        <Field
                            name="email"
                            validate={validateEmail}
                            type="email"
                            placeholder="email"
                        />
                        <ErrorMessage name="email" />
                    </div>
                    <label className='
                        LabelPassword' htmlFor="email">Password</label>
                    <div className='Password'>
                        <Field
                            name="password"
                            validate={validatePassword}
                            type="text"
                            placeholder="password"
                        />
                        <ErrorMessage name="password" />
                    </div>
                    <div className='labelButton'>
                    <button className='Button'  type="submit">Submit</button>
                    </div>
                </Form>
            )}
        </Formik>
            <div className='Footers'>

            </div>
        </div>
    );
};

export default SignIn;