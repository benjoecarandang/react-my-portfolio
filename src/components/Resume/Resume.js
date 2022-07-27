import { useState, useEffect } from "react";
import ResumeExperiences from "./ResumeExperiences";
import Container from "../../UI/Container";
import SectionHeadings from "../SectionHeadings";
import tw, { styled } from "twin.macro";

const Resume = (props) => {
  const [resumeItems, setResumeItems] = useState([]);

  useEffect(() => {
    const getResume = async () => {
      const response = await fetch(
        "https://my-portfolio-a7eb9-default-rtdb.firebaseio.com/resume.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      let resumeArray = [];

      for (const key in data) {
        resumeArray.push({
          id: key,
          position: data[key].position,
          jobDescription: data[key].jobDescription,
          companyName: data[key].companyName,
          from: data[key].from,
          to: data[key].to,
        });
      }

      setResumeItems(resumeArray);
    };

    getResume().catch((error) => {
      console.log(error);
    });
  }, []);

  console.log(resumeItems);

  const resumeElements = resumeItems.map((item) => (
    <ResumeExperiences
      key={item.id}
      position={item.position}
      jobDescription={item.jobDescription}
      companyName={item.companyName}
      from={item.from}
      to={item.to}
    ></ResumeExperiences>
  ));

  return (
    <section className="bg-black">
      <Container>
        <SectionHeadings
          tagline="Education & Experience"
          title="My Resume"
          description="Full Stack Web developer with 6+ years of hands-on experience in designing, developing, and implementing applications and solutions using range of technologies and programming languages. I'm seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Full Stack Developer."
        />

        <div className="pt-12 relative">
          <StyledLine />
          <div className="flex flex-wrap -mx-4">{resumeElements}</div>
        </div>
      </Container>
    </section>
  );
};

const StyledLine = styled.span(
  tw`bg-gray-200 h-full block absolute left-2 top-0 w-[1px] lg:left-1/2`
);

export default Resume;
