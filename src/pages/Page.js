import "./Page.scss";
import Lab1 from "../Assets/MaleyLabChristmas.jpeg";
import SODA1 from "../Assets/IMG_2960.jpg";
import Tristar from "../Assets/Tristar3020.jpeg";
import Shapers from "../Assets/Apr16NorthMountain4.jpeg";
import DNASU from "../Assets/DNASUlab.jpg";
import Little from "../Assets/AdamAKLFrat.png";
import StarW from "../Assets/FalconMillennium.jpeg";
import Comb from "../Assets/CRs.jpeg";
import Curiox1 from "../Assets/20230628_172041.jpg"
import Curiox2 from "../Assets/IMG_1482.jpeg"
import Footer from './../components/Footer';

const Page = () => {
  return (
    <div>
      <div className="PageWrapper">
        <div className="HeroContent">
          <h1>Adam C Smith</h1>
          <div>
            <p>
              I'm not a mercenary but a
              missionary, and I'm here to add to leaving the world better than we
              found it by making sci-fi research easier for customers.
            </p>
            <p>
              I am also fascinated by the constant improvement and shift from small to big, of organizations, teams, engineering, and am even more excited to execute on such process improvements long term for the teams I work for. These days I've found it very quick to surpass the business knowledge of team members and some higher ups, and that allows me to reach the recognition necessary to propose process improvements in the areas I'm assigned and interact with.
            </p>
            <p>
              I want to empower the growth of people who show potential to be
              great contributors
              to customers through the company's services. Long term investing.
              That's a Microsoft value, "Empower Others". We're here to help others as much as
              we can and share the joy of life with as many people as we can,
              not just the ones close to us. So therefore our services must be
              grand while still imploring respect from the people we serve.
              A lot of this is inspired by role models and role model shows.
            </p>
            <p>
             
            </p>
            <p>Some of these shows are:</p>
            <li>Star Trek Discovery & Picard</li>
            <li>Star Wars + Mandalorian</li>
            <li>Interstellar + Christopher Nolan films</li>
            <li>Contagion</li>
            <li>Grey's Anatomy</li>
            <li>Prometheus + Alien</li>
            <li>Big Bang Theory</li>
            <li>Drake & Josh + Nickelodeon</li>
            <li>Back to the Future</li>
            <li>The Expanse</li>
            <li>The Martian</li>
            <li>Big Hero 6</li>
            <li>Gundam Seed/Destiny</li>
            <li>The Matrix</li>
          </div>
          <div className="centerDivider">
            <h3>
             References and connections to various companies and organizations always available for request.
            </h3>
          </div>
        </div>
      </div>
      <div className="PageWrapper2">
        <ul>
          <div className="media">
            <div className="overlay"></div>
            <img src={Curiox2} alt="" />
            <div className="image-details">
              <p>Introducing our installation, Curiox</p>
            </div>
          </div>
          
          <div className="media">
            <div className="overlay"></div>
            <img src={SODA1} alt="" />
            <div className="image-details">
              <p>ASU Software club crew</p>
            </div>
          </div>
          <div className="media">
            <div className="overlay"></div>
            <img src={Shapers} alt="" />
            <div className="image-details">
              <p>Volunteering as part of the Phoenix UN Shapers</p>
            </div>
          </div>
          <div className="media">
            <div className="overlay"></div>
            <img src={Lab1} alt="" />
            <div className="image-details">
              <p>With Maley Lab & Shrinath my left 2018</p>
            </div>
          </div>
          {/* <div className="media">
            <div className="overlay"></div>
            <img src={Little} alt="" />
            <div className="image-details">
              <p>Great guys but they weren't in biotech, ASU pitchforks </p>
            </div>
          </div> */}
        </ul>
        <ul>
        <div className="media">
            <div className="overlay"></div>
            <img src={Curiox1} alt="" />
            <div className="image-details">
              <p>Installing and testing everything in this anonymous lab</p>
            </div>
          </div>
          <div className="media">
            <div className="overlay"></div>
            <img src={Tristar} alt="" />
            <div className="image-details">
              <p>Cleaning out filter area of Tristar tube inserts</p>
            </div>
          </div>
          <div className="media">
            <div className="overlay"></div>
            <img src={Comb} alt="" />
            <div className="image-details">
              <p>Isolating PE2400 CHN issues by inspecting reagent tubes in ASU Goldwater Chemical Core Facility</p>
            </div>
          </div>
          <div className="media">
            <div className="overlay"></div>
            <img src={DNASU} alt="" />
            <div className="image-details">
              <p>Running Biomek FXp with DNASU</p>
            </div>
          </div>
          <div className="media">
            <div className="overlay"></div>
            <img src={StarW} alt="" />
            <div className="image-details">
              <p>Just classic fun lab naming</p>
            </div>
          </div>
        </ul>
        {/* <img src={SODA1} alt='' />
          <img src={Lab1} alt=''/> */}
      </div>
          <Footer />
    </div>
  );
};

export default Page;
