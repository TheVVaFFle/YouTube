import React, { useState } from "react";

import { Navbar } from "../navbar/navbar";
import { SideNav } from "../sideNav/sideNav";
import { VideoLink } from "../videoLink/videoLink";

interface AppProps {}

export const App: React.FC<AppProps> = (props: AppProps) => {
  const [sideNavToggled, toggleSideNav] = useState<boolean>(false);

  return (
    <div id="youtube-app">
      <Navbar 
        toggleSideNav={() => toggleSideNav(!sideNavToggled)}
      />
      <SideNav toggled={sideNavToggled}/>
      <VideoLink />
    </div>
  );
};
