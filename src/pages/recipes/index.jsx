import { Card,  CardContent, CardMedia, Container ,Grid,TextField, Typography} from "@mui/material";

export default function Recipes () {
    return(
       <Container sx={{my:'2rem'}} maxWidth="sm">
           <TextField fullWidth id="outlined-basic" label="Enter a keyword to search Recipes and press enter" variant="outlined" />

    

          <Grid sx={{mt:'1rem'}} container spacing={3}>
          <Grid item xs={4}>
            <Card>

            
                <CardMedia 
                sx={{height:200}} 
                image="https://media.istockphoto.com/id/1353473329/photo/chicken-chili.jpg?s=1024x1024&w=is&k=20&c=w1DUsmGFTIritEVNGbGNi2AjzTNahG3cHOe6e4qdSQ0=" />
            </Card>
            <CardContent>
                <Typography variant="h5">Stew</Typography>
            </CardContent>
          </Grid>
          </Grid>
          
        </Container>
    )
}