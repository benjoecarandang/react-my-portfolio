import { Container, SectionHeadings } from "../../UI";
import { useAppContext } from "../context/app-context";
import { CatalogRow } from "../../components/index";

const Portfolio = () => {
  const { portfolio } = useAppContext();

  const portfolioElements = <CatalogRow data={portfolio} />;

  return (
    <section className="bg-black1 py-0">
      <Container>
        <SectionHeadings
          className="items-center lg:items-start text-center lg:text-left"
          tagline="What I offer?"
          title="Check out some of my work"
          description={[
            "A small gallery of recent projects I've worked with. Some of the projects were done all together with amazing people from different companies around the globe."
          ]}
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
