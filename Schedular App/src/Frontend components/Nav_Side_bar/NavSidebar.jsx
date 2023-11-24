import icon from "../../assets/schedular.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import BellIcon from "@mui/icons-material/Notifications";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/SearchSharp";

import { Outlet } from "react-router-dom";

const HomePage = () => {
  const [width, setWidth] = useState(4);

  const Nav = useNavigate();

  return (
    <>
      <div className="bg-stone-950 h-full z-0">
        {/* NAV START */}
        <div className="  xl:h-16 h-16 w-full border-b-2 border-gray-800  xl:mb-0  flex items-center fixed z-10 bg-stone-950">
          <div>
            <MenuIcon
              className="text-white scale-110 ml-4"
              role="button"
              onClick={() => (width === 4 ? setWidth(16) : setWidth(4))}
            />
          </div>
          <img
            src={icon}
            alt="not availible"
            className="flex  mt-1 xl:h-16 h-16 relative left-6"
          />
          <div className="w-40 md:w-3/6  h-10 border-2 relative left-12 rounded-lg border-pink-800 flex items-center">
            <SearchIcon style={{ color: "white", margin: "0.50rem" }} />
            <input
              type="text"
              className="w-28 outline-none bg-transparent text-white"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Nav end */}

        <div className="flex flex-row h-full bg-stone-950 relative top-16">
          {/* side start */}
          <div
            className="w-16 h-full flex flex-col hover:w-60 hover:border-r-2 border-gray-800  transition-all fixed  z-10 bg-stone-950 overflowhidden "
            style={{ width: `${width}rem` }}
          >
            <div
              onClick={() => Nav("/home/homepage")}
              role="button"
              className="flex flex-row items-center overflow-hidden   h-12 mt-4  hover:bg-pink-800 rounded-r-3xl"
            >
              <LightbulbIcon className="ml-4" style={{ color: "white" }} />{" "}
              <p className="text-white ml-6 overflow-hidden">Notes</p>
            </div>
            <div
              onClick={() => Nav("/home/reminders")}
              role="button"
              className="flex flex-row items-center overflow-hidden  h-12 hover:bg-pink-800 rounded-r-3xl "
            >
              <BellIcon className="ml-4" style={{ color: "white" }} />
              <p className="text-white ml-6 overflow-hidden">Reminders</p>
            </div>
            <div className="flex flex-row items-center overflow-hidden  h-12 hover:bg-pink-800 rounded-r-3xl ">
              <EditIcon className="ml-4" style={{ color: "white" }} />
              <p className="text-white ml-6 whitespace-nowrap">Edit Lables</p>
            </div>
            <div className="flex flex-row items-center overflow-hidden  h-12 hover:bg-pink-800 rounded-r-3xl ">
              <ArchiveIcon className="ml-4" style={{ color: "white" }} />
              <p className="text-white ml-6 overflow-hidden">Archive</p>
            </div>
            <div className="flex flex-row items-center overflow-hidden  h-12 hover:bg-pink-800 rounded-r-3xl ">
              <DeleteIcon className="ml-4" style={{ color: "white" }} />
              <p className="text-white ml-6 overflow-hidden">Bin</p>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default HomePage;
