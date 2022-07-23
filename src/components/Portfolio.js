import Virtuallio from "./../images/virtuallio-timetracker.png";
import Hero1 from "./../images/parallax-hero-bg-1.png";
import Container from "../UI/Container";
import Card from "../UI/Card";
import SectionRibbonTitle from "../UI/SectionRibbonTitle";

const data = [
  {
    title: "Virtuallio Time Tracker",
    description:
      "An electron app that capture screenshots, mouse and keyboard clicks, and determines user productivity.",
    tags: ["Electron", "jQuery", "HTML", "CSS"],
    imageSrc:
      "https://s3.us-east-2.amazonaws.com/resources.diversifyoss.com/2022/07/DSSvBaJo-p3-1.png",
  },
  {
    title: "Aymazing!",
    description:
      "An electron app that capture screenshots, mouse and keyboard clicks, and determines user productivity.",
    tags: ["Electron", "jQuery", "HTML", "CSS"],
    imageSrc:
      "https://s3.us-east-2.amazonaws.com/resources.diversifyoss.com/2022/07/DSSvBaJo-p3-1.png",
  },
  {
    title: "Virtuallio Time Tracker",
    description:
      "An electron app that capture screenshots, mouse and keyboard clicks, and determines user productivity.",
    tags: ["Electron", "jQuery", "HTML", "CSS"],
    imageSrc:
      "https://s3.us-east-2.amazonaws.com/resources.diversifyoss.com/2022/07/DSSvBaJo-p3-1.png",
  }
];

const portfolioElements = data.map((item) => (
  <div className="flex justify-center w-full md:basis-1/2 lg:basis-1/3 px-4">
    <Card
      className=""
      imageSrc={item.imageSrc}
      title={item.title}
      description={item.description}
      tags={item.tags}
    />
  </div>
));

const Portfolio = (props) => {
  return (
    <section className="bg-black1 py-0">
      {/* <div
        className="absolute left-0 bottom-0 top-0 right-0 bg-no-repeat bg-cover transform-3d"
        style={{ backgroundImage: `url(${Hero1})` }}
      ></div> */}
      {/* <div className="top-divider-1"></div> */}
      <Container>
        {/* <div className="my-36 relative z-10">
          <h3 className="text-2xl mb-4 text-neutral-300 text-green text-center font-normal uppercase">
            What I offer?
          </h3>
          <h2 className="text-5xl mb-16 text-neutral-300 leading-[3.5rem] text-center">
            Check out some of my work
          </h2>

          {data.length > 0 && (
            <div className="flex flex-wrap">{portfolioElements}</div>
          )}
        </div> */}

        <div class="flex flex-col items-start justify-center pr-20">
          <SectionRibbonTitle className="theme-gradient-6">
            What I offer?
          </SectionRibbonTitle>
          <h2 className="text-5xl mb-5 text-white">
            Check out some of my work
          </h2>

          <p className="text-neutral-300 font-normal text-[1.25rem] mb-10 w-9/12 leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>

        {data.length > 0 && (
          <div className="flex flex-wrap mb-20">{portfolioElements}</div>
        )}
      </Container>
      <div className="bottom-divider-r-diagonal"></div>
    </section>
  );
};

export default Portfolio;
