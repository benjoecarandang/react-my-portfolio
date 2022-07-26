import { useState, useEffect } from "react";
import ResumeExperiences from "./ResumeExperiences";
import Container from "../../UI/Container";
import SectionHeadings from "../SectionHeadings";
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
          to: data[key].to
        });
      }

      setResumeItems(resumeArray);
    };

    getResume().catch((error) => {
      console.log(error);
    });
  }, []);

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
          description="There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form."
        />

        <div className="pt-12 relative">
          <span className="lg:left-1/2 bg-neutral-400 w-[1px] h-full block left-2 top-0 absolute"></span>
          <div className="flex flex-wrap -mx-4">{resumeElements}</div>
        </div>
      </Container>
    </section>
  );
};

export default Resume;
