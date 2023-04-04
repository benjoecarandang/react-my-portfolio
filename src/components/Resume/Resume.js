import ResumeExperiences from "./ResumeExperiences";
import { Container, SectionHeadings } from "../../UI";
import { useAppContext } from "../context/app-context";
import tw, { styled } from "twin.macro";

const Resume = () => {
  const { resume } = useAppContext();

  const resumeElements = resume
    .sort((a, b) => {
      return a.order - b.order;
    })
    .map((item, key) => (
      <ResumeExperiences
        key={key}
        position={item.position}
        jobDescription={item.jobDescription}
        companyName={item.companyName}
        from={item.from}
        to={item.to}
        companyLogoUrl={item.companyLogoUrl}
        customWidth={item.width}
      ></ResumeExperiences>
    ));

  return (
    <section className="bg-black pb-0">
      <Container>
        <SectionHeadings
          tagline="Education & Experience"
          title="My Resume"
          description={[
            "Full Stack Web developer with 6+ years of hands-on experience in designing, developing, and implementing applications and solutions using range of technologies and programming languages. I'm seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Full Stack Developer."
          ]}
        />

        <div className="pt-12 relative">
          <StyledLine />
          <div className="flex flex-wrap -mx-4">{resumeElements}</div>
        </div>
      </Container>
      <div className="bottom-divider-diagonal"></div>
    </section>
  );
};

const StyledLine = styled.span(
  tw`bg-gray-200 h-full block absolute left-2 top-0 w-[1px] lg:left-1/2`
);

export default Resume;
