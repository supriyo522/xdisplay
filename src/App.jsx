import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

 
  useEffect(() => {
    console.log("App component mounted!");
  }, []); // Empty dependency array means it runs only once on mount

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();

    if (!trimmedFirstName || !trimmedLastName) {
      setError("Please fill out both fields.");
      setFullName(""); // Ensure no name is displayed on error
    } else {
      setFullName(`${trimmedFirstName} ${trimmedLastName}`);
      setError(""); // Clear error when fields are valid
    }
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
      {fullName && <p className="full-name">Full Name: {fullName}</p>}
    </div>
  );
}

export default App;
