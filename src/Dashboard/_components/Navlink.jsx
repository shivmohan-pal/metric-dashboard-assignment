import { NavLink } from "react-router-dom";

const Navlink = ({ icon, name, navigateTo, isCollapsed }) => {
  return (
    <NavLink
      to={navigateTo}
      className={({ isActive}) =>
        `px-5 py-4 flex ${
          isCollapsed ? "lg:gap-0" : ""
        } gap-4 items-center bg-calypso-600 hover:bg-calypso-500 lg:hover:bg-opacity-50 ${
          isActive ? "active" : ""
        } text-calypso-50 rounded-2xl`
      }
      href={navigateTo}
    >
      <span className="flex justify-center w-6">{icon}</span>
      <span
        className={`${isCollapsed ? "lg:w-0 lg:scale-0" : ""} transition-all`}
      >
        {name}
      </span>
    </NavLink>
  );
};

export default Navlink;
