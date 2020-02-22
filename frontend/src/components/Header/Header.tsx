import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import { compose } from "redux";
import { withTranslation } from "react-i18next";

import LanguageChange from "../Language-change";

import "./Header.scss";

interface IHeaderProps extends RouteComponentProps {
	t: (nameSpace: string) => object;
}

const Header = (props: IHeaderProps) => {
	const handleChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
		props.history.push(newValue);
	};

	const { t } = props;

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
					<Tab label="Home" value="/" />

					<Tab label="Search" value="/search" />

					<Tab label="Worklog" value="/worklog" />
				</Tabs>
			</Paper>
			<LanguageChange />
		</header>
	);
};

export default compose(
	withRouter,
	withTranslation("common")
)(Header) as React.ComponentType;
