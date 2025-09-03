import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import BlogPost from "./components/BlogPost";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Home from "./components/Home";
import { useState } from "react";
import ProtectedRoute from "./components/ProjectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <nav className="p-4 bg-gray-200 flex space-x-4 font-bold text-cyan-500">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog/1">Blog Post #1</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        {/* Basic Route */}
        <Route path="/" element={<Home />} />

        {/* Protected Route for Profile */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic Route for blog posts */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Login Route */}
        <Route
          path="/login"
          element={<Login onLogin={() => setIsAuthenticated(true)} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
