import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Slide from "@material-ui/core/Slide";
import Button from "../../styled-components/basics/button";

import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import { compose } from "redux";
import { withTranslation } from "react-i18next";

import LanguageChange from "../Language-change";

import "./Header.scss";
import ThemeChange from "../Theme-change";

function smoothScrollTop() {
	window.scroll({
		top: 0,
		left: 0,
		behavior: "smooth"
	});
}

interface IHeaderProps extends RouteComponentProps {
	t: (nameSpace: string) => string;
}

const Header = (props: IHeaderProps) => {
	const { t } = props;

	let [isScrolled, setIsScrolled] = useState(false);

	function handleScroll() {
		if (window.scrollY !== 0) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	}

	document.addEventListener("scroll", handleScroll);

	const handleChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
		props.history.push(newValue);
	};

	const pathname = props.location.pathname.includes("architect")
		? "/search"
		: props.location.pathname;

	return (
		<header className="header">
			<Link to="/" className="header__link">
				<h1>{t("header.title")}</h1>
			</Link>
			<Paper square>
				<Tabs
					value={pathname}
					indicatorColor="primary"
					textColor="primary"
					onChange={handleChange}
					aria-label="disabled tabs example"
				>
					<Tab label={t("header.homeTab")} value="/" />

					<Tab label={t("header.searchTab")} value="/search" />

					<Tab label={t("header.worklogTab")} value="/worklog" />
				</Tabs>
			</Paper>
			<div className="header__btn-scroll-top" onClick={smoothScrollTop}>
				<Slide direction={"up"} in={isScrolled} mountOnEnter unmountOnExit>
					<Button variant="contained" color="primary">
						{t("up")}
					</Button>
				</Slide>
			</div>
			<LanguageChange />
			<ThemeChange />
		</header>
	);
};

export default compose(
	withRouter,
	withTranslation("common")
)(Header) as React.ComponentType;
