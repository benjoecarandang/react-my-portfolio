import { Container, SectionHeadings } from "../UI";

const AboutMe = () => {
  const description = [
    "I've enjoyed turning complex problems into simple, creative, and intuitive designs. Although I always doubted my skills that I'm not good enough — I've never stopped engaging my passion to help others and solve problems.",
    "As a Full Stack Web Developer, I enjoy using my obsessive attention to   detail, my creativity in making things, and my mission-driven work ethic to literally scratch the world. That's why I’m excited to make a big impact at a high growth company.",
    "Random facts: When I'm not pushing pixels, you'll find me playing my guitar, Petting my cat and dog and spending time with my nieces.",
    ""
  ];

  return (
    <section id="about-me" className="bg-black pb-0">
      <div>
        <Container>
          <SectionHeadings
            tagline="About me"
            title="Hardworking. Focused."
            description={description}
            textEnder="~ “I may not know anything, but I will never stop learning.”"
          />
        </Container>
        <div className="bottom-divider-diagonal"></div>
      </div>
    </section>
  );
};

export default AboutMe;
