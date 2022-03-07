import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const styles = {
  app: {
    background: "#a284a9",
    height: "100vh",
  },
};
function App() {
    return (
      <div className="App" style={styles.app}>
        <Header />
        <Footer />
      </div>
    );
  }
  
  export default App;