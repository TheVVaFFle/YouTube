import React, { useState } from "react";

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const [toggled, setToggled] = useState<boolean>(false);

  return (
    <div id="youtube-sidebar">
      
    </div>
  );
};
