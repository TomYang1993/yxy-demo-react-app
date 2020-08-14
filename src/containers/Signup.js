

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import LoaderButton from "../sharedComponents/LoaderButton";
import { useAppContext } from "../libs/userContext";
import { useFormFields } from "../libs/useFormFields";
import "./Signup.css";

export default function Signup() {
    const [fields, handleFieldChange] = useFormFields({
      email: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
    });
    const history = useHistory();
    const [newUser, setNewUser] = useState(null);
    const { userHasAuthenticated } = useAppContext();
    const [isLoading, setIsLoading] = useState(false);
  
    function validateForm() {
      return (
        fields.email.length > 0 &&
        fields.password.length > 0 &&
        fields.password === fields.confirmPassword
      );
    }
  
    function validateConfirmationForm() {
      return fields.confirmationCode.length > 0;
    }
  
    async function handleSubmit(event) {
      event.preventDefault();
  
      setIsLoading(true);
  
      setNewUser("test");
  
      setIsLoading(false);
    }
  
    async function handleConfirmationSubmit(event) {
      event.preventDefault();
  
      setIsLoading(true);
    }
  
    function renderConfirmationForm() {
      return (
        <form onSubmit={handleConfirmationSubmit}>
          <Form.Group controlId="confirmationCode" bsSize="large">
            <Form.Label>Confirmation Code</Form.Label>
            <Form.Control
              autoFocus
              type="tel"
              onChange={handleFieldChange}
              value={fields.confirmationCode}
            />
            <Form.Text>Please check your email for the code.</Form.Text>
          </Form.Group>
          <LoaderButton
            block
            type="submit"
            bsSize="large"
            isLoading={isLoading}
            disabled={!validateConfirmationForm()}
          >
            Verify
          </LoaderButton>
        </form>
      );
    }
  
    function renderForm() {
      return (
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
              type="password"
              value={fields.password}
              onChange={handleFieldChange}
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword" bsSize="large">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              onChange={handleFieldChange}
              value={fields.confirmPassword}
            />
          </Form.Group>
          <LoaderButton
            block
            type="submit"
            bsSize="large"
            isLoading={isLoading}
            disabled={!validateForm()}
          >
            Signup
          </LoaderButton>
        </form>
      );
    }
  
    return (
      <div className="Signup">
        {newUser === null ? renderForm() : renderConfirmationForm()}
      </div>
    );
  }