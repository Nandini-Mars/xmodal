import React, { useState } from "react";

function FormModal({ onClose }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, phone, dob } = formData;

    if (!username || !email || !phone || !dob) {
      alert("All fields are required.");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const selectedDate = new Date(dob);
    const today = new Date();
    if (selectedDate > today) {
      alert("Invalid date of birth, Date of birth cannot be in the future.");
      return;
    }

    alert("Form submitted successfully!");

    setFormData({
      username: "",
      email: "",
      phone: "",
      dob: "",
    });

    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <h2>Fill Details</h2>
          <div>
            <label htmlFor="username">Username:</label>
            <br />
            <input
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <br />
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <br />
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth:</label>
            <br />
            <input
              id="dob"
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="button-group">
            <button
              className="submit-button"
              style={{
                backgroundColor: "rgb(60, 120, 232)",
                color: "white",
                textAlign: "center",
              }}
              type="submit"
            >
              Submit
            </button>
            {/* Optional: Re-add Close button */}
            {/* <button
              style={{ backgroundColor: "gray", color: "white", marginLeft: '10px' }}
              type="button"
              onClick={onClose}
            >
              Close
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormModal;
