import { Button, Typography } from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";

const ExtensionFrame = () => {
  return (
    <iframe
      src="http://127.0.0.1:5172?embedded"
      className="w-[400px] h-[500px] 2xl:w-[500px] 2xl:h-[750px] overflow-hidden border-1 border-solid border-slate-300 rounded-lg"
    />
  );
};

const Panel1 = () => {
  const phrases = ["truth", "factuality", "new viewpoints", "information"];
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <div className="h-[calc(100vh-200px)] min-h-[35rem] w-full max-w-[95rem] flex">
        <div className="w-2/5 flex flex-col justify-center mr-8 p-8">
          <Typography
            variant="h2"
            className="mb-8 font-bold xl:text-6xl text-5xl"
          >
            Your source of <br />
            <span className="text-blue-500 font-extrabold">
              <Typewriter
                words={phrases}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </span>
          </Typography>
          <Typography mb="2rem" className="w-96 text-slate-600">
            Using state-of-the-art Artifical Intelligence systems, Politica
            allows for instant bias, factuality, and trustworthiness ratings on
            millions of articles.
          </Typography>
          <Button
            className="normal-case w-52 py-3 rounded-xl bg-blue-500"
            variant="contained"
            endIcon={<ChevronRightIcon />}
            onClick={() => navigate("/get")}
          >
            Get The Extension
          </Button>
        </div>
        <div
          className="w-3/5 flex items-center justify-center rounded-b-xl border-0 border-b-2 border-l-2 border-[rgb(229,234,242)] border-solid"
          style={{
            background: "#f2f7fc",
          }}
        >
          <ExtensionFrame />
        </div>
      </div>
    </div>
  );
};

export default Panel1;
