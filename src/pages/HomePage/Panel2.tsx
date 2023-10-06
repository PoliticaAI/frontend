import { Typography } from "@mui/material";

const Panel2 = () => {
  return (
    <div className="h-[calc(100vh-500px)] min-h-[35rem] w-full max-w-[95rem] flex">
      <div className="w-3/5 flex flex-col justify-center mr-8 p-8 bg-blue-500">
        <Typography>
          Get instant political bias ratings on any article.
        </Typography>
      </div>
      <div className="w-2/5 flex items-center justify-center bg-green-500"></div>
    </div>
  );
};

export default Panel2;
