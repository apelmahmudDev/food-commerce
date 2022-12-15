import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import AppLogo from "../../assets/images/brand-logo.svg";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";

const pages = [
	{ page: "Home", link: "/home" },
	{ page: "Pages", link: "/pages" },
	{ page: "Shops", link: "/shops" },
	{ page: "Blog", link: "/blog" },
];

function Navbar() {
	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar
			position="static"
			sx={{ bgcolor: (theme) => theme.palette.common.white }}
		>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					{/* Logo for large screen */}
					<Box
						variant="h6"
						noWrap
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						<img src={AppLogo} alt="logo" />
					</Box>

					{/* menu for small screen */}
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page.page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page.page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					{/* logo for small screen */}
					<Box
						noWrap
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						<img src={AppLogo} alt="logo" />
					</Box>

					{/* menu for large screen */}
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map((page) => (
							<Link to={page.link}>
								<Button
									key={page.page}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: "text.primary", display: "block" }}
								>
									{page.page}
								</Button>
							</Link>
						))}
					</Box>

					{/* cart */}
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open cart">
							<Link to="/cart">
								<Badge badgeContent={0} color="primary">
									<ShoppingCartIcon color="action" />
								</Badge>
							</Link>
						</Tooltip>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Navbar;
