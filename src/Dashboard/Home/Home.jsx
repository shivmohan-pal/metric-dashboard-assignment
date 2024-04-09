import Slider from "../_components/Slider";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-3"> 
        <h1 className="text-3xl font-normal">Set-up Catalix for Success</h1>
        <p className="text-lg font-thin text-gray-400 max-w-[54ch]">
          Get Catalix up to date or start your transformation by following the
          guide below.
        </p>
      </div>
      <Slider />
    </>
  );
};

export default Home;
