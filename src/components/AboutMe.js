import Container from "../UI/Container";
import SectionHeadings from "./SectionHeadings";

const AboutMe = (props) => {
  return (
    <section id="about-me" className="bg-black pb-0">
      <div>
        <Container>
          {/* <div class="grid grid-cols-2 w-full gap-10 relative z-30">
            <div class="flex flex-col justify-center pr-20">
              <h3 className="text-2xl mb-4 text-neutral-300 text-green font-normal uppercase">About Me</h3>
							<h2 className="text-5xl mb-4 text-neutral-300 leading-[3.5rem]">Better design,<br/> Better Experience</h2>

              <p className="font-light text-2xl mb-10  w-1/8 leading-9 text-neutral-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="relative">
              <img src={AboutImage} className="rounded-3xl shadow-lg" />
              <div className="absolute w-full h-full -top-12 -left-12 rounded-3xl theme-gradient-2 -z-10"></div>
            </div>
          </div> */}
          <SectionHeadings
            tagline="About me"
            title="Lorem ipsum dolor sit amet"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged."
          />
        </Container>
        <div className="bottom-divider-diagonal"></div>
      </div>
    </section>
  );
};

export default AboutMe;
