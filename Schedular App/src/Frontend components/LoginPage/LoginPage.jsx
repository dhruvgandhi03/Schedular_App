import Button from "@mui/material/Button";
import Sc_logo from "../../assets/schedular.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// import visible from "@mui/icons-material/VisibilityOutlined";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpass, setShowpass] = useState(false);

  const Nav = useNavigate();

  const LoginClicked = async (e) => {
    e.preventDefault();

    setShowpass(!showpass);
    // console.log("button works");
    const res = await fetch("/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    console.log(res.status);

    if (res.status === 404) {
      window.alert("fill the data properly");
    } else if (res.status === 400) {
      window.alert("Invalid Credentials");
    } else if (res.status === 200) {
      Nav("/home/homepage");
      window.alert("Successfully Logged In");
    }
  };

  return (
    <>
      <div className="h-screen w-screen bg-stone-950 flex items-center justify-center flex-col">
        <img src={Sc_logo} alt="" className="" height="250px" width="750px" />
        <div className="h-80 w-72  flex justify-around flex-col  shadow-lg rounded-lg p-10 items-center border-2 border-pink-800">
          <h1 className="text-4xl font-apple  font-semibold text-white relative bottom-5 ">
            Login
          </h1>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 0 },
              "& .MuiInputBase-root": {
                color: "white",
              },
              "& .MuiFormLabel-root": {
                color: "white",
              },
              "& .MuiFormLabel-root.Mui-focused": {
                color: "white",
              },
            }}
          >
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              name="email"
              label="Email ID"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 0 },
              "& .MuiInputBase-root": {
                color: "white",
              },
              "& .MuiFormLabel-root": {
                color: "white",
              },
              "& .MuiFormLabel-root.Mui-focused": {
                color: "white",
              },
            }}
          >
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </Box>

          <Button
            variant="contained"
            className="w-28 relative top-6"
            color="primary"
            onClick={LoginClicked}
          >
            Log In
          </Button>
        </div>
        <h3 className="text-white">
          Do not have an account ?{" "}
          <Link to="/signup" className="text-blue-500 underline">
            Sign Up
          </Link>
        </h3>
      </div>
    </>
  );
};

export default LoginPage;
