import React, { useState, useEffect } from "react";
import { Button, LinearProgress, TextField, Typography } from "@mui/material";
import { startAnalysis, checkAnalysisStatus, ArticleAnalysis } from "../../api/analysis.api";

const TryOutPanel = () => {
  const [link, setLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ArticleAnalysis | null>(null);
  const [progress, setProgress] = useState<number | null>(null);

  useEffect(() => {
    const processId = localStorage.getItem("process_id");

    if (processId && isLoading) {
      const intervalId = setInterval(() => {
        checkAnalysisStatus()
          .then((statusData) => {
            if (statusData.result) {
              setData(statusData.result);
              setIsLoading(false);
              clearInterval(intervalId);
            } else {
              console.log("Analysis status:", statusData.status);
              setProgress(statusData.progress);
            }
          })
          .catch((error) => {
            console.error("Error checking analysis status:", error);
          });
      }, 1000);
    }
  }, [isLoading]);

  const handleAnalyzeClick = () => {
    setProgress(0);
    setIsLoading(true);

    startAnalysis(link)
      .then((startData) => {
        localStorage.setItem("process_id", startData.process_id);
      })
      .catch((error) => {
        console.error("Error starting analysis:", error);
        setIsLoading(false);
      });
  };

  return (
    <div className=" w-full max-w-[95rem] flex flex-col items-center">
      <Typography className="text-4xl text-blue-500 font-bold mb-8">
        Try it out
      </Typography>

      <TextField
        className="w-72 mb-4"
        label="Enter a link"
        variant="outlined"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleAnalyzeClick}
        disabled={isLoading}
        className="mb-4"
      >
        {isLoading ? "Analyzing..." : "Analyze"}
      </Button>

      {isLoading && (
        <LinearProgress
          variant="determinate"
          value={progress ? (progress + 1) * 20 : 0}
          className="h-8 w-96"
        />
      )}

      {data && (
        <div>
          <Typography variant="h5">Analysis Result</Typography>
          {/* Display your data here */}
          <Typography>{JSON.stringify(data, null, 2)}</Typography>
        </div>
      )}
    </div>
    // <div>
    //   <TextField
    //     fullWidth
    //     label="Enter a Link"
    //     variant="outlined"
    //     value={link}
    //     onChange={(e) => setLink(e.target.value)}
    //   />
    //   <br />
    //   <Button
    //     variant="contained"
    //     color="primary"
    //     onClick={handleAnalyzeClick}
    //     disabled={isLoading}
    //   >
    //     {isLoading ? (
    //       <>
    //         {progress !== null ? (
    //           <LinearProgress variant="determinate" value={progress * 25} />
    //         ) : (
    //           <LinearProgress />
    //         )}
    //       </>
    //     ) : (
    //       "Analyze"
    //     )}
    //   </Button>

    //   {data && (
    //     <div>
    //       <h2>Analysis Result</h2>
    //       {/* Display your data here */}
    //       <pre>{JSON.stringify(data, null, 2)}</pre>
    //     </div>
    //   )}
    // </div>
  );
};

export default TryOutPanel;
