import { ReactNode, createElement } from "react";
import { Card, Typography } from "@mui/material";

import WaveImage from "../../assets/wave thing.svg";
import MagicIcon from "@mui/icons-material/AutoFixHigh";
import PublicIcon from "@mui/icons-material/Public";
import ArticleIcon from "@mui/icons-material/Article";

const InfoCard = ({
  icon,
  children,
}: {
  icon: typeof PublicIcon;
  children?: ReactNode;
}) => {
  return (
    <Card className="pb-10 2xl:h-72 w-64 p-5 bg-blue-600">
      {createElement(icon, {
        className: "text-white text-[5rem] -ml-1",
      })}
      <Typography className="text-white mt-4">{children}</Typography>
    </Card>
  );
};

const Panel3 = () => {
  return (
    <div className="bg-blue-500">
      <img src={WaveImage} className="-mt-20 w-full h-20 select-none" />
      <div className="flex justify-center">
        <div className="mt-24 mb-24 h-[calc(100vh-500px)] min-h-[35rem] w-full max-w-[95rem] flex justify-center">
          <div className="w-9/12 flex flex-col justify-center mr-8 p-8">
            <Typography className="text-5xl text-white font-bold mb-12 2xl:mb-16 text-center">
              Why Us?
            </Typography>

            <div className="w-full flex flex-row space-x-10 justify-around">
              <InfoCard icon={MagicIcon}>
                <strong>Accurate, direct analysis</strong>
                <br />
                <br />
                Get personalized insights based on articles' content, analyzed
                using world-class AI models.
              </InfoCard>

              <InfoCard icon={PublicIcon}>
                <strong>Available anywhere and everywhere</strong>
                <br />
                <br />
                Our extension works on millions of articles, accessible at the
                click of a button.
              </InfoCard>

              <InfoCard icon={ArticleIcon}>
                <strong>Automatic reasoning generation</strong>
                <br />
                <br />
                Reasoning for bias ratings is automatically generated by AI,
                giving support for its analysis.
              </InfoCard>
            </div>
          </div>
        </div>
      </div>
      <img
        src={WaveImage}
        className="-mb-20 w-full h-20 -scale-100 select-none"
      />
    </div>
  );
};

export default Panel3;