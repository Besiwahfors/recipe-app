import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
  CardActionArea,
} from "@mui/material";

import { useState } from "react";

export default function Recipes() {
const [recipes, setRecipes] = useState([]);

const getRecipes =() => {
    // fetch recipes from API 
    fetch("https://api.spoonacular.com/recipes/complexSearch")
    .then(response => response.json())
    .then (data => {
        //update recipes state
        console.log(data);
    })
   .catch(error => {
    console.log(error);
   }
    )
}  

  return (
    <Container sx={{ my: "2rem" }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Enter a keyword to search Recipes and press enter"
        variant="outlined"
      />

      <Grid sx={{ mt: "1rem" }} container spacing={3}>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.wholesomeyum.com/wp-content/uploads/2022/08/wholesomeyum-Pork-Stew-18.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Stew
                </Typography>
                
                
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
