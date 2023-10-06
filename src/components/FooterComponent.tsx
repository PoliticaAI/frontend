import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="h-32 w-full rounded-b-xl border-0 border-t-[1px] border-[rgb(229,234,242)] border-solid flex justify-center py-8">
      <div className="h-full w-full max-w-[95rem]">
        <Typography className="font-bold mb-4 text-blue-600">Political Spectrum</Typography>
        <Link to="/about-us" className="hover:text-blue-500 text-gray-900">
          <Typography className="mb-4">About Us</Typography>
        </Link>
        <Link to="/get" className="hover:text-blue-500 text-gray-900">
          <Typography className="mb-4">Get the Extension</Typography>
        </Link>
      </div>
    </div>
  );
};

export default FooterComponent;
