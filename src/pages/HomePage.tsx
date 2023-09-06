import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const HomePage = () => {
  const phrases = ["truth", "factuality", "multiple perspectives"];

  return (
    <div>
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
          <Button color="inherit" className="normal-case p-2 px-5 rounded-lg">
            Home
          </Button>
          <Button color="inherit" className="normal-case p-2 px-5 rounded-lg">
            About Us
          </Button>
          <Button
            className="normal-case p-2 px-5 bg-blue-500 rounded-lg"
            variant="contained"
          >
            Get the Extension
          </Button>
        </Toolbar>
      </AppBar>

      <div className="h-full flex justify-center p-6">
        <div className="w-full max-w-[95rem] flex">
          <div className="w-2/5 flex flex-col justify-center mr-8">
            <Typography variant="h2" fontWeight={600} mb="2rem">
              A source of{" "}
              <span className="text-blue-500 font-extrabold">factuality</span>.
            </Typography>
            <Typography mb="2rem" className="w-96 text-slate-600">
              Using state-of-the-art Artifical Intelligence systems, Political
              Spectrum allows for instant bias, factuality, and trustworthiness
              ratings on millions of articles.
            </Typography>
            <Button
              className="w-52 px-3 py-3 rounded-xl bg-blue-500"
              variant="contained"
              endIcon={<ChevronRightIcon />}
            >
              Try it out now
            </Button>
          </div>
          <div
            className="w-3/5 flex items-center justify-end rounded-b-xl border-0 border-b-2 border-l-2 border-[rgb(229,234,242)] border-solid"
            style={{
              background: "#f2f7fc",
              
            }}
          >
            <div className="w-[25rem] h-[25rem] bg-white rounded-2xl p-8">
              <Typography
                variant="h5"
                fontWeight={600}
                className="text-slate-800"
              >
                Article Analysis
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
