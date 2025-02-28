import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState(null);
  const [error, setError] = useState("");
  const isFirstRender = useRef(true);

  // Log when the component first renders
  useEffect(() => {
    console.log(" App component mounted! Initial render detected.");
  }, []);

  // Track updates to component states
  useEffect(() => {
    if (isFirstRender.current) {
      console.log("Initial render detected!");
      isFirstRender.current = false;
    } else {
      console.log("Component updated! State changed.");
    }
  });

  // Allow only letters (no numbers/special characters)
  const validateInput = (name) => /^[A-Za-z]+$/.test(name);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();

    if (!trimmedFirstName || !trimmedLastName) {
      setError(" Please fill out both fields.");
      setFullName("");
      return;
    }

    if (!validateInput(trimmedFirstName) || !validateInput(trimmedLastName)) {
      setError("Names should only contain letters (no numbers or special characters).");
      setFullName("");
      return;
    }

    setFullName(` Full Name: ${trimmedFirstName} ${trimmedLastName}`);
    setError(""); // Clear the error message on successful input
  };

  return (
    <div className="container">
      <h2>Enter Your Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          aria-label="First Name"
          className={error ? "input error" : "input"}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          aria-label="Last Name"
          className={error ? "input error" : "input"}
          required
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {/* Show error message when invalid */}
      {error && <p className="error-message">{error}</p>}

      {/* Display Full Name only if valid */}
      {/* {fullName && <p className="full-name">{fullName ? fullName : "Not entered yet"}</p>} */}
      <p className="full-name">
        <strong>Full Name Display:</strong> {fullName ? fullName : "Not entered yet"}
      </p>
    </div>
  );
}

export default App;
