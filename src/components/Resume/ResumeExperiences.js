import { Fragment } from "react";

const ResumeExperiences = (props) => {
  let textClasses = " lg:text-right pl-8 ml-auto lg:mr-5";
	let circleClasses = " lg:-right-11 lg:left-auto left-0";

  if (props.position === "right") {
    textClasses = " lg:text-left pl-8 lg:pr-8 mr-auto lg:ml-5";
		circleClasses = " lg:-left-11 lg:right-auto right-0";
  }

  return (
    <Fragment>
      <div className="w-full lg:w-1/2 px-4">
        <div
          className={`w-full lg:w-[428px] xl:w-[490px] lg:px-0 pb-12 sm:pl-11 relative ${textClasses}`}
        >
          <span className={`bg-black border-neutral-300 rounded-full border-4 w-4 h-4 top-1 left-0 absolute ${circleClasses}`}></span>
          <h3 className="text-neutral-100 font-bold text-xl mb-1">
            {props.jobDescription}
          </h3>
          <p className="text-neutral-400 font-medium mb-3 text-base leading-6">
            {props.companyName}
          </p>
          <p className="text-black bg-black-300 px-4 py-1 font-bold text-sm leading-6 bg-neutral-100 rounded-full inline-flex mb-5">
            {props.from} - {props.to}
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2"></div>
      <div className="w-full lg:w-1/2"></div>
    </Fragment>
  );
};

export default ResumeExperiences;
