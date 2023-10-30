import { AppBar, Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

import LogoImage from "/logo.svg";

const AppBarComponent = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      variant="outlined"
      color="transparent"
      className="h-24 flex justify-center items-center px-6 py-1"
    >
      <Toolbar className="space-x-6 w-full max-w-[95rem]">
        <img src={LogoImage} className="h-full mr-auto" />

        <Button
          color="inherit"
          className="normal-case p-2 px-5 rounded-lg"
          onClick={() => navigate("/")}
        >
          Home
        </Button>

        <Button
          color="inherit"
          className="normal-case p-2 px-5 rounded-lg"
          onClick={() => navigate("/about-us")}
        >
          About Us
        </Button>
        <Button
          className="normal-case p-2 px-5 bg-blue-500 rounded-lg"
          variant="contained"
          onClick={() => navigate("/get")}
        >
          Get the Extension
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
