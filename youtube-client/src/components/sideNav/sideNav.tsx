import React, { useState } from "react";
import classNames from "classnames";

interface SideNavButtonProps {
  icon: string;
  label: string;
}

const SideNavButton: React.FC<SideNavButtonProps> = (props: SideNavButtonProps) => {
  return(
    <button className="side-nav-button">
      <i className={props.icon} />
      <h1>{props.label}</h1>
    </button>
  )
}

interface SideNavGroupProps {
  id?: string;
  title?: string;
  children: JSX.Element | JSX.Element[];
}

const SideNavGroup: React.FC<SideNavGroupProps> = (props: SideNavGroupProps) => {
  const getTitle = (): JSX.Element | null => {
    if(props.title){
      return(
        <div className="side-nav-group-title">
          <h1>{props.title}</h1>
        </div>
      )
    }

    return null;
  }

  return(
    <div id={props.id} className="side-nav-group">
      {getTitle()}
      {props.children}
    </div>
  )
}

interface SideNavProps {
  toggled: boolean;
}

export const SideNav: React.FC<SideNavProps> = (props: SideNavProps) => {
  const getYouTubeSideNavButtons = (): JSX.Element => {
    if(!props.toggled){
      return(
        <div id="youtube-side-nav-buttons">
          <SideNavButton icon="fas fa-home" label="Home" />
          <SideNavButton icon="fas fa-fire" label="Trending" />
          <SideNavButton icon="fas fa-th-list" label="Subscriptions" />
          <SideNavButton icon="fab fa-youtube" label="Originals" />
          <SideNavButton icon="fas fa-book-open" label="Library" />
        </div>
      )
    }

    return null;
  }

  const getYouTubeSideNavExpandedContent = (): JSX.Element => {
    if(props.toggled){
      return(
        <div id="youtube-side-nav-expanded-content" className="scroll-bar">
          <SideNavGroup>
            <SideNavButton icon="fas fa-home" label="Home" />
            <SideNavButton icon="fas fa-fire" label="Trending" />
            <SideNavButton icon="fas fa-th-list" label="Subscriptions" />
            <SideNavButton icon="fab fa-youtube" label="Originals" />
          </SideNavGroup>
          <SideNavGroup>
            <SideNavButton icon="fas fa-book-open" label="Library" />
            <SideNavButton icon="fas fa-history" label="History" />
            <SideNavButton icon="far fa-caret-square-right" label="Your videos" />
            <SideNavButton icon="fas fa-tag" label="Purchases" />
            <SideNavButton icon="fas fa-clock" label="Watch later" />
          </SideNavGroup>
          <SideNavGroup id="subscriptions-side-nav-group" title="Subscriptions">
            <SideNavButton icon="fas fa-fire-alt" label="Popular on YouTube" />
            <SideNavButton icon="fas fa-music" label="Music" />
            <SideNavButton icon="fas fa-futbol" label="Sports" />
            <SideNavButton icon="fas fa-gamepad" label="Gaming" />
          </SideNavGroup>
          <SideNavGroup title="More From YouTube">
            <SideNavButton icon="fas fa-film" label="Movies & Shows" />
            <SideNavButton icon="fas fa-gamepad" label="Gaming" />
            <SideNavButton icon="fas fa-podcast" label="Live" />
            <SideNavButton icon="fas fa-tshirt" label="Fashion & Beauty" />
            <SideNavButton icon="fas fa-lightbulb" label="Learning" />
          </SideNavGroup>
          <SideNavGroup>
            <SideNavButton icon="fas fa-cog" label="Settings" />
            <SideNavButton icon="fas fa-flag" label="Report history" />
            <SideNavButton icon="fas fa-flag" label="Help" />
            <SideNavButton icon="fas fa-comment" label="Send feedback" />
          </SideNavGroup>
        </div>
      )
    }

    return null;
  }

  return (
    <div id="youtube-side-nav" className={classNames({ toggled: props.toggled })}>
      {getYouTubeSideNavButtons()}
      {getYouTubeSideNavExpandedContent()}
    </div>
  );
};
