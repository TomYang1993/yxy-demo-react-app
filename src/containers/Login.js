import React, { useState } from "react";
import { Button } from "react-bootstrap";
import LoaderButton from "../sharedComponents/LoaderButton";
import Form from 'react-bootstrap/Form'
import "./Login.css";
import { Auth } from "aws-amplify";
import { useAppContext } from "../libs/userContext";
import { useHistory } from "react-router-dom";
import { useFormFields } from "../libs/useFormFields";


export default function Login() {
    const { userHasAuthenticated } = useAppContext();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: ""
      });


    function validateForm() {
        return fields.email.length > 0 && fields.password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        try {
            await Auth.signIn(fields.email, fields.password);
            userHasAuthenticated(true);
            history.push("/");
        } catch (e) {
            alert(e.message);
            setIsLoading(false);
        }
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <Form.Group controlId="email" bsSize="large">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={fields.email}
                        onChange={handleFieldChange}
                    />
                </Form.Group>
                <Form.Group controlId="password" bsSize="large">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={fields.password}
                        onChange={handleFieldChange}
                        type="password"
                    />
                </Form.Group>
                <LoaderButton
                    block
                    type="submit"
                    bsSize="large"
                    isLoading={isLoading}
                    disabled={!validateForm()}
                >
                    Login
                </LoaderButton>
            </form>
        </div>
    );
}