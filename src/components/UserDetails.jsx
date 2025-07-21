import React, { useState } from "react";
import FormModal from "./FormModal";
import "./FormModal.css"; // Add this for styles

function UserDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenForm = () => {
    setIsModalOpen(true);
  };

  const handleCloseForm = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="user-details-container">
      <h1>User Details Modal</h1>
      <button
        style={{ backgroundColor: "rgb(60, 120, 232)", color: "white" }}
        onClick={handleOpenForm}
      >
        Open Form
      </button>
      {isModalOpen && <FormModal onClose={handleCloseForm} />}
    </div>
  );
}

export default UserDetails;
