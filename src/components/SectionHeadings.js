import { twMerge } from "tailwind-merge";
import SectionRibbonTitle from "../UI/SectionRibbonTitle";

const SectionHeadings = (props) => {
  return (
    <div class={twMerge(`flex flex-col items-center justify-center mb-10 text-center ${props.className}`)}>
      <SectionRibbonTitle className={twMerge(`theme-gradient-5 ${props.gradientClass}`)}>
        {props.tagline}
      </SectionRibbonTitle>
      <h2 className="text-5xl mb-5 text-white">{props.title}</h2>

      {props.description && (
        <p className="text-neutral-300 font-normal text-[1.25rem] mb-10 w-full lg:w-8/12 leading-7 px-2">
          {props.description}
        </p>
      )}
    </div>
  );
};

export default SectionHeadings;
