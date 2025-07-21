import React from "react";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <Counter />
      <Header />
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
