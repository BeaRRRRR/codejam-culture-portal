import * as React from "react";

import Description from "../../components/Description";
import AuthorOfTheDay from "../../components/Author-of-the-day";
import DevelopersTeam from "../../components/Developers-team";

import "./HomePage.scss";

function HomePage() {
  return (
    <div className={"home-page"}>
      <Description />
      <AuthorOfTheDay />
      <DevelopersTeam />
    </div>
  );
}

export default HomePage;
