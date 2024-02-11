import React, { useState } from "react";
import { Form as FormR, Input, Label } from "reactstrap";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Full Name is required";
    }

    if (!formData.email) {
      newErrors.email = "E-mail Address is required";
    }

    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid E-mail Address";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    }
    else {
      // form is valid
      console.log("Form data:", formData);
      
      // reset fields
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // clear errors
      setErrors({});
    }
  };

  return (
    <>
      <FormR onSubmit={handleSubmit}>
        <div className="mb-3">
          <Label className="form-label">
            E-mail address
          </Label>
          <Input
            type="text"
            id="inputEmail"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="form-text text-danger">
              {errors.email}
            </div>
          )}
        </div>
        <div className="mb-3">
          <Label className="form-label">
            Full Name
          </Label>
          <Input
            type="text"
            id="inputName"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <div className="form-text text-danger">
              {errors.name}
            </div>
          )}
        </div>
        <div className="mb-3">
          <Label className="form-label">
            Message
          </Label>
          <textarea
            id="inputMessage"
            name="message"
            className="form-control"
            value={formData.message}
            onChange={handleChange}
            rows={5}
          ></textarea>
          {errors.message && (
            <div className="form-text text-danger">
              {errors.message}
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </FormR>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
      <p>Brief description of the page goes here.</p>
      <br />
      <div className="col-md-6">
        <Form />
      </div>
    </>
  );
};

export default Contact;
