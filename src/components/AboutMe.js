import { Container, SectionHeadings } from "../UI";

const AboutMe = () => {
  const description = (
    <div className="text-left">
      <p className="">
        I've enjoyed turning complex problems into simple, creative, and
        intuitive designs. Although I always doubted my skills that I'm not good
        enough — I've never stopped engaging my passion to help others and solve
        problems.
      </p>
      <p>
        As a Full Stack Web Developer, I enjoy using my obsessive attention to
        detail, my creativity in making things, and my mission-driven work ethic
        to literally scratch the world. That's why I’m excited to make a big
        impact at a high growth company.
      </p>
      <p>
        Random facts: When I'm not pushing pixels, you'll find me playing my
        guitar, Petting my cat and dog and spending time with my nieces.
      </p>
      <p className="text-left text-lg italic font-bold text-neutral-200 tracking-wide">
        ~ “I may not know anything, but I will never stop learning.”
      </p>
    </div>
  );

  return (
    <section id="about-me" className="bg-black pb-0">
      <div>
        <Container>
          <SectionHeadings
            tagline="About me"
            title="Hardworking. Focused."
            description={description}
          />
        </Container>
        <div className="bottom-divider-diagonal"></div>
      </div>
    </section>
  );
};

export default AboutMe;
