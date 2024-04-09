const ChartCard = ({
  title,
  tagline,
  value,
  change,
  changeValue,
  bgColor,
  bgImg,
  textColor,
}) => {
  return (
    <div
      className={`relative flex-none w-64 px-6 py-4 rounded-3xl overflow-hidden ${bgColor} ${textColor}`}
    >
      <div
        className={`absolute w-full bottom-0 left-0 bg-no-repeat bg-contain z-0`}
      >
        <img className="w-full" src={bgImg} alt="graph img" />
      </div>
      <div className="relative z-[1] flex flex-col gap-2">
        <div>
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-xs opacity-70">{tagline}</p>
        </div>
        <div>
          <span className="block text-2xl font-semibold">{changeValue}</span>
          <span className="block text-xs font-semibold">{change}</span>
        </div>
      </div>
      <span className="relative z-[1] block text-xs mt-4 opacity-70">{value}</span>
    </div>
  );
};

export default ChartCard;
