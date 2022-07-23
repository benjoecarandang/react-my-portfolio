const Card = (props) => {
  return (
    <div className={`rounded-lg overflow-hidden mb-8 bg-white shadow-lg ${props.className} max-w-none md:max-w-full sm:max-w-[80%]`}>
      <img
        className="w-full"
        src={props.imageSrc}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="text-black font-bold text-xl mb-2">{props.title}</div>
        <p className="text-black1 text-base">{props.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {props.tags &&
          props.tags.map((item) => (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {item}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Card;
