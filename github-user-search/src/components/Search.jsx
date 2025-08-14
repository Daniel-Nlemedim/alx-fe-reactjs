import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!username.trim() && !location.trim() && !minRepos.trim()) {
      setError("Please enter at least one search criteria.");
      return;
    }

    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const results = await fetchUserData({ username, location, minRepos });
      setUsers(results.items || []);
    } catch {
      setError("Looks like we can’t find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg mt-8">
      <div>
        <h1 className="text-2xl font-bold mb-4 flex justify-center">
          GitHub User Search
        </h1>
      </div>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded p-2 focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded p-2 focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border rounded p-2 focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="md:col-span-3 bg-blue-600 text-white rounded p-2 hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && (
        <div className="flex justify-center items-center mb-4">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {error && <p className="text-red-600">{error}</p>}

      {/* Results */}
      {users.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="p-4 border rounded flex items-center gap-4 hover:shadow-md transition"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold">{user.login}</h2>
                {user.location && (
                  <p className="text-sm text-gray-600">📍 {user.location}</p>
                )}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 text-sm hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
