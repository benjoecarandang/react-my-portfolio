import Hero from "./../images/parallax-hero-bg.png";
import Container from "./../UI/Container";

const AboutMe = (props) => {
  return (
    <section className="theme-gradient-3 pb-0">
      <div
        className="absolute left-0 bottom-0 top-0 right-0 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${Hero})` }}
      ></div>
      <div className="relative z-10">
        <Container>
          <div className="flex flex-col items-center justify-center py-20">
            <h1 className="text-7xl mb-4 text-white">Hi, I'm Benjoe —</h1>
            <p className="text-5xl font-light text-white mb-14">
              a Full Stack Web Developer
            </p>
            <p className="text-white font-light text-2xl mb-10 text-center w-1/2 leading-9">
              “I think everyone makes a mistake at least once in their life. The
              important thing is what you learn from it.”
            </p>
            <button class="theme-gradient-2 px-7 py-4 rounded-lg text-white font-bold uppercase">
              Download CV
            </button>
          </div>
        </Container>
      </div>
      <div className="bottom-divider"></div>
    </section>
  );
};

export default AboutMe;
