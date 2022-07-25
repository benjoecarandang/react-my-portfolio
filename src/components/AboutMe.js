import Container from "../UI/Container";
import SectionHeadings from "./SectionHeadings";

const AboutMe = (props) => {
  return (
    <section id="about-me" className="bg-black pb-0">
      <div>
        <Container>
          <SectionHeadings
            tagline="About me"
            title="Hardworking. Focused."
            description="Full Stack Web developer with 6+ years of hands-on experience designing, developing, and implementing application and solutions using a range of technologies and programming languages. Seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Full Stack Developer."
          />
        </Container>
        <div className="bottom-divider-diagonal"></div>
      </div>
    </section>
  );
};

export default AboutMe;
