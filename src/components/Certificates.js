import { Container, Card } from "../UI";
import SectionHeadings from "./SectionHeadings";

const Certificates = () => {
  const arrayCertificates = [
    {
      id: 0,
      className: "",
      imageSrc:
        "https://pbs.twimg.com/media/Fsh18UxaUAEW-Zf?format=jpg&name=large",
      title: "Testing React Apps",
      description: "",
      tags: ["React"],
      gradientProperty: "linear-gradient(45deg, #3f51b5 0%, #3c97fe 100%)",
      repoLink: "",
      websiteLink: ""
    },
    {
      id: 1,
      className: "",
      imageSrc:
        "https://pbs.twimg.com/media/Fsh2GjFaMAQdzNs?format=jpg&name=large",
      title: "Build React App",
      description: "",
      tags: ["React"],
      gradientProperty: "linear-gradient(45deg, #3f51b5 0%, #3c97fe 100%)",
      repoLink: "",
      websiteLink: ""
    },
    {
      id: 2,
      className: "",
      imageSrc:
        "https://pbs.twimg.com/media/Fsh2KpgaAAEZjtc?format=jpg&name=large",
      title: "React Hooks",
      description: "",
      tags: ["React"],
      gradientProperty: "linear-gradient(45deg, #3f51b5 0%, #3c97fe 100%)",
      repoLink: "",
      websiteLink: ""
    },
    {
      id: 3,
      className: "",
      imageSrc:
        "https://pbs.twimg.com/media/Fsh2MZ4aIAArQ6k?format=jpg&name=large",
      title: "Advance React Hooks",
      description: "",
      tags: ["React"],
      gradientProperty: "linear-gradient(45deg, #3f51b5 0%, #3c97fe 100%)",
      repoLink: "",
      websiteLink: ""
    },
    {
      id: 4,
      className: "",
      imageSrc:
        "https://pbs.twimg.com/media/Fsh2RbvaIAE8MkF?format=jpg&name=large",
      title: "React Performance",
      description: "",
      tags: ["React"],
      gradientProperty: "linear-gradient(45deg, #3f51b5 0%, #3c97fe 100%)",
      repoLink: "",
      websiteLink: ""
    },
    {
      id: 5,
      className: "",
      imageSrc:
        "https://pbs.twimg.com/media/Fsh2UvoaAAU87Oy?format=jpg&name=large",
      title: "Advance React Patterns",
      description: "",
      tags: ["React"],
      gradientProperty: "linear-gradient(45deg, #3f51b5 0%, #3c97fe 100%)",
      repoLink: "",
      websiteLink: ""
    }
  ];

  const certificateItems = arrayCertificates.map((item) => (
    <div
      key={item.id}
      className="flex justify-center w-full md:basis-1/2 lg:basis-1/3 px-4"
    >
      <Card
        id={item.id}
        className=""
        imageSrc={item.imageSrc}
        title={item.title}
        description={null}
        tags={item.tags}
        gradientProperty={item.gradientProperty}
        repoLink={null}
        websiteLink={null}
      />
    </div>
  ));

  return (
    <section className="bg-black1 pb-0">
      <Container>
        <SectionHeadings
          className="items-center lg:items-start text-center lg:text-left"
          tagline="Achievements"
          title="My Certificates"
          description=""
        />

        <div className="relative">
          <div className="flex flex-wrap mb-10 -mx-4">{certificateItems}</div>
        </div>
      </Container>
      <div className="bottom-divider-r-diagonal"></div>
    </section>
  );
};

export default Certificates;
