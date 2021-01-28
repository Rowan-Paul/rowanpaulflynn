import { Fragment } from "react";

import { Introduction } from "./components/Introduction";
import { Bio } from "./components/Bio";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { DarkModeToggle } from "./components/DarkModeToggle";

function LandingPageUI() {
  return (
    <Fragment>
      <DarkModeToggle />
      <Introduction />
      <Bio />
      <Projects />
      <Contact />
    </Fragment>
  );
}

export const LandingPage = LandingPageUI;
