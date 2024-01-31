import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";

const Register = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    userName: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const [errors, seterrors] = useState({
    name: null,
    userName: null,
    email: null,
    mobile: null,
    checkbox: null,
  });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let isError = false;
    if (formValues.name.trim().length === 0) {
      seterrors((prev) => {
        isError = true;
        return { ...prev, name: "Name is required" };
      });
    } else {
      seterrors((prev) => {
        return { ...prev, name: null };
      });
    }
    if (formValues.userName.trim().length === 0) {
      seterrors((prev) => {
        isError = true;
        return { ...prev, userName: "Username is required" };
      });
    } else {
      seterrors((prev) => {
        return { ...prev, userName: null };
      });
    }
    if (formValues.email.trim().length === 0) {
      seterrors((prev) => {
        isError = true;
        return { ...prev, email: "Email is required" };
      });
    } else {
      seterrors((prev) => {
        return { ...prev, email: null };
      });
    }
    if (formValues.mobile.trim().length === 0) {
      seterrors((prev) => {
        isError = true;
        return { ...prev, mobile: "Mobile number is required" };
      });
    } else {
      seterrors((prev) => {
        return { ...prev, mobile: null };
      });
    }
    if (formValues.checkbox === false) {
      seterrors((prev) => {
        isError = true;
        return { ...prev, checkbox: "Mark the checkbox" };
      });
    } else {
      seterrors((prev) => {
        return { ...prev, checkbox: null };
      });
    }
    if (isError) {
      return;
    } else {
      window.localStorage.setItem("useInfo", JSON.stringify(formValues));
      navigate("./info");
    }
  };

  return (
    <div className="register">
      <form action="">
        <input
          type="text"
          value={formValues.name}
          onChange={(e) =>
            setFormValues((prev) => {
              return { ...prev, name: e.target.value };
            })
          }
          placeholder="Name"
        />
        <small>{errors.name}</small>
        <input
          type="text"
          value={formValues.userName}
          onChange={(e) =>
            setFormValues((prev) => {
              return { ...prev, userName: e.target.value };
            })
          }
          placeholder="Usename"
        />
        <small>{errors.userName}</small>
        <input
          type="email"
          value={formValues.email}
          onChange={(e) =>
            setFormValues((prev) => {
              return { ...prev, email: e.target.value };
            })
          }
          placeholder="Email"
        />
        <small>{errors.email}</small>
        <input
          type="number"
          value={formValues.mobile}
          onChange={(e) =>
            setFormValues((prev) => {
              return { ...prev, mobile: e.target.value };
            })
          }
          placeholder="Mobile"
        />
        <small>{errors.mobile}</small>
        <div>
          <input
            type="checkbox"
            value={formValues.checkbox}
            onChange={(e) =>
              setFormValues((prev) => {
                return { ...prev, checkbox: e.target.checked };
              })
            }
            name="checkbox"
            id="checkbox"
          />
          <label htmlFor="checkbox">
            Share my registration data with Superapp
          </label>
          <div>
            <small>{errors.checkbox}</small>
          </div>
        </div>
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
