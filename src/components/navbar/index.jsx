import { AppBar,Button,Toolbar, Typography} from "@mui/material";
import { Link } from "react-router-dom";


export default function Navbar() {
    return(
        <AppBar color="warning" position="static">
        <Toolbar>
         
          <Typography to="/recipes" component={Link} sx={{ flexGrow: 1 }}>
            Recipe App
          </Typography>
        <Button to="/add-recipe" variant="contained" component={Link} color="primary">Add to Recipes</Button>
        </Toolbar>
      </AppBar>
    );
}