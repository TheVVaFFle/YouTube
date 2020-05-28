import React from "react";

import { Navbar } from "../navbar/navbar";
import { Sidebar } from "../sidebar/sidebar";

interface AppProps {}

export const App: React.FC<AppProps> = (props: AppProps) => {
  return (
    <div id="youtube-app">
      <Navbar />
      <Sidebar />
    </div>
  );
};
