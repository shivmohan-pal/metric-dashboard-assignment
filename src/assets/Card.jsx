const Card = ({ title, data }) => {
  const keys = Object.keys(data);
  let modifiedKeys = keys.map((key) => {
    return key.split("_").join(" ");
  });
  let values = Object.values(data);
  // let percent = ((Number(values[0])/Number(values[1]))*100).toFixed(1);
  return (
    <div className="inline-grid flex-auto w-72 px-5 py-7 shadow-[0_0_4px_0_rgba(09,109,109,0.50)] rounded-md bg-white">
      <div
        className={` justify-self-end w-4 h-4 rounded-full ${
          values.length > 2 ? "bg-green-400" : "bg-red-400"
        }`}
      ></div>
      <div className="flex flex-col justify-center gap-1">
        <h2 className="text-xl font-semibold text-black leading-loose capitalize">
          {title}
        </h2>

        {modifiedKeys.map((key, i) => {
          return (
            <div key={i} className="flex justify-between">
              <span className="text-lg opacity-60 font-thin capitalize">
                {key}
              </span>
              <span className="text-base font-semibold">
                {key[0] === "%" ? "% " + values[i] : values[i]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
