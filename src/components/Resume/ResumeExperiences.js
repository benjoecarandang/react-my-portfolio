import { Fragment } from "react";
import tw, { styled } from "twin.macro";

const ResumeExperiences = (props) => {
  return (
    <Fragment>
      <div className="w-full lg:w-1/2 px-4">
        <StyledResumeContainer position={props.position}>
          <StyledCircle position={props.position}/>
          <h3 className="text-neutral-100 font-bold text-xl mb-1">
            {props.jobDescription}
          </h3>
          <p className="text-neutral-400 font-medium mb-3 leading-6">
            {props.companyName}
          </p>
          <StyledDate>
            {props.from} - {props.to}
          </StyledDate>
        </StyledResumeContainer>
      </div>
      <div className="w-full lg:w-1/2"></div>
      <div className="w-full lg:w-1/2"></div>
    </Fragment>
  );
};

const StyledCircle = styled.span(({position}) => [
  tw`bg-black border-gray-300 rounded-full border-4 w-4 h-4 top-1 left-0 absolute`,
  position === "right" ? tw`lg:-left-11 lg:right-auto right-0` : tw`lg:-right-11 lg:left-auto left-0`
]);

const StyledResumeContainer = styled.div(({position}) => [
  tw`w-full lg:w-[428px] xl:w-[490px] lg:px-0 pb-12 sm:pl-11 relative`,
  position === "right" ? tw`lg:text-left pl-8 lg:pr-8 mr-auto lg:ml-5` : tw`lg:text-right pl-8 ml-auto lg:mr-5`
]);

const StyledDate = styled.p(
  tw`text-black bg-gray-100 px-4 py-1 font-bold text-sm leading-6 rounded-full inline-flex mb-5`
)


export default ResumeExperiences;
