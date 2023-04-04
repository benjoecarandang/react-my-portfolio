import { twMerge } from "tailwind-merge";
import { SectionRibbonTitle } from ".";
import tw, { styled } from "twin.macro";

const SectionHeadings = (props) => {
  const {
    tagline,
    className,
    gradientClass,
    description = [],
    title,
    textEnder = null
  } = props;

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

      <StyledDescription>
        {description.map((item, key) => (
          <p key={key}>{item}</p>
        ))}

        {textEnder && (
          <p className=" text-lg italic font-bold text-neutral-200 tracking-wide">
            {textEnder}
          </p>
        )}
      </StyledDescription>
    </div>
  );
};

const StyledDescription = styled.div(tw`mb-10 w-full lg:w-9/12 leading-7`);
export default SectionHeadings;
