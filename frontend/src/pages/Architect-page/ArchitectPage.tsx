import React from "react";

import BasicInfo from "../../components/Basic-info";
import Biography from "../../components/Biography";
import WorksList from "../../components/Works-list";
import Gallery from "../../components/Gallery";
import Youtube from "../../components/Youtube";

import "./ArchitectPage.scss";

function ArchitectPage() {
  return (
    <div>
      <BasicInfo />
      <Biography />
      <WorksList />
      <Gallery />
      <Youtube src='k4MWgNsxd_c' />
    </div>
  );
}

export default ArchitectPage;
