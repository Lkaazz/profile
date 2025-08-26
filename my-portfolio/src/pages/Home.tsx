import React from "react";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Lucas Carvalho</h1>
        <p className="subtitle">
          Junior Developer at Accenture • Open Source Contributor
        </p>
        <p className="tagline">
          Building minimalistic, modern, and functional software.
        </p>
        <a href="#projects" className="cta">
          View Projects
        </a>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="grid">
          <div className="card">
            <h3>Collision Detection System</h3>
            <p>
              Computer vision-based safety system for autonomous vehicles.
            </p>
            <a
              href="https://github.com/Lkaazz"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="card">
            <h3>Organic Basket Coop</h3>
            <p>
              Web platform for local farmers to manage organic produce orders.
            </p>
            <a
              href="https://github.com/Lkaazz"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="card">
            <h3>Portfolio</h3>
            <p>
              A minimalistic portfolio showcasing work and open-source
              contributions.
            </p>
            <a
              href="https://github.com/Lkaazz"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
