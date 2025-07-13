import React from "react";
import "./App.css";
import WelcomeMessage from "./components/welcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <WelcomeMessage />
      <Header />
      <UserProfile name="John Doe" age={30} bio="Software Engineer" />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
