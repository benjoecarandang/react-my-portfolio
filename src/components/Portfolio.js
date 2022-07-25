import Container from "../UI/Container";
import Card from "../UI/Card";
import SectionHeadings from "./SectionHeadings";

const data = [
  {
    title: "Virtuallio Time Tracker",
    description:
      "An electron app that capture screenshots, mouse and keyboard clicks, and determines user productivity.",
    tags: ["Electron", "jQuery", "HTML", "CSS"],
    imageSrc:
      "https://pbs.twimg.com/media/FYguXiNUIAIDeTj?format=png&name=medium",
    gradientProperty: "linear-gradient(45deg, #3c97fe 0%, #673ab7 100%)",
    repoLink: "",
    websiteLnk: "",
  },
  {
    title: "Meme Generator",
    description:
      "A simple tool to create memes on the fly.",
    tags: ["React", "HTML", "CSS"],
    imageSrc:
      "https://pbs.twimg.com/media/FYg8_0sUYAAWvjA?format=jpg&name=small",
    gradientProperty: "linear-gradient(45deg, rgb(78 147 60) 0%, rgb(255, 251, 125) 100%)",
    repoLink: "",
    websiteLnk: "",
  },
  {
    title: "Tenzies",
    description:
      "A simple game that rolls the dice until all dice are the same.",
    tags: ["React", "HTML", "CSS"],
    imageSrc:
      "https://pbs.twimg.com/media/FYhFPnPUYAAMlYe?format=jpg&name=900x900",
    gradientProperty: "linear-gradient(45deg, rgb(108 197 205) 0%, rgb(9 153 244) 100%)",
    repoLink: "",
    websiteLnk: "",
  },
  {
    title: "MyDiversify App",
    description:
      "An electron app that connects into MyDiversify API. It captures mouse and keyboard clicks and record task and breaks activities.",
    tags: ["Electron", "Restful API", "HTML", "CSS"],
    imageSrc:
      "https://pbs.twimg.com/media/FYhkmvxUYAE1XNL?format=png&name=900x900",
    gradientProperty: "linear-gradient(45deg, rgb(117 91 165) 0%, rgb(121 180 206) 100%)",
    repoLink: "",
    websiteLnk: "",
  },
];

const portfolioElements = data.map((item) => (
  <div className="flex justify-center w-full md:basis-1/2 lg:basis-1/3 px-4">
    <Card
      className=""
      imageSrc={item.imageSrc}
      title={item.title}
      description={item.description}
      tags={item.tags}
      gradientProperty={item.gradientProperty}
    />
  </div>
));

const Portfolio = (props) => {
  return (
    <section className="bg-black1 py-0">
      <Container>
        <SectionHeadings
          className="items-center lg:items-start text-center lg:text-left"
          tagline="What I offer?"
          title="Check out some of my work"
          description="A small gallery of recent projects I've worked with. Some of the projects are done all together with amazing people from different companies around the globe."
          gradientClass="theme-gradient-6"
        />

        {data.length > 0 && (
          <div className="flex flex-wrap mb-20 -mx-4">{portfolioElements}</div>
        )}
      </Container>
      <div className="bottom-divider-r-diagonal"></div>
    </section>
  );
};

export default Portfolio;
