import { Typography } from "@mui/material";

import WaveImage from "../../assets/wave thing.svg";

const Panel2 = () => {
  return (
    <div className="bg-blue-500">
      <img src={WaveImage} className="-mt-20 w-full h-20" />
      <div className="flex justify-center">
        <div className="mt-32 mb-32 h-[calc(100vh-500px)] min-h-[35rem] w-full max-w-[95rem] flex justify-center">
          <div className="w-3/5 flex flex-col justify-center mr-8 p-8">
            <Typography className="text-5xl text-white font-bold mb-4">
              World-Class AI Models
            </Typography>

            <Typography className="text-white text-xl">
              We use industry-grade, <strong>world class</strong> AI models to
              analyze articles and provide the best information possible.
            </Typography>
          </div>
        </div>
      </div>
      <img src={WaveImage} className="-mb-20 w-full h-20 -scale-100" />
    </div>
  );
};

export default Panel2;
