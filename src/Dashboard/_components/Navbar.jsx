import Navlink from "./Navlink";
import HomeSvg from "../../assets/_svg/HomeSvg";
import TimerSvg from "../../assets/_svg/TimerSvg";
import ChartSvg from "../../assets/_svg/ChartSvg";
import RocketSvg from "../../assets/_svg/RocketSvg";
import LayersSvg from "../../assets/_svg/LayersSvg";
import SettingSvg from "../../assets/_svg/SettingSvg";
import LogoutSvg from "../../assets/_svg/LogoutSvg";
import LogoBoxSvg from "../../assets/_svg/LogoBoxSvg";
import LeftSvg from "../../assets/_svg/leftSvg";
import { useState } from "react";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleCollapse = () => {
    setIsCollapsed((isCollapsed) => !isCollapsed);
  };
  return (
    <header className={`flex flex-col px-6 py-7 max-lg:p-2 lg:gap-8 ${isCollapsed?'':'gap-3'} bg-calypso-600 lg:rounded-[2rem] font-poppins shadow-[4px_4px_12px_6px_rgba(0,0,0,0.3)] max-lg:sticky top-0`}>
      <div
        className={`flex max-lg:flex-row-reverse lg:flex-col lg:gap-8 max-lg:justify-between ${
          isCollapsed ? "items-center" : ""
        }`}
      >
        <button
          onClick={handleCollapse}
          className={`${
            isCollapsed ? "rotate-180 max-lg:rotate-[270deg]" : "self-end"
          } max-lg:rotate-90 transition-all`}
        >
          <LeftSvg stroke="" />
        </button>
        <div
          className={`px-2 flex ${
            isCollapsed ? "lg:justify-center lg:gap-0" : ""
          } gap-4 items-center text-calypso-50`}
        >
          <span className="flex justify-center">
            <LogoBoxSvg stroke="" />
          </span>
          <span
            className={`${
              isCollapsed ? "lg:w-0 lg:scale-0" : ""
            } text-4xl align-middle font-semibold transition-all`}
          >
            Catalix
          </span>
        </div>
      </div>

      <nav
        className={`flex flex-auto justify-around flex-col gap-6 overflow-hidden transition-all duration-500 ${
          isCollapsed ? "max-lg:h-0" : ""
        }`}
      >
        <div className="flex flex-auto flex-col gap-2 justify-between">
          <div className="flex flex-col gap-2">
            <Navlink
              isCollapsed={isCollapsed}
              icon={<HomeSvg stroke="" />}
              name="Home"
              navigateTo={"/"}
            />

            <Navlink
              isCollapsed={isCollapsed}
              icon={<TimerSvg stroke="" />}
              name="Activities"
              navigateTo={"activities"}
            />

            <Navlink
              isCollapsed={isCollapsed}
              icon={<ChartSvg stroke="" />}
              name="Analytics"
              navigateTo={"analytics"}
            />

            <Navlink
              isCollapsed={isCollapsed}
              icon={<RocketSvg stroke="" />}
              name="Transformation"
              navigateTo={"transformation"}
            />

            <Navlink
              isCollapsed={isCollapsed}
              icon={<LayersSvg stroke="" />}
              name="Library"
              navigateTo={"library"}
            />
          </div>
          <div className="flex flex-col gap-2">
            <hr className="bg-calypso-100 border-none rounded-2xl h-[1px]" />

            <Navlink
              isCollapsed={isCollapsed}
              icon={<SettingSvg stroke="" />}
              name="Settings"
              navigateTo={"settings"}
            />

            <Navlink
              isCollapsed={isCollapsed}
              icon={<LogoutSvg stroke="" />}
              name="Logout"
              navigateTo={"logout"}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
