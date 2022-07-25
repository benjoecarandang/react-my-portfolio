import Container from "../UI/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Shape from "./../images/half-horizontal.svg";

const Footer = (props) => {
  return (
    <footer>
      <div className="mx-4 md:mx-8 rounded-2xl bg-black1 bg-center bg-no-repeat h-full bg-cover shadow-lg" style={{ backgroundImage: `url(${Shape})` }}>
        <Container>
          <div className="flex flex-wrap items-center justify-between py-20">
            <h1 className="text-5xl mb-8 lg:mb-0 text-white w-full lg:w-7/12">
              Let's make something
              <br /> great together
            </h1>

            <div className="flex gap-4">
              <button className="bg-white px-7 py-3 rounded-full text-black font-bold shadow-sm hover:bg-neutral-100 transition-all">
                <a href="mailto:benjoe.carandang@gmail.com">Send me an email</a>
              </button>
            </div>
          </div>
        </Container>
      </div>

      <div className="py-10 flex flex-col items-center gap-5">
        <div className="text-neutral-400 text-3xl flex gap-5">
          <a
            className="hover:text-white transition-all"
            href="https://www.facebook.com/carandang.benjoe/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            className="hover:text-white transition-all"
            href="https://twitter.com/bnjcrndng"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            className="hover:text-white transition-all"
            href="https://github.com/benjoecarandang"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="hover:text-white transition-all"
            href="https://www.linkedin.com/in/benjoe-carandang-8021281a1/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="text-neutral-400">
          Build using React & Tailwind CSS © Benjoe Oates Carandang
        </div>
      </div>
    </footer>
  );
};

export default Footer;
