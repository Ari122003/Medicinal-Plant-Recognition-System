import React from 'react';
import Button from '@mui/material/Button';
import upload from './images/imageupload.jpg';
import { Card, CardActionArea, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import PhotoCameraRoundedIcon from '@mui/icons-material/PhotoCameraRounded';
import { Link } from 'react-router-dom';

const ImageUpload = () => {
  const textStyle = {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    fontSize: '1rem', // Adjust font size as needed
  };

  return (
    <>
      <Typography variant='body1' sx={{ ml: 2, mt: 3, maxWidth: "80%", textAlign: "center" }} style={textStyle}>
        Lost in the enigmatic world of medicinal flora? Unlock the identity of nature's healing secrets with a simple image upload or a click of your camera shutter, and reveal the name of the botanical elixir that beckons.
      </Typography>
      <Link to="/image">
        <Button variant="text" sx={{ mt: 1, ml: 2, color: "white", fontSize: "3rem", textAlign: "center", backgroundColor:"rgba(42, 37, 37, 0.5)"}} style={textStyle}>
          Scan Image
        </Button>
      </Link>
      <Card sx={{ maxWidth: "80%", mt: 3, ml: 2, mr: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={upload}
            alt="Uploaded Image"
          />
          <CardContent>
            <Button variant="contained" sx={{ mt: 1, ml: 3, fontSize: "1rem", textAlign: "center" }}>
              Upload Image
            </Button>
            <IconButton type="button" aria-label="camera" sx={{ ml: 2, mt: 1, color: "black" }}>
              <PhotoCameraRoundedIcon
                fontSize="large"
              />
            </IconButton>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default ImageUpload;
