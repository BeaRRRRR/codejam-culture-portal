import React from "react";
import "./SelfEvaluation.scss";
import SelfEvaluationList from "../Self-evaluation-list";
import { Paper } from "@material-ui/core";

type dataScope = {
	scope: string;
	points: number;
	items: Array<dataItem>;
};

type dataItem = {
	points: number;
	text: string;
};

type Props = {
	data: Array<dataScope>;
	t: (namespace: string) => string;
};

const SelfEvaluation = (props: Props) => {
	const { data, t } = props;

	return (
		<section className="self-evaluation">
			<h2 className="self-evaluation__heading">{t("selfEvaluation")}</h2>
			<Paper className="self-evaluation__paper">
				{data.map((el, i) => {
					const { items } = el;

					return (
						<div key={i}>
							<h2 className="self-evaluation__scope">
								{el.scope} - {el.points}
							</h2>
							<SelfEvaluationList items={items} />
						</div>
					);
				})}
			</Paper>
		</section>
	);
};

export default SelfEvaluation;
