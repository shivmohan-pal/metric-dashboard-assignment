import { Routes, Route } from "react-router-dom";
import BellSvg from "../../assets/_svg/BellSvg";
import MessageSvg from "../../assets/_svg/MessageSvg";
import SearchBar from "./SearchBar";
import Analytics from "../Analytics/Analytics";
import Home from "../Home/Home";

const Main = () => {
  return (
    <main className="relative flex-auto p-4 max-lg:p-0 overflow-x-hidden overflow-y-auto">
      <header className="sticky z-[2] top-0 flex p-2 gap-2 justify-between bg-[#F9F9F9] max-lg:shadow-[0_0_4px_0_rgba(0,0,0,0.3)] backdrop-blur-3xl">
        <SearchBar />
        <div className="flex flex-none gap-2 items-center">
          <button className="flex justify-center items-center p-2 pb-1 rounded-xl bg-white shadow-[0px_2px_4px_1px_rgba(0,0,0,0.3)]">
            <BellSvg />
          </button>
          <button className="flex justify-center items-center p-2 pb-1 rounded-xl bg-white shadow-[0px_2px_4px_1px_rgba(0,0,0,0.3)]">
            <MessageSvg />
          </button>
          <span className="flex justify-center items-center">
            <img
              className="relative w-10 h-10 rounded-[48%] object-cover"
              src="./images/avatar-img.jpg"
              alt="profil_pic"
            />
          </span>
        </div>
      </header>
      <section className="relative flex flex-col gap-3 mt-4 max-lg:mt-1 max-lg:p-2">
        <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="/analytics" element={<Analytics />}></Route>
        </Routes>
      </section>
    </main>
  );
};
export default Main;
