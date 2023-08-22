import { useEffect } from "react";

import { Box } from "@mui/material";

import getHistoricalRatings from "./api/getHistoricalRatings";
import getLeaning from "./api/getLeaning";
import getSummary from "./api/getSummary";

const App = () => {
  useEffect(() => {
    (async () => {
      const testUrl = new URL("https://apnews.com/article/washington-state-wildfires-deaths-inslee-biden-e4a51c18425ac4576f44870db2ee8aef");
      
      console.log(await getHistoricalRatings(testUrl));
      console.log(await getLeaning(testUrl));
      console.log(await getSummary(testUrl))
    })();
  }, []);


  return (
    <Box className="w-full h-full flex justify-center items-center bg-slate-900">
      <Box className="p-7 rounded-lg bg-blue-800 text-white text-4xl text-center">
        Tailwind CSS with MUI on Vite!
        <br />
        <span className="text-xl text-gray-400">wooo!!</span>
      </Box>
    </Box>
  );
}

export default App;
