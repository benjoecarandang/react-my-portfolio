const Card = (props) => {
  return (
    <div
      key={props.id} className={`rounded-lg mb-14 bg-white shadow-lg ${props.className} w-full max-w-none md:max-w-full sm:max-w-[80%]`}
    >
      <div className="flex flex-col h-full">
        <div
          className="p-5 flex items-center justify-center w-11/12 mx-auto -mt-5 h-64 rounded-lg overflow-hidden bg-cover"
          style={{ backgroundImage: `${props.gradientProperty}` }}
        >
          <img
            className="w-auto h-full block rounded-lg"
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
              <span key={key} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {item}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
