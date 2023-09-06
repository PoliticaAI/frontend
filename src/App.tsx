import { useEffect } from "react";

import { Box } from "@mui/material";

import getHistoricalRatings from "./api/getHistoricalRatings";
import getLeaning from "./api/getLeaning";
import getSummary from "./api/getSummary";
import HomePage from "./pages/HomePage";

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
    <HomePage />
  );
}

export default App;
