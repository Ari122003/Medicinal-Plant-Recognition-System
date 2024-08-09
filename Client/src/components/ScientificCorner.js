import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import tulsi from "./images/tulsi.jpeg";
import { Link } from "react-router-dom";

const ScientificCorner = () => {
  const textStyle = {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 5)',
  };

  return (
    <>
      <Card sx={{ maxWidth: "80%", mt: 3, ml: 3, mr: 2}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={tulsi}
            alt="Tulsi"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{ fontSize: "1.5rem" }}>
              Tulsi
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Ocimum tenuiflorum
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Typography sx={{ mt: 3, ml: 2, mr: 2, textAlign: "center" , maxWidth: "80%" }} style={{ ...textStyle, fontSize: "1rem" }} variant="h6">
        Curious about the botanical nomenclature, the scientific names that plants whisper in the secret language of taxonomy?
      </Typography>
      <Link to="/scientific">
        <Button
          variant="text"
          sx={{ mt: 2, ml: 2, mr: 2, color: "white", fontSize: "1rem", textAlign: "center", backgroundColor:"rgba(42, 37, 37, 0.5)"}}
          size="large"
          style={{ ...textStyle, padding: "10px 20px" }}
        >
          Scientific Names
        </Button>
      </Link>
    </>
  );
}

export default ScientificCorner;
