import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";

const WebCam = ({ onImageCapture, setloader }) => {
	const webcamRef = useRef(null);
	const [imgSrc, setImgSrc] = useState(null);

	const retake = () => {
		setImgSrc(null);
	};

	const capture = useCallback(() => {
		const imageSrc = webcamRef.current.getScreenshot();
		setImgSrc(imageSrc);
	}, [webcamRef]);

	const saveImageToFile = async (e) => {
		e.preventDefault();
		setloader(true);
		if (imgSrc) {
			await fetch(imgSrc)
				.then((res) => res.blob())
				.then((blob) => {
					let x = Math.random() * 1000;

					const file = new File([blob], `captured_image${x}.png`, {
						type: "image/png",
					});
					sendPhoto(file);
				});
		}
	};

	const sendPhoto = async (file) => {
		const formdata = new FormData();
		formdata.append("file", file);
		console.log(file);

		await axios
			.post("http://localhost:5000/upload", formdata)
			.then((res) => {
				onImageCapture(res.data, file.name);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			{imgSrc ? (
				<img src={imgSrc} alt="webcam" />
			) : (
				<Webcam height={400} width={300} ref={webcamRef} />
			)}
			<div>
				{imgSrc ? (
					<>
						<Button
							onClick={retake}
							variant="contained"
							component="span"
							color="primary"
							sx={{ mr: 2 }}>
							Retake photo
						</Button>
						<Button
							variant="contained"
							component="span"
							color="primary"
							sx={{ mr: 2 }}
							onClick={(e) => {
								saveImageToFile(e);
							}}>
							Upload photo
						</Button>
					</>
				) : (
					<Button
						onClick={capture}
						variant="contained"
						component="span"
						color="primary"
						sx={{ mr: 2 }}>
						Capture photo
					</Button>
				)}
			</div>
		</div>
	);
};

export default WebCam;
