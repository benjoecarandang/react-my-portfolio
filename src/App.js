import { Fragment } from "react";
import Container from "./UI/Container";
import Header from "./components/Header";
import Hero from "./images/parallax-hero-bg.png";
import Hero1 from "./images/parallax-hero-bg-1.png";
import AboutImage from "./images/about-us-image.jpg";
import Virtuallio from "./images/virtuallio-timetracker.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Fragment>
      <Header/>
      <AboutMe/>
      

      <section className="bg-black">
        <div>
          <Container>
            <div class="grid grid-cols-2 w-full gap-10 relative z-30">
              <div class="flex flex-col justify-center pr-20">
                <h2 className="text-5xl mb-4 text-neutral-300">About Me</h2>

                <p className="font-light text-2xl mb-10  w-1/8 leading-9 text-neutral-400">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
              <div className="relative">
                <img src={AboutImage} className="rounded-3xl" />
                <div className="absolute w-full h-full -top-12 -left-12 rounded-3xl theme-gradient-2 -z-10"></div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="bg-black1 py-0">
        <div
          className="absolute left-0 bottom-0 top-0 right-0 bg-no-repeat bg-cover transform-3d"
          style={{ backgroundImage: `url(${Hero1})` }}
        ></div>
        <div className="top-divider-1"></div>
        <Container>
          <div className="my-36 relative z-10">
            <h2 className="text-5xl text-neutral-300 text-center mb-16">
              Check out some of my work
            </h2>

            <div className="flex flex-wrap -m-1 md:-m-2">
              <div className="flex flex-wrap w-1/4">
                <div className="w-full p-1">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full"
                    src={Virtuallio}
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/4">
                <div className="w-full p-1">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full"
                    src="https://s3.us-east-2.amazonaws.com/resources.diversifyoss.com/2022/07/igl8KRwK-p2.png"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/4">
                <div className="w-full p-1">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full"
                    src="https://s3.us-east-2.amazonaws.com/resources.diversifyoss.com/2022/07/DSSvBaJo-p3-1.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="bottom-divider-1"></div>
      </section>

      <section className="bg-black">
        <Container>
          <div className="mb-40">
            <h2 className="text-5xl text-neutral-300 text-center mb-16">
              Skill set
            </h2>
            <p className="font-light text-2xl w-1/8 leading-9 text-neutral-400">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining
              essentially unchanged.
            </p>
          </div>
        </Container>
      </section>

      <footer className="relative theme-gradient-3">
        <div className="top-divider"></div>
        <div
          className="absolute left-0 bottom-0 top-0 right-0 bg-no-repeat bg-cover bg-bottom"
          style={{ backgroundImage: `url(${Hero1})` }}
        ></div>
        <div className="relative z-10 overflow-hidden">
          <Container>
            <div className="flex flex-col items-center justify-center pb-36">
              <p className="text-5xl font-light text-white mb-14">
                Do you want to work with me?
              </p>
              <button class="theme-gradient-2 px-7 py-4 rounded-lg text-white font-bold uppercase">
                Send me an email
              </button>
            </div>

            <hr />

            <div className="py-10 flex flex-col items-center gap-5">
              <div className="text-neutral-300 text-3xl flex gap-5">
              <a href="https://www.facebook.com/carandang.benjoe/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://twitter.com/bnjcrndng" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://github.com/benjoecarandang" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://www.linkedin.com/in/benjoe-carandang-8021281a1/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>
              <div className="text-neutral-300">Build using React & Tailwind © Benjoe Oates Carandang</div>
            </div>
          </Container>
        </div>
      </footer>
    </Fragment>
  );
}

export default App;

// #F38181
// #FCE38A
// #EAFFD0
// #95E1D3
