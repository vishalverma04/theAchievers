import React, { useState, useEffect } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Signup() {
  const hostels = ["H-1", "H-2", "H-3", "H-4", "H-5", "H-6", "H-7", "H-8", "H-9", "H-10", "H-11", "GH-KC", "GH-CB", "GH-BB"];


  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    rollNumber: "",
    roomNumber: "",
    mobileNumber: "",
    hostelNumber: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    console.log(formValues)
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/v1/users/register",
        {
          fullName:formValues.fullName,
          email:formValues.email,
          rollNumber:formValues.rollNumber,
          hostelNumber:formValues.hostelNumber,
          mobileNumber:formValues.mobileNumber,
          roomNumber:formValues.roomNumber,
          password:formValues.password
        },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      
      navigate('/login');
      setIsSubmit(true)
  }catch(error){
  console.log(error)
  }
}
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

    if (!values.roomNumber) {
      errors.roomNumber = "Room Number is required!";
    }

    if (!values.hostelNumber) {
      errors.hostelNumber = "Hostel Number is required!";
    }

    if (!values.rollNumber) {
      errors.rollNumber = "Roll Number is required!";
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
        <div className="left-right-signup-container">
          <div className="ui form-signup">
            <div className="field-signup">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formValues.fullName}
                onChange={handleChange}
              />
              <p>{formErrors.fullName}</p>
            </div>

            <div className="field-signup">
              <input
                type="text"
                name="rollNumber"
                placeholder="Roll Number"
                value={formValues.rollNumber}
                onChange={handleChange}
              />
              <p>{formErrors.rollNumber}</p>
            </div>
            <div className="field-signup">
              <select name="hostelNumber"value={formValues.hostelNumber}
                onChange={handleChange}>
                <option value="" disabled>Select Hostel Number</option>
                {hostels.map((hostel, index) => (
                  <option key={index} value={hostel}>{hostel}</option>
                ))}
              </select>
              <p>{formErrors.hostelNumber}</p>
            </div>
            <div className="field-signup">
              <input
                type="text"
                name="roomNumber"
                placeholder="Room Number"
                value={formValues.roomNumber}
                onChange={handleChange}
              />
              <p>{formErrors.roomNumber}</p>
            </div>
          
            <div className="field-signup">
              {/* <label>Mobile Number</label> */}
              <input
                type="text"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formValues.mobileNumber}
                onChange={handleChange}
              />
              <p>{formErrors.mobileNumber}</p>
            </div>
            
          </div>
          <div className="ui form-signup">
            <div className="field-signup">
              {/* <label>Email</label> */}
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
              <p>{formErrors.email}</p>
            </div>
            <div className="field-signup">
              {/* <label>Password</label> */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
              <p>{formErrors.password}</p>
            </div>
            <div className="field-signup">
              {/* <label>Confirm Password</label> */}
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formValues.confirmPassword}
                onChange={handleChange}
              />
              <p>{formErrors.confirmPassword}</p>
            </div>
            <button className="fluid ui button-signup blue "><Link to="/login">LOG IN</Link></button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
