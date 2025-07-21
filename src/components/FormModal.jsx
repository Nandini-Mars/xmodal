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

    // ✅ Reset form
    setFormData({
      username: "",
      email: "",
      phone: "",
      dob: "",
    });

    // ✅ Close modal
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <h2>Fill Details</h2>
          <div>
            <label>Username:</label>
            <br />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email Address:</label>
            <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <br />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Date of Birth:</label>
            <br />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="button-group">
            <button
              style={{
                backgroundColor: "rgb(60, 120, 232)",
                color: "white",
                textAlign: "center",
              }}
              type="submit"
            >
              Submit
            </button>
            {/*
              <button
                style={{ backgroundColor: "rgb(60, 120, 232)", color: "white" }}
                type="button"
                onClick={onClose}
              >
                Close
              </button>*/}
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormModal;
