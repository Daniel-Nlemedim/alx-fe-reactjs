import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const InputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
    if (!username.trim()) {
      setError("Please enter a GitHub username before searching");
      return;
    }
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          style={InputStyle}
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Search GitHub users..."
        />
        <button type="submit">Submit</button>
      </form>

      {loading && <div className="spinner"></div>}

      {error && <p style={{ color: "red" }}> {error} </p>}

      {userData && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            style={{ width: "100px", borderRadius: "50%" }}
          />
          <h2>{userData.name || userData.login}</h2>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View Github Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
