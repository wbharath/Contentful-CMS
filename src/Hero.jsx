import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>React Projects</h1>
          <p>
            The React Projects - Base App is a centralized showcase of all my
            React-based projects, designed to highlight my skills, creativity,
            and expertise in building dynamic and interactive web applications.
            This app serves as a portfolio, featuring a collection of projects
            that demonstrate my ability to work with React's core concepts, such
            as components, state management, hooks, and routing. Each project is
            presented with a brief description, a live demo link, and the source
            code, allowing visitors to explore my work in detail. Whether it's a
            simple to-do app, a complex data-driven dashboard, or a visually
            stunning UI, this app provides a comprehensive overview of my
            journey and growth as a React developer. It's a one-stop destination
            to see what I've built and what I'm capable of creating with React!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the brower" />
        </div>
      </div>
    </section>
  )
}

export default Hero
