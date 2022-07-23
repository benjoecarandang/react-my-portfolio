import tw, { styled } from "twin.macro";

const SectionRibbonTitle = (props) => {
  return <StyledRibbon className={`bg-black ${props.className}`}>{props.children}</StyledRibbon>;
};

const StyledRibbon = styled.p(
  tw`
    rounded-full px-6 py-2 mb-5 text-white font-semibold text-sm rounded-bl-none
    `
);
export default SectionRibbonTitle;
