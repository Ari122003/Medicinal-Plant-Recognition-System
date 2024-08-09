import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import search from "./images/searchimage.jpg";
import { Link } from "react-router-dom";

const SearchCorner = () => {
  const textStyle = {
    textShadow: '2px 2px 4px rgba(0, 0, 0, 5)',
  };

  return (
    <>
      <Card sx={{ maxWidth: "80%", mt: 3, ml: 2, mr: 2}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={search}
            alt="Mango, Neem, Aloevera"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{ fontSize: "1.5rem" }}>
              Mango
            </Typography>
            <Typography gutterBottom variant="h6" component="div" style={{ fontSize: "1rem" }}>
              Neem
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Aloevera
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Typography variant="subtitle1" sx={{ mt: 3, ml: 2, mr: 2, textAlign: "center" , maxWidth: "80%"}} style={{ ...textStyle, fontSize: "1rem" }}>
        If you yearn to behold the captivating visage of medicinal flora, embark on your visual journey through the verdant realm by employing the mystical incantation of the search bar below.
      </Typography>
      <Link to="/imageSearch">
        <Button
          variant="text"
          sx={{ mt: 0.5, ml: 2, mr: 2, color: "white", fontSize: "1rem", textAlign: "center", padding: "6px 12px" , backgroundColor:"rgba(42, 37, 37, 0.5)"}}
          size="small"
          style={{ ...textStyle }}
        >
          Unveil the botanical wonders
        </Button>
      </Link>
    </>
  );
}

export default SearchCorner;
