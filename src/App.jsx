import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const isFirstRender = useRef(true);

  // Logs when the component mounts (Initial render)
  useEffect(() => {
    console.log("App component mounted!");
  }, []);

  // Track updates to states
  useEffect(() => {
    if (isFirstRender.current) {
      console.log("Initial render detected!");
      isFirstRender.current = false;
    } else {
      console.log("Component updated!");
    }
  });

  const validateInput = (name) => /^[A-Za-z]+$/.test(name); // Allow only letters

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();

    if (!trimmedFirstName || !trimmedLastName) {
      setError("Please fill out both fields.");
      setFullName(""); // Clear full name display on error
      return;
    }

    if (!validateInput(trimmedFirstName) || !validateInput(trimmedLastName)) {
      setError("Names should only contain letters (no numbers or special characters).");
      setFullName(""); // Clear full name display on invalid input
      return;
    }

    // If all validations pass, update full name and clear error
    setFullName(`${trimmedFirstName} ${trimmedLastName}`);
    setError("");
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
      {error && <p className="error-message">{error}</p>}

      {/* Full Name Display */}
      <p className="full-name">
        <strong>Full Name Display:</strong> {fullName ? fullName : "Not entered yet"}
      </p>
    </div>
  );
}

export default App;
