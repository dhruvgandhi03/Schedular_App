import Button from "@mui/material/Button";
import Sc_logo from "../../assets/schedular.png";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  let name, value;

  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const SignupClicked = async (e) => {
    console.log("working");
    e.preventDefault();

    const { name, email, password } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    if (res.status === 400) {
      window.alert("Fill the data properly");
    } else if (res.status === 422) {
      window.alert("Email Already Exist");
    } else if (res.status === 200) {
      window.alert("registration successful");
    }

    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      {" "}
      <div className="h-screen w-screen bg-stone-950 flex items-center justify-center flex-col">
        <img src={Sc_logo} alt="" className="" height="250px" width="750px" />
        <div className="h-96 w-auto bg-stone-900 flex justify-around flex-col  shadow-lg rounded-lg p-10 items-center">
          <h1 className="text-4xl font-apple  font-semibold text-white relative bottom-5 ">
            Sign Up
          </h1>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 1 },
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
              name="name"
              value={user.name}
              label="Name"
              onChange={handleInput}
              style={{ width: "15rem" }}
              type="name"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 1 },
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
              value={user.email}
              onChange={handleInput}
              style={{ width: "15rem" }}
              type="email"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 1 },
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
              value={user.password}
              onChange={handleInput}
              type="password"
              style={{ width: "15rem" }}
            />
          </Box>

          <Button
            variant="contained"
            className="w-28 relative top-6"
            color="primary"
            onClick={SignupClicked}
          >
            Sign Up
          </Button>
        </div>
        <h3 className="text-white">
          Already have an account ?{" "}
          <Link to="/" className="text-blue-500 underline">
            Log in
          </Link>
        </h3>
      </div>
    </>
  );
};

export default SignupPage;
