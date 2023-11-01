import { Typography } from "@mui/material";
import { useEffect } from "react";

const link = "https://chrome.google.com/webstore/detail/politica/fggiidefiajobkombhabphkjndcbjnnf/";

const GetExtensionPage = () => {
  useEffect(() => {
    window.location.replace(link);
  }, []);

  return (
    <div className="p-10">
      <Typography>
        Your page is being loaded. If you aren't automatically redirected, click{" "}
        <a onClick={() => window.location.replace(link)}>here</a>.
      </Typography>
    </div>
  );
};

export default GetExtensionPage;
