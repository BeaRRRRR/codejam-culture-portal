import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { withTranslation } from "react-i18next";

import DifficultyList from "../DifficultyList";

interface IMainDifficulties {
	t(namespace: string): string;
}

function MainDifficulties({ t }: IMainDifficulties) {
	return (
		<Box component="section" className="main-difficulties">
			<Typography variant="h4" component="h2">
				{t("mainDifficulties")}
			</Typography>
			<DifficultyList
				difficulties={[
					{
						name: "Problem1",
						description:
							"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore laboriosam magni nihil obcaecati pariatur voluptas! Accusantium aperiam architecto autem dicta eaque nam, officiis perspiciatis quam quidem, sint soluta ut voluptates!"
					},
					{
						name: "Problem2",
						description:
							"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores distinctio esse et, fugit harum in incidunt inventore libero magni modi odit quod rerum sapiente sequi sunt tempore veniam vero."
					},
					{
						name: "Problem3",
						description:
							"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis consectetur corporis deserunt dicta, dignissimos eius eligendi esse ex fuga hic inventore ipsa nam, nesciunt nobis quasi, quibusdam reprehenderit sunt."
					}
				]}
			/>
		</Box>
	);
}

export default withTranslation("common")(MainDifficulties);
