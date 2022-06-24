import { Block } from "@mui/icons-material";
import { Button, Card, CardContent, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react"
import bgimg from "../assets/bgimg.jpg"
// import aboutbackground from "../assets/aboutbackground.jpg"

// import testimonialsboyimg from "../assets/testimonialsboyimg.jpg"
// import testimonialsgirlimg from "../assets/testimonialsgirlimg.png"
// import "./style.css"




const Bgcolor = () => {



    return (
        <>

            <Paper sx={{
                marginTop: "20px",
                margin: 'auto',
                maxWidth: "100%",
                flexGrow: 1,
                borderRadius: "0px",
                padding: "100px 15px",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${bgimg}?w=900&h=600&fit=crop&auto=format)`
            }}>
                <Typography variant="h1" sx={{ display: "block", justifyContent: "center", fontSize: "35px", textAlign: "center", color: "white", fontWeight: "bold", maxWidth: "100%" }}>We are here  We are here. We have time.<br/> We are on your side. </Typography>
                <Typography sx={{ borderBottom: "4px solid #E7A356", width: "25px", marginTop: "10px", marginLeft: "610px" }}></Typography>



                <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px", margin: "0px", padding: "0px" }}>
                    <Grid item md={4.5} sm={6} xs={12} sx={{ marginTop: "30px", maxWidth: "100%", padding: "10px" }} >
                        <Card sx={{ maxWidth: "100%", padding: '10px', display: "block", justifyContent: "center", backgroundColor: "#EAEDEA" }}>
                            {/* <img className="imagee" src={aaimg} style={{ width: "100%", height: "270px" }} alt="aaimg" /> */}
                            <CardContent sx={{ textAlign: "left", maxWidth: "100%" }}>
                                <Typography sx={{ fontSize: "14px", fontweight: "bold", color: "#939290", marginTop: "15px" }}>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas</Typography>
                            </CardContent>

                        </Card>
                        <div className="triangle-downn"></div>
                        <Grid item sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "25px" }}>
                            {/* <img src={testimonialsboyimg} alt="testimonialsboyimg" /> */}
                            {/* <Grid sx={{ width: "250px", marginLeft: "20px" }}>
                                <Typography sx={{ fontSize: "20px", fontWeight: "bolder" }}>Tony Show</Typography>
                                <Typography sx={{ fontSize: "12px" }}>Customer</Typography>
                            </Grid> */}

                        </Grid>
                    </Grid>

                    <Grid item md={4.5} sm={6} xs={12} sx={{ marginTop: "30px", maxWidth: "100%", padding: "10px" }}>
                        <Card sx={{ maxWidth: "100%", padding: '10px', display: "block", justifyContent: "center", backgroundColor: "black" }}>
                            {/* <img className="imagee" src={aaimg} style={{ width: "100%", height: "270px" }} alt="aaimg" /> */}
                            <CardContent sx={{ textAlign: "left", maxWidth: "100%" }}>
                                <Typography sx={{ fontSize: "14px", fontweight: "bold", color: "#939290", marginTop: "15px" }}>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas</Typography>
                            </CardContent>
                        </Card>
                        <div className="triangle-down"></div>
                        <Grid item sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "25px" }}>
                            {/* <img src={testimonialsgirlimg} alt="testimonialsboyimg" /> */}
                            {/* <Grid sx={{ width: "250px", marginLeft: "20px" }}>
                                <Typography sx={{ fontSize: "20px", fontWeight: "bolder" }}>Jennifer Lawrence</Typography>
                                <Typography sx={{ fontSize: "12px" }}>Customer</Typography>
                            </Grid> */}

                        </Grid>
                    </Grid>
                </Grid>

            </Paper>


        </>
    )
}

export default Bgcolor;













