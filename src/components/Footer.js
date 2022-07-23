import HeroBG1 from "./../images/parallax-hero-bg-1.png";
import Container from "../UI/Container";
import SectionRibbonTitle from "../UI/SectionRibbonTitle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  return (
    <div>
      <footer>
        {/* <div className="top-divider"></div>
        <div
          className="absolute left-0 bottom-0 top-0 right-0 bg-no-repeat bg-cover bg-bottom"
          style={{ backgroundImage: `url(${HeroBG1})` }}
        ></div> */}
        <div className="relative z-10 overflow-hidden">
          {/* <Container>
            <div className="flex flex-col items-center justify-center pb-36">
              <p className="text-5xl font-light text-white mb-14">
                Do you want to work with me?
              </p>
              <a href="mailto:benjoe.carandang@gmail.com" class="theme-gradient-2 px-7 py-4 rounded-lg text-white font-bold uppercase">
                Send me an email
              </a>
            </div>

            
            
          </Container> */}
          <div className="mx-16 rounded-2xl bg-black1">
            <Container>
              <div className="flex items-center justify-between py-20">
                <h1 className="text-5xl mb-2 text-white w-7/12">
                  Let's make something<br/> great together
                </h1>

                <div className="flex gap-4">
                  <button className="bg-white px-7 py-4 rounded-full text-black font-bold shadow-sm">
                    <a
                      href="mailto:benjoe.carandang@gmail.com"
                    >
                      Send me an email
                    </a>
                  </button>
                </div>
              </div>
            </Container>
          </div>

          <div className="py-10 flex flex-col items-center gap-5">
            <div className="text-neutral-300 text-3xl flex gap-5">
              <a
                href="https://www.facebook.com/carandang.benjoe/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://twitter.com/bnjcrndng"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://github.com/benjoecarandang"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/benjoe-carandang-8021281a1/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div className="text-neutral-300">
              Build using React & Tailwind © Benjoe Oates Carandang
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
