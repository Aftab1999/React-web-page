import {
    Box,
    Card,
    Grid,
    CardContent,
    Typography,
    CardActions,
    Button,
    Avatar,
    CardHeader,
    IconButton,
    CardMedia,
    CardActionArea,
} from "@mui/material";
import { createStyles, makeStyles } from '@mui/styles';
//   import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: "flex",
        },
    })
);

function App() {
    const classes = useStyles();
    return (
        <Box>
        <Grid container 
        //  justify="space-around"
        //  spacing={20}
          sx={{
            marginLeft:"30px",
            marginRight:"30px",
            display: "flex",
            alignItems: "center",
            // justifyContent: "center"
            justifyContent: "space-between",
          }}
          >
         <Grid item xs={3}>
         <div>
            <Card
                style={{
                    display: "block",
                    transitionDuration: "0.3s",
                    height: "30vw",
                    width: '350px',
                }}
            >
                <CardActionArea>
                    <CardHeader style={{
                        textAlign: "center",
                        color: "#34ebe8",
                    }}

                        title="Support
                        Coordination" />

                    <CardContent>
                        <Typography variant="body1"
                        style={{
                            textAlign: "center",
                            color: "#a19494",
                        }}
                        >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Quam maxime dolorem incidunt provident perspiciatis neque dolorum.
                          Eligendi, quam et, expedita dolor ad voluptatibus saepe rem sapiente,
                           maiores sequi suscipit delectus?</Typography>
                    </CardContent>
                </CardActionArea>
                {/* <CardActions> */}
                <Box style={{
                     display: "flex",
                     justifyContent: 'center'
                }}
                >
                    <Button style={{color:"#32a8a0", }}>EXPLORE MORE <span style={{color: 'blue',}}> {">"} </span></Button>
                    </Box>
                {/* </CardActions> */}
            </Card>
        </div>
        </Grid>
        <Grid item xs={3}>
        <div>
            <Card
                style={{
                    display: "block",
                    transitionDuration: "0.3s",
                    height: "30vw",
                    width: '350px',
                }}
            >
                <CardActionArea>
                    <CardHeader style={{
                        textAlign: "center",
                        color: "#34ebe8",
                    }}

                        title="Support
                        Coordination" />

                    <CardContent>
                        <Typography variant="body1"
                        style={{
                            textAlign: "center",
                            color: "#a19494",
                        }}
                        >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Quam maxime dolorem incidunt provident perspiciatis neque dolorum.
                          Eligendi, quam et, expedita dolor ad voluptatibus saepe rem sapiente,
                           maiores sequi suscipit delectus?</Typography>
                    </CardContent>
                </CardActionArea>
                {/* <CardActions> */}
                <Box style={{
                     display: "flex",
                     justifyContent: 'center'
                }}
                >
                    <Button style={{color:"#32a8a0", }}>EXPLORE MORE <span style={{color: 'blue',}}> {">"} </span></Button>
                    </Box>
                {/* </CardActions> */}
            </Card>
        </div>
        </Grid>
        <Grid item xs={3}>
        <div>
            <Card
                style={{
                    display: "block",
                    transitionDuration: "0.3s",
                    height: "30vw",
                    width: '350px',
                }}
            >
                <CardActionArea>
                    <CardHeader style={{
                        textAlign: "center",
                        color: "#34ebe8",
                    }}

                        title="Support
                        Coordination" />

                    <CardContent>
                        <Typography variant="body1"
                        style={{
                            textAlign: "center",
                            color: "#a19494",
                        }}
                        >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Quam maxime dolorem incidunt provident perspiciatis neque dolorum.
                          Eligendi, quam et, expedita dolor ad voluptatibus saepe rem sapiente,
                           maiores sequi suscipit delectus?</Typography>
                    </CardContent>
                </CardActionArea>
                {/* <CardActions> */}
                <Box style={{
                     display: "flex",
                     justifyContent: 'center'
                }}
                >
                    <Button style={{color:"#32a8a0", }}>EXPLORE MORE <span style={{color: 'blue',}}> {">"} </span></Button>
                    </Box>
                {/* </CardActions> */}
            </Card>
        </div>
        </Grid>
        </Grid>
        </Box>
    );
}

export default App;