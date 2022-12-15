import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, IconButton, Typography } from "@mui/material";

// icons
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";

const CartTable = () => {
	return (
		<TableContainer component={Paper} elevation={4}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Product</TableCell>
						<TableCell align="right">Price</TableCell>
						<TableCell align="right">Quantity</TableCell>
						<TableCell align="right">Subtotal</TableCell>
						<TableCell align="right">Action</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
						<TableCell
							component="th"
							scope="row"
							sx={{ display: "flex", gap: 2, alignItems: "center" }}
						>
							<Avatar />
							<Typography>Margherita Pizza</Typography>
						</TableCell>
						<TableCell align="right">$234</TableCell>
						<TableCell
							align="right"
							sx={{ display: "flex", gap: 2, alignItems: "center" }}
						>
							<IconButton color="primary">
								<RemoveIcon />
							</IconButton>
							<Typography>1</Typography>
							<IconButton color="primary">
								<AddIcon />
							</IconButton>
						</TableCell>
						<TableCell align="right">3948</TableCell>
						<TableCell align="right">
							<IconButton variant="contained" color="primary">
								<CloseIcon />
							</IconButton>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default CartTable;
