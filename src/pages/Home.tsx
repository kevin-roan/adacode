import hero_img from "../assets/hero-img.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <div className="hero_contianer">
      <section className="home_section_left">
        <h1>
         ADACODE <span>
<Typewriter
  options={{
    strings: ['EMPOWERING TOMORROW', 'IEEE PROJECTS','INDUSTRIAL EXPERTS','LIFE TIME PLACEMENT ASSISTANCE','EDUCATION LOAN','SCHOLARSHIP','COURSE CERTIFICATE'],
    autoStart: true,
    loop: true,
changeDeleteSpeed:1,
  }}
/>
 
</span>
        </h1>

        <p>
At ADACODE, we are not just a software company; we are passionate educators dedicated to shaping the future of tech. Unlock your potential with our cutting-edge software education solutions and embark on a journey of knowledge and skill mastery.
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
