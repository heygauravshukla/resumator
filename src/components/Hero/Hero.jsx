import "./Hero.css"

const Hero = () => {
  return (
    <section aria-labelledby="Hero Section">
      <div className="text-box">
        <h1>Build Your Perfect Resume with Ease!</h1>
        <p>
          Your resume is your first impression on potential employers. Make it
          count! Our Resume Builder empowers you to create visually appealing
          resumes that grab attention and highlight your strengths.
        </p>
        <a className="button button--primary" href="#editor">
          Get Started
        </a>
      </div>
      <div className="image-box">
        <img src="./resume.jpg" alt="Resume Image" />
      </div>
    </section>
  )
}

export default Hero
