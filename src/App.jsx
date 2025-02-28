import { useState } from "react";

export default function NameForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    if (!firstName.trim() || !lastName.trim()) {
      setError("Please fill out both fields");
      setFullName(""); // Ensure no name is displayed on error
    } else {
      setFullName(`${firstName} ${lastName}`);
      setError(""); // Clear error when fields are valid
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        width: "300px",
        margin: "20px auto",
      }}
    >
      <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>Enter Your Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={{
            padding: "8px",
            margin: "5px",
            width: "100%",
            borderRadius: "4px",
            border: error ? "1px solid red" : "1px solid #ccc",
          }}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={{
            padding: "8px",
            margin: "5px",
            width: "100%",
            borderRadius: "4px",
            border: error ? "1px solid red" : "1px solid #ccc",
          }}
          required
        />
        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px",
            borderRadius: "4px",
            cursor: "pointer",
            border: "none",
            marginTop: "10px",
          }}
        >
          Submit
        </button>
      </form>
      {error && (
        <p style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>
          {error}
        </p>
      )}
      {fullName && (
        <p style={{ fontSize: "18px", fontWeight: "bold", marginTop: "10px" }}>
        Full Name Display: {fullName ? fullName : "Not entered yet"}
        </p>
      )}
    </div>
  );
}
