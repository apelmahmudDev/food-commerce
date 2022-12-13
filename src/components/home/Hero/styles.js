import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
	heroBanner: {
		"& > img": {
			width: "100%",
			height: "auto",
			display: "block",
			object: "cover",
		},
	},
}));
