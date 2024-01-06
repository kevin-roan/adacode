import hero_img from "../assets/hero-img.png";
import { FaArrowRightLong } from "react-icons/fa6";

function Home() {
  return (
    <div className="hero_contianer">
      <section className="home_section_left">
        <h1>
          LEARN NEW SKILLS WITH TOP <span>EDUCATORS</span>
        </h1>
        <p>
          We are experienced in educational platform and skilled stratergies for
          the success of our online learing
        </p>
        <button className="button_light">
          Find The Course
          <FaArrowRightLong />
        </button>
      </section>
      <section className="home_section_right">
        <img src={hero_img} alt="Hero image" />
      </section>
    </div>
  );
}

export default Home;
