import Container from "../UI/Container";
import SectionRibbonTitle from "../UI/SectionRibbonTitle";
import HeroPic from "./../images/about-us-image.jpg";
import Shape from "./../images/half-horizontal.svg";

const AboutMe = (props) => {
  return (
    <section
      className="mx-4 md:mx-8 lg:mx-16 rounded-2xl bg-black1 bg-center bg-no-repeat h-full bg-cover shadow-lg"
      style={{ backgroundImage: `url(${Shape})` }}
    >
      <div>
        <Container>
          <div class="flex flex-wrap">
            <div className="flex flex-col items-center lg:items-start items-start justify-center py-14 basis-full md:basis-full lg:basis-1/2 w-full">
              <SectionRibbonTitle>Hey There 👋 I am</SectionRibbonTitle>
              <h1 className="text-5xl mb-2 text-white font-semibold">Benjoe —</h1>
              <p className="text-3xl font-light text-white mb-10">
                a Full Stack Web Developer
              </p>
              <p className="mb-10 text-center lg:text-left w-full md:w-8/12 leading-7">
                “I think everyone makes a mistake at least once in their life.
                The important thing is what you learn from it.”
              </p>
              <div className="flex gap-4">
                <button className="w-40 bg-white px-7 py-3 rounded-full text-black font-bold shadow-lg hover:bg-neutral-100 transition-all">
                  Download CV
                </button>
                <button className="w-40 bg-black px-7 py-3 rounded-full text-white font-bold shadow-lg hover:bg-black2 transition-all">
                  <a href="#about-me">Learn More</a>
                </button>
              </div>
            </div>
            <div className="flex relative items-center justify-center basis-full md:basis-full lg:basis-1/2">
              <img src={HeroPic} className="rounded-3xl w-full max-w-md lg:max-w-full shadow-lg" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default AboutMe;
