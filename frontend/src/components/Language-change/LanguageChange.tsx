import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import "./LanguageChange.scss";

function LanguageChange() {
	return (
		<ButtonGroup
			className="button-group"
			color="primary"
			aria-label="outlined primary button group"
		>
			<Button>En</Button>
			<Button>Ru</Button>
			<Button>Be</Button>
		</ButtonGroup>
	);
}

export default LanguageChange;
