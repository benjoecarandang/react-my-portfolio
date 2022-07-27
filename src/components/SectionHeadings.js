import { twMerge } from "tailwind-merge";
import SectionRibbonTitle from "../UI/SectionRibbonTitle";
import tw, { styled } from "twin.macro";

const SectionHeadings = (props) => {
  return (
    <div className={twMerge(`flex flex-col items-center justify-center mb-10 text-center ${props.className}`)}>
      <SectionRibbonTitle className={twMerge(`theme-gradient-1 ${props.gradientClass}`)}>
        {props.tagline}
      </SectionRibbonTitle>
      <h2 className="text-5xl mb-5">{props.title}</h2>

      {props.description && (
        <StyledDescription>
          {props.description}
        </StyledDescription>
      )}
    </div>
  );
};

const StyledDescription = styled.p(
 tw`mb-10 w-full lg:w-9/12 leading-7`
)
export default SectionHeadings;
