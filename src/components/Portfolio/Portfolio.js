import Container from "../../UI/Container";
import Card from "../../UI/Card";
import SectionHeadings from "../SectionHeadings";
import { useAppContext } from "../context/app-context";

const Portfolio = (props) => {
  const {portfolio} = useAppContext()

  const portfolioElements = portfolio.map((item, key) => (
    <div
      key={key}
      className="flex justify-center w-full md:basis-1/2 lg:basis-1/3 px-4"
    >
      <Card
        id={item.id}
        className=""
        imageSrc={item.imageSrc}
        title={item.title}
        description={item.description}
        tags={item.tags}
        gradientProperty={item.gradientProperty}
        repoLink={item.repoLink}
        websiteLink={item.websiteLink}
      />
    </div>
  ));

  return (
    <section className="bg-black1 py-0">
      <Container>
        <SectionHeadings
          className="items-center lg:items-start text-center lg:text-left"
          tagline="What I offer?"
          title="Check out some of my work"
          description="A small gallery of recent projects I've worked with. Some of the projects were done all together with amazing people from different companies around the globe."
          gradientclassName="theme-gradient-2"
        />

        {portfolio.length > 0 && (
          <div className="flex flex-wrap mb-10 -mx-4">{portfolioElements}</div>
        )}

        {portfolio.length === 0 && <p>No data to display.</p>}
      </Container>
      <div className="bottom-divider-r-diagonal"></div>
    </section>
  );
};

export default Portfolio;
