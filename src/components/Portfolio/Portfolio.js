import Container from "../../UI/Container";
import Card from "../../UI/Card";
import SectionHeadings from "../SectionHeadings";
import { useEffect, useState } from "react";

const Portfolio = (props) => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    const portfolio = async () => {
      const response = await fetch(
        "https://my-portfolio-a7eb9-default-rtdb.firebaseio.com/projects.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      let portfolioArray = [];

      for (const key in data) {
        portfolioArray.push({
          id: key,
          title: data[key].title,
          description: data[key].description,
          imageSrc: data[key].imageSrc,
          tags: data[key].tags,
          websiteLink: data[key].websiteLink,
          repoLink: data[key].repoLink,
          gradientProperty: data[key].gradientProperty,
        });
      }

      setPortfolioItems(portfolioArray);
    };

    portfolio().catch((error) => {
      console.log(error);
    });
  }, []);

  const portfolioElements = portfolioItems.map((item) => (
    <div
      key={item.id}
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

        {portfolioItems.length > 0 && (
          <div className="flex flex-wrap mb-10 -mx-4">{portfolioElements}</div>
        )}

        {portfolioItems.length === 0 && <p>No data to display.</p>}
      </Container>
      <div className="bottom-divider-r-diagonal"></div>
    </section>
  );
};

export default Portfolio;
