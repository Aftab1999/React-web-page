import { CardContent, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react"
import aboutimg from "../assets/aboutimg.jpg"
import aboutbackground from "../assets/aboutbackground.jpg"
import about from "../assets/about.png"
import { useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/styles";
import { styled } from '@mui/material/styles';





const Aboutus = () => {

    // const classes = useStyles();
    const theme = useTheme();
    // const isMobile: any = useMediaQuery<any>(theme.breakpoints.down("md"));

    return (
        <>

            
                <Paper sx={{
                    margin: 'auto',
                    maxWidth: "100%",
                    flexGrow: 1,
                    borderRadius: "0px",
                    padding:'40px 15px',
                    backgroundImage: `url(${aboutbackground})`,
                   

                }}>

                    <Grid container  sx={{ display: "flex", justifyContent: "center" }}>




                 
                        <Grid item md={4.5} sm={6} xs={12}>
                            <Box sx={{ width: "100%" }}>
                                <CardContent>
                                    <Grid item sx={{ maxWidth: "100%" }}>
                                        <img style={{ width: "100%" }} src={about} alt="aboutimg" />
                                    </Grid>
                                </CardContent>
                            </Box>
                        </Grid>

                        <Grid item md={4.5} sm={6} xs={12}>
                            <Box sx={{ width: '100%' }}>
                                <CardContent>
                                    <Grid item sx={{ color: "black", maxWidth: "100%" }}>
                                        <Typography variant="h4" sx={{ fontSize: "16px", color: "#E7A356" }}>ABOUT US</Typography>
                                        <Typography variant="h4" sx={{ fontSize: "26px", fontWeight: "bolder" }}>lorem ipsum dolor</Typography>
                                        <Typography sx={{ borderBottom: "4px solid #E7A356", width: "25px", marginTop: "10px" }}></Typography>
                                        <Typography variant="body1" sx={{ fontSize: "20px", marginTop: "27px", maxWidth: "100%", color: "#939290", fontWeight: "normal" }} >lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas accumsan lacus vel facilisis.</Typography>
                                        <Typography variant="body1" sx={{ fontSize: "20px", marginTop: "25px", maxWidth: "100%", color: "#939290", fontWeight: "normal" }} >quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas accumsan lacus vel facilisis.</Typography>
                                    </Grid>
                                </CardContent>
                            </Box>
                        </Grid>
                        
                    </Grid>
                   
                </Paper>
           

        </>
    )
}

export default Aboutus;