import AppBarComponent from "../../components/AppBarComponent";
import Panel1 from "./Panel1";
import TryOutPanel from "./TryOutPanel";
import Panel2 from "./Panel2";

import FooterComponent from "../../components/FooterComponent";

const Break = () => {
  return <div className="h-[1px] bg-[rgb(229,234,242)] w-full"></div>
}

const HomePage = () => {
  return (
    <div>
      <AppBarComponent />

      <div className="flex flex-col items-center space-y-24">
        <Panel1 />
        <Break />
        <TryOutPanel />
        <Break />
        <Panel2 />
        <FooterComponent />
      </div>
    </div>
  );
};

export default HomePage;
