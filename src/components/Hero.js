import {SectionRibbonTitle, Container} from "../UI";
import HeroPic from "./../images/about-us-image.jpg";
import Shape from "./../images/BotShape.svg";
import CV from "./../CV.pdf"

const Hero = () => {
  function scrollTo() {
    document.getElementById('about-me').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  return (
    <section
      className="mx-4 md:mx-8 lg:mx-16 rounded-2xl bg-black1 bg-right bg-no-repeat h-full bg-cover shadow-lg"
      style={{ backgroundImage: `url(${Shape})` }}
    >
      <div>
        <Container>
          <div className="flex flex-wrap">
            <div className="flex flex-col text-center md:text-left items-center md:items-start justify-center md:pr-2 py-14 w-full basis-full md:basis-7/12 ">
              <SectionRibbonTitle>Hey There 👋 I am</SectionRibbonTitle>
              <h1 className="text-5xl mb-2 text-white font-semibold">Benjoe —</h1>
              <p className="text-2xl md:text-3xl font-light text-white mb-10 leading-10">
                a Front-end Web Developer
              </p>
              <p className="mb-10 text-center md:text-left w-full md:w-11/12 lg:w-8/12 leading-7">
                “I want to build things that will make a positive difference.”
              </p>
              <div className="flex justify-center flex-wrap gap-4">
                <button className="w-40 bg-white px-7 py-3 rounded-full text-black font-bold shadow-lg hover:bg-neutral-100 transition-all">
                  <a href={CV} download>Download CV</a>
                </button>
                <button className="w-40 bg-black px-7 py-3 rounded-full text-white font-bold shadow-lg hover:bg-black2 transition-all">
                  <a href="#about-me" onClick={scrollTo}>Learn More</a>
                </button>
              </div>
            </div>
            <div className="flex relative items-center justify-center md:pl-2 basis-full md:basis-5/12">
              <img src={HeroPic} className="rounded-3xl w-full max-w-md md:max-w-full shadow-lg" alt="" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
