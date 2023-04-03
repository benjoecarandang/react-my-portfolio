import { twMerge } from "tailwind-merge";
import { SectionRibbonTitle } from ".";
import tw, { styled } from "twin.macro";

const SectionHeadings = (props) => {
  const { tagline, className, gradientClass, description, title } = props;
  return (
    <div
      className={twMerge(
        `flex flex-col items-center justify-center mb-10 text-center ${className}`
      )}
    >
      <SectionRibbonTitle
        className={twMerge(`theme-gradient-1 ${gradientClass}`)}
      >
        {tagline}
      </SectionRibbonTitle>
      <h2 className="text-5xl mb-5">{title}</h2>

      {description && <StyledDescription>{description}</StyledDescription>}
    </div>
  );
};

const StyledDescription = styled.p(tw`mb-10 w-full lg:w-9/12 leading-7`);
export default SectionHeadings;
