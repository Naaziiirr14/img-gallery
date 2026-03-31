
import React from "react";
import Navbar from "./components/navbar";
import Gallery from "./components/gallery";
import About from "./components/about";
import Footer from "./components/footer";
import "./style.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <main className="main">
          <section id="gallery" className="gallery-section">
            <h2 className="gallery-heading">Photo gallery</h2>
            <Gallery />
          </section>
          <About />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
