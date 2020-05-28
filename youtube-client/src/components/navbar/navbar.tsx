import React from "react";

interface NavbarProps {
  toggleSideNav: () => void;
}

export const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  return (
    <div id="youtube-navbar">
      <button id="youtube-side-nav-toggle" onClick={props.toggleSideNav}>
        <i className="fas fa-bars" />
      </button>
      <div id="youtube-logo">
        <div id="youtube-logo-icon">
          <i className="fab fa-youtube" />
        </div>
        <div id="youtube-logo-text">
          <h1>YouTube</h1>
        </div>
        <div id="youtube-search-bar">
          <input id="youtube-search-bar-input" type="text" placeholder="Search" />
          <button id="youtube-search-bar-button" type="button">
            <i className="fas fa-search" />
          </button>
        </div>
        <div id="youtube-navbar-functions">
          <div className="navbar-function">
            <i className="fas fa-video" />
          </div>
          <div className="navbar-function">
            <i className="fas fa-th" />
          </div>
          <div className="navbar-function">
            <i className="fas fa-bell" />
          </div>
          <div className="navbar-function">
            <img src="/img/profile.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
