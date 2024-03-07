import React, { useState, useEffect } from "react";
import "./Signup.css";

function Signup() {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
    hostelNumber: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      // You can add your signup logic here
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.fullName) {
      errors.fullName = "Full Name is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!values.mobileNumber) {
      errors.mobileNumber = "Mobile Number is required";
    }

    if (!values.hostelNumber) {
      errors.hostelNumber = "Hostel Number is required";
    }

    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1 className="heading-signup"> SIGNUP</h1>
        {/* <div className="ui divider"></div> */}
        <div className="ui form">
          <div className="field">
            {/* <label>Username</label> */}
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formValues.fullName}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.fullName}</p>

          <div className="field">
            {/* <label>Email</label> */}
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>

          <div className="field">
            {/* <label>Mobile Number</label> */}
            <input
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formValues.mobileNumber}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.mobileNumber}</p>

          <div className="field">
            {/* <label>Hostel Number</label> */}
            <input
              type="text"
              name="hostelNumber"
              placeholder="Hostel Number"
              value={formValues.hostelNumber}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.hostelNumber}</p>

          <div className="field">
            {/* <label>Password</label> */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>

          <div className="field">
            {/* <label>Confirm Password</label> */}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.confirmPassword}</p>

          <button className="fluid ui button-signup blue ">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
