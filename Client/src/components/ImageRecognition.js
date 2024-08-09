import {
	AppBar,
	Box,
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import imagereg from "./images/imageupload.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { backButtonAtom, webcamAtom } from "./recoil/atoms";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import axios from "axios";
import WebCam from "./WebCam";
import lg from "./images/logofront.png";
import vid from "./images/vid.mp4";
import aloe from "./images/aloe.jpg";

const ImageRecognition = () => {
	const divStyle = {
		position: "relative",
		width: "100vw",
		height: "100vh",
	};

	const backgroundStyle = {
		backgroundImage: `url(${imagereg})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		width: "100%",
		height: "100%",
		minHeight: "170%",
		filter: "blur(1px)",
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
		backdropFilter: "blur(0.6px)",
	};

	const [backButton, setBackButton] = useRecoilState(backButtonAtom);
	const [selectedFile, setSelectedFile] = useState(null);
	const [pic, setpic] = useState(vid);
	const [trigger, settrigger] = useState(false);
	const [loader, setloader] = useState(false);
	const [plant, setplant] = useState({
		Name: "Your plant name",
		Details: "Your plant details",
	});
	const [webcam, setWebcam] = useRecoilState(webcamAtom);
	const handleFileChange = (e) => {
		const file = e.target.files[0];
		setSelectedFile(file);

		setpic(file.name);
	};
	const sendPhoto = async (e) => {
		e.preventDefault();
		setloader(true);
		const formdata = new FormData();
		formdata.append("file", selectedFile);

		console.log("runn");
		

		await axios
			.post("http://localhost:5000/upload", formdata)
			.then(async (res) => {
				image_data_reciever(res.data.result);
				console.log(res);
				
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const [img, setImg] = useState(false);
	const [capturedImage, setCapturedImage] = useState(aloe);
	const capturedImageHandler = (imageData, filename) => {
		image_data_reciever(imageData.result);
		setpic(filename);
	};

	const image_data_reciever = async (image) => {
		await fetch("http://localhost:8000/image", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ Name: image }),
		})
			.then((res) => {
				settrigger(true);
				return res.json();
			})
			.then((res) => {
				setplant({
					Name: res[0].Name,
					Details: res[0].Details,
				});
				setloader(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<form encType="multipart/form-data" action="/upload">
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
							{loader == true ? (
								<div className="flex">
									<div className="spinner"></div>
								</div>
							) : (
								<div></div>
							)}

							<Box sx={{ flexGrow: 1, ml: "10%", mt: "10%" }}>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={5}>
										<input
											type="file"
											accept="image/*"
											onChange={handleFileChange}
											style={{ display: "none" }}
											id="file-input"
										/>
										<label htmlFor="file-input">
											<Button
												variant="contained"
												component="span"
												color="primary"
												sx={{ mr: 2, mt: 2 }}>
												Select Image
											</Button>
										</label>
										<Button
											variant="contained"
											component="span"
											color="primary"
											sx={{ mr: 2, mt: 2 }}
											onClick={(e) => {
												setImg(true);
												sendPhoto(e);
											}}>
											Upload Image
										</Button>

										<IconButton
											type="button"
											aria-label="camera"
											sx={{ ml: 2, mt: 2 }}>
											<CameraAltIcon
												fontSize="large"
												onClick={() => {
													setWebcam(!webcam);
												}}
												sx={{ color: "white" }}
											/>
										</IconButton>
										{webcam && (
											<WebCam
												setloader={setloader}
												onImageCapture={capturedImageHandler}
											/>
										)}
									</Grid>

									<Grid item xs={12} sm={5}>
										<Card
											sx={{
												maxWidth: 400,
												mt: 2,
												ml: 2,
												mb: 2,
												minHeight: 300,
											}}>
											<CardActionArea>
												{trigger == false ? (
													<CardMedia
														component="video"
														height="200"
														image={pic}
														alt="green iguana"
														autoPlay
													/>
												) : (
													<img
														src={`http://localhost:8000/pics/${pic}`}
														height={200}
														width={400}
													/>
												)}
												<CardContent>
													<Typography gutterBottom variant="h5" component="div">
														{plant.Name}
													</Typography>
													<Typography variant="body1" color="text.secondary">
														{plant.Details}
													</Typography>
												</CardContent>
											</CardActionArea>
										</Card>
										{loader == true ? (
											<div className="flex">
												<div className="spinner"></div>
											</div>
										) : (
											<div></div>
										)}
									</Grid>
								</Grid>
							</Box>
						</Box>
					</div>
				</div>
			</form>
		</>
	);
};
export default ImageRecognition;
