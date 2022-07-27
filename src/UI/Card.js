const Card = (props) => {
  const hasLink = props.websiteLink || props.repoLink;
  
  return (
    <div
      key={props.id}
      className={`rounded-lg mb-14 bg-white shadow-lg ${props.className} w-full max-w-none md:max-w-full sm:max-w-[80%]`}
    >
      <div className="flex flex-col h-full">
        <div
          className="group p-5 flex items-center justify-center w-11/12 mx-auto -mt-5 h-64 rounded-lg overflow-hidden bg-cover hover:cursor-pointer"
          style={{ backgroundImage: `${props.gradientProperty}` }}
        >
          <div class="absolute gap-2 hidden group-hover:flex transition-all">
            {props.websiteLink && (
              <button class="z-20 w-32 text-sm bg-black px-2 py-2 rounded-full text-white font-medium hover:shadow-xl">
                <a href={props.websiteLink} target="_blank" rel="noreferrer">View Website</a>
              </button>
            )}

            {props.repoLink && (
              <button class="z-20 w-28 text-xs bg-black px-2 py-2 rounded-full text-white font-medium hover:shadow-xl">
                <a href={props.repoLink} target="_blank" rel="noreferrer">View Repo</a>
              </button>
            )}

            {!hasLink && (
              <>
                <button class="z-20 w-28 text-xs bg-black px-2 py-2 rounded-full text-white font-medium hover:shadow-xl">
                  NDA
                </button>
              </>
            )}
          </div>

          <img
            className="w-auto h-full block rounded-lg group-hover:opacity-10 transition-all"
            src={props.imageSrc}
            alt="Sunset in the mountains"
          />
        </div>

        <div className="px-8 py-4">
          <div className="text-black font-bold text-xl mb-2">{props.title}</div>
          <p className="text-black1 text-base">{props.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2 mt-auto">
          {props.tags &&
            props.tags.map((item, key) => (
              <span
                key={key}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {item}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
