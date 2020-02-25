import React from "react";
import Developer from "../Developer";
import "./DevelopersTeam.scss";
import { withTranslation } from "react-i18next";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

interface IDevelopersTeamProps {
	t: (namespace: string) => object;
}

function DevelopersTeam({ t }: IDevelopersTeamProps) {
	return (
		<section className={"developers-team"}>
			<Grid container justify="center" alignContent="center" spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h2" component="h2" gutterBottom>
						{t("developersTeam.heading")}
					</Typography>
				</Grid>
				<Grid item xs={"auto"} sm={"auto"} md={4}>
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
				</Grid>
				<Grid item xs={"auto"} sm={"auto"} md={4}>
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
				</Grid>
				<Grid item xs={"auto"} sm={"auto"} md={4}>
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
				</Grid>
				<Grid item xs={"auto"} sm={"auto"} md={4}>
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
				</Grid>
				<Grid item xs={"auto"} sm={"auto"} md={4}>
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
				</Grid>
				<Grid item xs={"auto"} sm={"auto"} md={4}>
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
				</Grid>
			</Grid>
		</section>
	);
}

export default withTranslation("common")(DevelopersTeam);
