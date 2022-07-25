import ResumeExperiences from "./ResumeExperiences";
import Container from "../../UI/Container";
import SectionHeadings from "../SectionHeadings";

const data = [
  {
    position: "left",
    jobDescription: "Fullstack Web Developer",
    companyName: "Diversify Offshoring Staffing Solutions",
    from: "2019",
    to: "Present",
  },
  {
    position: "right",
    jobDescription: "Fullstack Web Developer",
    companyName: "Enra Innovations",
    from: "2017",
    to: "2019",
  },
  {
    position: "left",
    jobDescription: "Fullstack Web Developer",
    companyName: "Portal Integrators",
    from: "2016",
    to: "2017",
  },
];

const resumeElements = data.map((item) => (
  <ResumeExperiences
    position={item.position}
    jobDescription={item.jobDescription}
    companyName={item.companyName}
    from={item.from}
    to={item.to}
  ></ResumeExperiences>
));

const Resume = (props) => {
  return (
    <section className="bg-black">
      <Container>
        <SectionHeadings
          tagline="Education & Experience"
          title="My Resume"
          description="There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form."
        />

        <div class="pt-12 relative">
          <span className="lg:left-1/2 bg-neutral-400 w-[1px] h-full block left-2 top-0 absolute"></span>
          <div className="flex flex-wrap -mx-4">{resumeElements}</div>
        </div>
      </Container>
    </section>
  );
};

export default Resume;
