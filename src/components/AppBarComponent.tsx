import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AppBarComponent = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      variant="outlined"
      color="transparent"
      className="h-24 flex justify-center items-center p-6"
    >
      <Toolbar className="space-x-6 w-full max-w-[95rem]">
        <Typography
          variant="h4"
          fontWeight={400}
          component="div"
          className="text-blue-600 flex-1"
        >
          Political Spectrum
        </Typography>

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
