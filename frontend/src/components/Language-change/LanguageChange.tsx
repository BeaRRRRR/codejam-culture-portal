import React, { useEffect } from "react";
import { withTranslation } from "react-i18next";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab/";

import "./LanguageChange.scss";

interface ILanguageChangeProps {
	i18n: { changeLanguage: (lang: string) => object };
}

function LanguageChange(props: ILanguageChangeProps) {
	const { i18n } = props;

	const [language, setLanguage] = React.useState<string | null>("en");

	useEffect(() => {
		const savedLang = sessionStorage.getItem("lang");
		const lang = savedLang ? savedLang : "en";
		setLanguage(lang);
	}, []);

	const handleLanguageChange = (
		_event: React.MouseEvent<HTMLElement>,
		newLanguage: string
	) => {
		if (newLanguage !== null) {
			setLanguage(newLanguage);
			i18n.changeLanguage(newLanguage);
			sessionStorage.setItem("lang", newLanguage);
		}
	};

	const buttons = [
		{ value: "en", content: "en" },
		{ value: "ru", content: "ru" },
		{ value: "be", content: "be" }
	].map(({ value, content }) => {
		return (
			<ToggleButton value={value} key={value}>
				{content}
			</ToggleButton>
		);
	});

	return (
		<ToggleButtonGroup
			value={language}
			exclusive
			onChange={handleLanguageChange}
			className="button-group"
		>
			{buttons}
		</ToggleButtonGroup>
	);
}

export default withTranslation("common")(LanguageChange);
