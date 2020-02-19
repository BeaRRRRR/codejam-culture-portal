import React, { useEffect } from "react";

import AuthorService from "../../services/authorService";

import BasicInfo from "../../components/Basic-info";
import Biography from "../../components/Biography";
import WorksList from "../../components/Works-list";
import Gallery from "../../components/Gallery";
import Youtube from "../../components/Youtube";

import "./ArchitectPage.scss";

function ArchitectPage() {
	const authorService = new AuthorService();

	useEffect(() => {
		authorService
			.getAuthor("5aXGlpoXkVSBdlBgNXDxwX")
			.then(data => console.log(data));
	}, []);

	return (
		<div>
			<BasicInfo />
			<Biography />
			<WorksList />
			<Gallery />
			<Youtube src="k4MWgNsxd_c" />
		</div>
	);
}

export default ArchitectPage;
