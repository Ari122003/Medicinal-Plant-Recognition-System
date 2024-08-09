import React, { useState } from "react";
import {
	AppBar,
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	IconButton,
	InputBase,
	Paper,
	Toolbar,
	Typography,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { backButtonAtom } from "./recoil/atoms";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import sc from "./images/science.jpg";
import SearchIcon from "@mui/icons-material/Search";
import tulsi from "./images/tulsi.jpeg";
import neem from "./images/neem.webp";
import mango from "./images/mango.jpeg";
import aloe from "./images/aloe.jpg";
import axios from "axios";
import lg from "./images/logofront.png";

const ScientificNames = () => {
	const divStyle = {
		position: "relative",
		width: "100vw",
		height: "100vh",
	};

	const backgroundStyle = {
		backgroundImage: `url(${sc})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		width: "100%",
		height: "100%",
		minHieght: "130%",
	};

	const contentStyle = {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		display: "flex",
		flexWrap: "wrap",
		color: "white",
	};

	const [backButton, setBackButton] = useRecoilState(backButtonAtom);
	const [searchScientificNames, setSearchScientificNames] = useState("");
	const [pic, setpic] = useState();
	const [cardDisplay, setCardDisplay] = useState(false);
	const [cardDisplayName, setCardDisplayName] = useState();
	const [loader, setloader] = useState(false);

	const [names, setNames] = useState();

	const scientificNameHandler = async (e) => {
		e.preventDefault();
		setloader(true);
		const formData = new FormData();
		formData.append("text", searchScientificNames);
		try {
			await fetch("http://localhost:8000/image", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ Name: searchScientificNames }),
			})
				.then((res) => {
					return res.json();
				})
				.then((res) => {
					setpic(res[0].Image);
					setNames(res[0].Scientific_name);
					setloader(false);
				});
		} catch (error) {
			console.error(error);
		}
		console.log(searchScientificNames);
		setSearchScientificNames("");
	};

	const searchHandler = (e) => {
		setSearchScientificNames(e.target.value);
	};

	const cardDisplayHandler = () => {
		const name = searchScientificNames;
		setCardDisplayName(name);
		setCardDisplay(true);
	};
	return (
		<>
			<div style={divStyle}>
				<div style={backgroundStyle}></div>
				<div style={contentStyle}>
					<Box sx={{ flexGrow: 1 }}>
						<AppBar position="static">
							<Toolbar>
								<img src={lg} alt="logo" height="70px" width="70px"></img>
								<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
									AN INNOVATION OF MINISTRY OF AYUSH
								</Typography>
								<IconButton
									onClick={() => {
										setBackButton(true);
									}}>
									<ArrowBackIcon />
								</IconButton>
							</Toolbar>
						</AppBar>
						<Box sx={{ flexGrow: 1, mt: "1%" }}>
							<Paper
								elevation={16}
								sx={{ mt: 0.5, width: "60%", ml: "18%", height: "35px" }}>
								<InputBase
									sx={{ ml: 1, flex: 1 }}
									placeholder="Scientific Names..."
									inputProps={{ "aria-label": "search" }}
									value={searchScientificNames}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											e.preventDefault();
											cardDisplayHandler();
											scientificNameHandler(e);
										}
									}}
									onChange={searchHandler}
								/>
								<IconButton
									type="button"
									sx={{ p: "10px", float: "right" }}
									aria-label="search"
									onClick={(e) => {
										searchHandler(e);
										cardDisplayHandler();
										scientificNameHandler(e);
									}}>
									<SearchIcon />
								</IconButton>
								{loader == true ? (
									<div className="flex">
										<div className="spinner"></div>
									</div>
								) : (
									<div></div>
								)}
							</Paper>
							{cardDisplay && (
								<Card sx={{ maxWidth: 300, mt: 12, ml: "35%" }}>
									<CardActionArea>
										<CardMedia
											component="img"
											height="140"
											image={pic}
											alt="green iguana"
										/>
										<CardContent>
											<Typography gutterBottom variant="h5" component="div">
												{cardDisplayName}
											</Typography>
											<Typography gutterBottom variant="h5" component="div">
												{names}
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							)}
							<Box sx={{ flexGrow: 1, mt: "2%" }}>
								<Grid container spacing={0.5}>
									<Grid item xs={12} sm={3}>
										<Card sx={{ maxWidth: 345, mt: 0.5, ml: 2 }}>
											<CardActionArea>
												<CardMedia
													component="img"
													height="140"
													image={tulsi}
													alt="Tulsi"
												/>
												<CardContent>
													<Typography gutterBottom variant="h5" component="div">
														Tulsi
													</Typography>
													<Typography variant="body1" color="text.secondary">
														Ocimum tenuiflorum
													</Typography>
												</CardContent>
											</CardActionArea>
										</Card>
									</Grid>
									<Grid item xs={12} sm={3}>
										<Card sx={{ maxWidth: 345, mt: 0.5, ml: 2 }}>
											<CardActionArea>
												<CardMedia
													component="img"
													height="140"
													image={neem}
													alt="Neem"
												/>
												<CardContent>
													<Typography gutterBottom variant="h5" component="div">
														Neem
													</Typography>
													<Typography variant="body1" color="text.secondary">
														Azadirachta indica
													</Typography>
												</CardContent>
											</CardActionArea>
										</Card>
									</Grid>
									<Grid item xs={12} sm={3}>
										<Card sx={{ maxWidth: 345, mt: 0.5, ml: 2 }}>
											<CardActionArea>
												<CardMedia
													component="img"
													height="140"
													image={mango}
													alt="Mango"
												/>
												<CardContent>
													<Typography gutterBottom variant="h5" component="div">
														Mango
													</Typography>
													<Typography variant="body1" color="text.secondary">
														Mangifera indica
													</Typography>
												</CardContent>
											</CardActionArea>
										</Card>
									</Grid>
									<Grid item xs={12} sm={3}>
										<Card sx={{ maxWidth: 345, mt: 0.5, ml: 2 }}>
											<CardActionArea>
												<CardMedia
													component="img"
													height="140"
													image={aloe}
													alt="Aloe Vera"
												/>
												<CardContent>
													<Typography gutterBottom variant="h5" component="div">
														Aloe Vera
													</Typography>
													<Typography variant="body1" color="text.secondary">
														Aloe barbadensis miller
													</Typography>
												</CardContent>
											</CardActionArea>
										</Card>
									</Grid>
								</Grid>
							</Box>
						</Box>
					</Box>
				</div>
			</div>
		</>
	);
};

export default ScientificNames;
