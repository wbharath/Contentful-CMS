
import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero dolorem asperiores, officia laudantium praesentium itaque?</p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="woman and the brower"/>
            </div>
        </div>
        
    </section>
  )
}

export default Hero
