import { Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Hero.css";

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
        <Button
          href="#editor"
          variant="contained"
          size="large"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Get Started
        </Button>
      </div>
      <div className="image-box">
        <img src="./resume.jpg" alt="Resume Image" />
      </div>
    </section>
  );
};

export default Hero;
