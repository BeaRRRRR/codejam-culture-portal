import React from "react";
import Developer from "../Developer";
import "./DevelopersTeam.scss";
import { withTranslation } from "react-i18next";

interface IDevelopersTeamProps {
	t: (namespace: string) => object;
}

function DevelopersTeam({ t }: IDevelopersTeamProps) {
	return (
		<section className={"developers-team"}>
			<h2 className={"developers-team__heading"}>
				{t("developersTeam.heading")}
			</h2>
			<div className={"developers-team__container"}>
				<Developer
					name={"Alex_F"}
					linkToGithub={"https://github.com/AlexanderFraltsov"}
					linkToImage={
						"https://avatars3.githubusercontent.com/u/48531801?s=460&v=4"
					}
					contribution={
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, corporis impedit inventore quia soluta velit voluptas. A aliquid dolorem eaque, enim error illo maiores natus numquam porro ratione ullam, velit?"
					}
				/>
				<Developer
					name={"Pavel Burya"}
					linkToGithub={"https://github.com/Pburua"}
					linkToImage={
						"https://avatars2.githubusercontent.com/u/49410961?s=400&v=4"
					}
					contribution={
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, corporis impedit inventore quia soluta velit voluptas. A aliquid dolorem eaque, enim error illo maiores natus numquam porro ratione ullam, velit?"
					}
				/>
				<Developer
					name={"Vitali Satsura"}
					linkToGithub={"https://github.com/vitali-satsura"}
					linkToImage={
						"https://avatars0.githubusercontent.com/u/34774841?s=460&v=4"
					}
					contribution={
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, corporis impedit inventore quia soluta velit voluptas. A aliquid dolorem eaque, enim error illo maiores natus numquam porro ratione ullam, velit?"
					}
				/>
				<Developer
					name={"wlukla"}
					linkToGithub={"https://github.com/wlukla"}
					linkToImage={
						"https://avatars3.githubusercontent.com/u/43970401?s=460&v=4"
					}
					contribution={
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, corporis impedit inventore quia soluta velit voluptas. A aliquid dolorem eaque, enim error illo maiores natus numquam porro ratione ullam, velit?"
					}
				/>
				<Developer
					name={"BeaRRRR"}
					linkToGithub={"https://github.com/BeaRRRRR"}
					linkToImage={
						"https://avatars3.githubusercontent.com/u/32522878?s=460&v=4"
					}
					contribution={
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, corporis impedit inventore quia soluta velit voluptas. A aliquid dolorem eaque, enim error illo maiores natus numquam porro ratione ullam, velit?"
					}
				/>
				<Developer
					name={"alex_andrews"}
					linkToGithub={"https://github.com/madjack99"}
					linkToImage={
						"https://avatars1.githubusercontent.com/u/8881601?s=460&v=4"
					}
					contribution={
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, corporis impedit inventore quia soluta velit voluptas. A aliquid dolorem eaque, enim error illo maiores natus numquam porro ratione ullam, velit?"
					}
				/>
			</div>
		</section>
	);
}

export default withTranslation("common")(DevelopersTeam);
