// import applogo from "../../assets/applogo.png";

// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
// import Button from "@mui/material/Button";

import icon from "../../assets/schedular.png";
import { useEffect, useState } from "react";

// import DeleteIcon from "@mui/icons-material/Delete";
// import IconButton from "@mui/material/IconButton";
// import Tooltip from "@mui/material/Tooltip";
// import EditIcon from "@mui/icons-material/Edit";
import MenuIcon from "@mui/icons-material/Menu";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import BellIcon from "@mui/icons-material/Notifications";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/SearchSharp";
import AddIcon from "@mui/icons-material/Add";
import TimeIcon from "@mui/icons-material/AccessTime";
import AddAlertIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ColorIcon from "@mui/icons-material/ColorLens";
import ImageIcon from "@mui/icons-material/Image";
import MoreIcon from "@mui/icons-material/MoreVert";
// import { IconButton } from "@mui/material";
// import { Hidden } from "@mui/material";

const HomePage = () => {
  const [taskdata, setTaskdata] = useState([]);

  useEffect(() => {
    fetch("https://schedular-backend-k1ru.onrender.com/taskdetail", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => setTaskdata(data.mydata));
    console.log(taskdata);
  }, [taskdata]);

  const [task, setTask] = useState({
    Taskname: "",
    Taskdes: "",
  });

  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  let name, value;

  const formChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setTask({ ...task, [name]: value });
  };

  const createClicked = async (e) => {
    e.preventDefault();

    const { Taskname, Taskdes } = task;

    const res = await fetch(
      "https://schedular-backend-k1ru.onrender.com/taskdetail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Taskname,
          Taskdes,
          date,
          time,
        }),
      }
    );
    console.log(res.status);

    if (res.status === 400) {
      window.alert("Fill data properly ");
    } else if (res.status === 410) {
      window.alert("Task Already Exist");
    } else if (res.status === 422) {
      window.alert("Multiple Task cannot be adjusted at same time");
    } else if (res.status === 200) {
      // window.alert("registration successful");
    }

    setTask({
      Taskname: "",
      Taskdes: "",
    });

    setTime(null);
    setDate(null);
  };

  const deleteClicked = async (id) => {
    const res = await fetch(
      "https://schedular-backend-k1ru.onrender.com/deletetask",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      }
    );

    console.log(res.status);
  };

  const [height, setHeight] = useState(2.5);
  const [width, setWidth] = useState(4);
  // const [opacity, setOpacity] = useState(0);

  window.addEventListener("click", function (e) {
    if (
      document.getElementById("clickbox").contains(e.target) ||
      task.Taskname ||
      task.Taskdes ||
      time ||
      date
    ) {
      setHeight(15);
    } else {
      setHeight(2.5);
    }
  });

  return (
    <>
      <div className="bg-stone-950 h-full">
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
            <div className="flex flex-row items-center overflow-hidden   h-12 mt-4  hover:bg-pink-800 rounded-r-3xl">
              <LightbulbIcon className="ml-4" style={{ color: "white" }} />{" "}
              <p className="text-white ml-6 overflow-hidden">Notes</p>
            </div>
            <div className="flex flex-row items-center overflow-hidden  h-12 hover:bg-pink-800 rounded-r-3xl ">
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
          {/* side end */}
          {/* Main page start */}

          <div className="w-full h-full bg-stone-950 flex flex-col items-center gap-32 relative left-8 z-0">
            <div
              id="clickbox"
              role="button"
              className="w-74 xl:w-2/5 border-2 border-pink-800  relative top-10 rounded-md transition-all flex flex-col items-start overflow-hidden"
              style={{ height: `${height}rem` }}
            >
              <div className="w-80 xl:w-11/12 flex items-center">
                <input
                  className="text-white w-80 h-10 ml-2 bg-transparent outline-none  xl:w-11/12 "
                  name="Taskname"
                  value={task.Taskname}
                  placeholder="Take a note.."
                  onChange={formChange}
                />
                <AddIcon
                  className="relative xl:left-10"
                  style={{ color: "white" }}
                  onClick={createClicked}
                />
              </div>

              <textarea
                name="Taskdes"
                type="text"
                value={task.Taskdes}
                className="h-24 w-80 text-white bg-transparent ml-2 outline-none mt-2 xl:w-11/12"
                placeholder="description"
                style={{ resize: "none", overflow: "Hidden " }}
                onChange={formChange}
              />

              <div className="flex justify-center w-full relative top-8 ">
                {" "}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Date"
                    name="Taskdate"
                    disableUnderline
                    onChange={(e) => {
                      setDate(e.$d.toLocaleDateString());
                    }}
                    value={date}
                    sx={{
                      "& .MuiInputBase-root": {
                        color: "white",
                        height: "3rem",
                        width: "10rem",
                      },
                      "& .MuiFormLabel-root": {
                        color: "white",
                        opacity: "0.5",
                      },
                      "& .muioutlinedinput-notchedoutline": {
                        border: "none",
                      },
                    }}
                    slotProps={{
                      openPickerButton: {
                        color: "primary",
                      },
                      textField: { variant: "filled" },
                    }}
                  />
                  <TimePicker
                    label="Time"
                    name="Tasktime"
                    value={time}
                    onChange={(e) => {
                      setTime(e.$d.toLocaleTimeString());
                    }}
                    sx={{
                      "& .MuiInputBase-root": {
                        color: "white",
                        height: "3rem",
                        width: "10rem",
                      },
                      "& .MuiFormLabel-root": {
                        color: "white",
                        opacity: "0.5",
                        fontSize: "15px",
                      },
                    }}
                    slotProps={{
                      openPickerButton: {
                        color: "primary",
                      },
                      textField: { variant: "filled", size: "small" },
                    }}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div className="flex flex-row gap-4 w-4/5 xl:w-10/12 md:justify-start justify-center flex-wrap xl:ml-16">
              {taskdata.map((curElem) => {
                const { _id, Taskname, Taskdes, date, time } = curElem;

                return (
                  <>
                    <div
                      id="cardbox"
                      key={_id}
                      className="border-pink-800 border-2 h-96 w-64 rounded-xl flex justify-center hover:bg-boxborder transition-all"
                    >
                      <div className=" h-80 w-56 mt-4">
                        <div className=" h-12 w-full text-lg font-apple text-white flex items-center">
                          {Taskname}
                        </div>
                        <div className="h-60 mt-2 text-white opacity-60 ">
                          {Taskdes}
                        </div>
                        <div className=" h-6 w-44 rounded-xl border-2 border-pink-800 flex items-center relative right-2 justify-between opacity-25">
                          <TimeIcon
                            className="scale-75  "
                            style={{ color: "white" }}
                          />
                          <p className="text-white text-xs ">{date},</p>
                          <p className="text-white text-xs mr-2">{time}</p>
                        </div>
                        <div
                          id="menubar"
                          className=" h-8 mt-3 flex justify-between opacity-0"
                        >
                          <AddAlertIcon id="icons" className="scale-75 " />

                          <PersonAddAltIcon id="icons" className="scale-75" />
                          <ColorIcon
                            id="icons"
                            className="scale-75"
                            onClick={() => deleteClicked(_id)}
                          />
                          <ImageIcon id="icons" className="scale-75" />
                          <ArchiveIcon id="icons" className="scale-75" />
                          <MoreIcon id="icons" className="scale-75" />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          {/* Main page end */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
