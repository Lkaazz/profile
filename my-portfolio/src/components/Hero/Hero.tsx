// src/components/Hero/Hero.tsx
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <p className="welcome">Bem vindo(a)///</p>
      <h1>
        Eu sou <span className="name">Lucas Carvalho</span>
      </h1>
      <p className="tagline">
        Desenvolvedor <span className="highlight">Full-stack</span> focado no desenvolvimento web 🖥️
      </p>
      <div className="buttons">
        <a href="#about" className="btn primary">Sobre mim</a>
        <a href="#projects" className="btn">Projetos</a>
      </div>
    </section>
  );
};

export default Hero;
