import React, { useState, useEffect } from 'react';
import { Button, LinearProgress, TextField } from '@mui/material';
import { startAnalysis, checkAnalysisStatus } from '../api/analysis.api'; // Import your API functions

function AnalyzeForm() {
  const [link, setLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any | null>(null);
  const [progress, setProgress] = useState<number | null>(null);

  useEffect(() => {
    const processId = localStorage.getItem('process_id');

    if (processId && isLoading) {
      const intervalId = setInterval(() => {
        checkAnalysisStatus()
          .then((statusData) => {
            if (statusData.status === 'completed') {
              setData(statusData.result);
              setIsLoading(false);
              clearInterval(intervalId);
            } else {
              console.log('Analysis status:', statusData.status);
              setProgress(statusData.progress)
            }
          })
          .catch((error) => {
            console.error('Error checking analysis status:', error);
          });
      }, 1000);
    }
  }, [isLoading]);

  const handleAnalyzeClick = () => {
    setIsLoading(true);

    startAnalysis(link)
      .then((startData) => {
        localStorage.setItem('process_id', startData.process_id);
      })
      .catch((error) => {
        console.error('Error starting analysis:', error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <TextField
        fullWidth
        label="Enter a Link"
        variant="outlined"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAnalyzeClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            {progress !== null ? (
              <LinearProgress variant="determinate" value={progress * 25} />
            ) : (
              <LinearProgress />
            )}
          </>
        ) : (
          'Analyze'
        )}
      </Button>

      {data && (
        <div>
          <h2>Analysis Result</h2>
          {/* Display your data here */}
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default AnalyzeForm;
