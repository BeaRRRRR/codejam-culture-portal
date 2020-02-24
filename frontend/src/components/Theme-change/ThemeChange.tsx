import React, { MouseEvent } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { switchTheme } from "../../actions";
import { connect } from "react-redux";
import { compose } from "redux";
import { withTranslation } from "react-i18next";

import "./ThemeChange.scss";

const useStyles = makeStyles(() =>
	createStyles({
		active: {
			background: "red"
		}
	})
);

function ThemeChange(props) {
	const { t } = props;
	const classes = useStyles();
	let buttonNames = ["light", "dark"];
	let buttonText = [t("themeChange.light"), t("themeChange.dark")];
	let buttons: JSX.Element[] = [];

	function handleClick(e: MouseEvent<HTMLButtonElement>) {
		const selectedTheme: string = e.currentTarget.value;
		if (selectedTheme !== props.theme) {
			switchTheme(selectedTheme);
		}
	}

	buttonNames.map((buttonName, i) => {
		buttons.push(
			<Button
				onClick={handleClick}
				value={buttonName}
				key={buttonName}
				className={buttonName === props.theme ? classes.active : ""}
			>
				{buttonText[i]}
			</Button>
		);
	});

	return (
		<ButtonGroup
			className="theme-change-button-group"
			color="primary"
			aria-label="outlined primary button group"
		>
			{buttons}
		</ButtonGroup>
	);
}

function mapStateToProps(oldState) {
	return {
		theme: oldState.theme
	};
}

export default compose(
	connect(mapStateToProps),
	withTranslation("common")
)(ThemeChange) as React.ComponentType;
