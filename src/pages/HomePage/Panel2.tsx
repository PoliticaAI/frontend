import { Typography } from "@mui/material";

const Panel2 = () => {
  return (
    <div className="h-[calc(100vh-500px)] min-h-[35rem] w-full max-w-[95rem] flex">
      <div className="w-2/5 flex flex-col justify-center mr-8 p-8">
        <Typography className="text-4xl text-blue-500 font-bold mb-4">
          World-Class Models
        </Typography>

        <Typography>
          help me
        </Typography>
      </div>
      <div className="w-3/5 flex items-center justify-center bg-green-500"></div>
    </div>
  );
};

export default Panel2;
