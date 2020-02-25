import React, { ReactElement } from "react";
import "./Worklog.scss";
import TimeSpent from "../../components/Time-spent";
import MainDifficulties from "../../components/Main-difficulties";
import SelfEvaluation from "../../components/Self-evaluation";
import { withTranslation } from "react-i18next";

interface IWorklogProps {
	t: (namespace: string) => string;
}

const Worklog = ({ t }: IWorklogProps): ReactElement => {
	const selfEvaluationData = [
		{
			scope: t("minScope.header"),
			points: 50,
			items: [
				{
					points: 10,
					text: t("minScope.text1")
				},
				{
					points: 10,
					text: t("minScope.text2")
				},
				{
					points: 10,
					text: t("minScope.text3")
				},
				{
					points: 20,
					text: t("minScope.text4")
				}
			]
		},
		{
			scope: t("normalScope.header"),
			points: 140,
			items: [
				{
					points: 20,
					text: t("normalScope.text1")
				},
				{
					points: 10,
					text: t("normalScope.text2")
				},
				{
					points: 10,
					text: t("normalScope.text3")
				},
				{
					points: 20,
					text: t("normalScope.text4")
				},
				{
					points: 10,
					text: t("normalScope.text5")
				},
				{
					points: 20,
					text: t("normalScope.text6")
				},
				{
					points: 10,
					text: t("normalScope.text7")
				},
				{
					points: 20,
					text: t("normalScope.text8")
				},
				{
					points: 20,
					text: t("normalScope.text9")
				},
				{
					points: 10,
					text: t("normalScope.text10")
				}
			]
		},
		{
			scope: t("extraScope.header"),
			points: 70,
			items: [
				{
					points: 10,
					text: t("extraScope.text1")
				},
				{
					points: 10,
					text: t("extraScope.text2")
				},
				{
					points: 10,
					text: t("extraScope.text3")
				},
				{
					points: 20,
					text: t("extraScope.text4")
				},
				{
					points: 20,
					text: t("extraScope.text5")
				},
				{
					points: 20,
					text: t("extraScope.text6")
				}
			]
		}
	];

	return (
		<div className={"worklog"}>
			<TimeSpent />
			<MainDifficulties />
			<SelfEvaluation data={selfEvaluationData} t={t} />
		</div>
	);
};

export default withTranslation("common")(Worklog);
