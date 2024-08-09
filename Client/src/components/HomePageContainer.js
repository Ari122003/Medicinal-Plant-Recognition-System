import { Box, Grid } from "@mui/material";
import ImageUpload from "./ImageUpload";
import ScientificCorner from "./ScientificCorner";
import SearchCorner from "./SearchCorner";

const HomePageContainer = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 20 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <ScientificCorner />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ImageUpload />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SearchCorner />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePageContainer;
