import React from "react";
import Feeds from "../feeds/feeds";
import Hots from "../hots/hots";

const Homepage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <Hots />
      </div>
      <Feeds />
    </div>
  );
};

export default Homepage;
