import tw, { styled } from "twin.macro";
import { twMerge } from "tailwind-merge";

const SectionRibbonTitle = (props) => {
  return <StyledRibbon className={twMerge(`${props.className}`)} {...props} />;
};

const StyledRibbon = styled.p(
  tw`
    rounded-full px-6 py-2 mb-5 text-white font-semibold text-sm rounded-bl-none bg-black shadow-xl
    `
);

export default SectionRibbonTitle;
