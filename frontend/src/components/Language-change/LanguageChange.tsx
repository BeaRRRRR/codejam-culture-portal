import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { withTranslation } from "react-i18next";

import "./LanguageChange.scss";

const useStyles = makeStyles(() =>
	createStyles({
		active: {
			background: "red"
		}
	})
);

interface ILanguageChangeProps {
	i18n: { changeLanguage: (lang: string) => object };
}

function LanguageChange(props: ILanguageChangeProps) {
	const classes = useStyles();
	const { i18n } = props;
	console.log("buttons ", props);
	return (
		<ButtonGroup
			className="button-group"
			color="primary"
			aria-label="outlined primary button group"
		>
			<Button
				className={classes.active}
				onClick={() => i18n.changeLanguage("en")}
			>
				En
			</Button>
			<Button onClick={() => i18n.changeLanguage("ru")}>Ru</Button>
			<Button>Be</Button>
		</ButtonGroup>
	);
}

export default withTranslation("common")(LanguageChange);
