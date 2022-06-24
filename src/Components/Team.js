import { Block } from "@mui/icons-material";
import { Button, Card, CardContent, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from '@mui/styles';
import React from "react"
import bgimg from "../assets/bgimg.jpg"
import bg from "../assets/bg.jpg"

const Team = () => {
    const useStyles = makeStyles((theme) => ({
      
        hero: {
        //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.iarasupport.com.au/wp-content/uploads/2021/03/5y9a5542.jpg')`,
        backgroundImage: `url(${bg})`,
          height: "500px",
          width: "100%",
          marginTop: "-10px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "4rem",
       
        },
    }));

    const classes = useStyles();
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
                <Typography variant="h1" sx={{ display: "block", justifyContent: "center", fontSize: "35px", textAlign: "center", color: "white", fontWeight: "bold", maxWidth: "100%" }}>
                    We are here.<br/>Our Team ofSupport Coordinators. </Typography>
                <Typography sx={{ borderBottom: "4px solid #E7A356", width: "25px", marginTop: "10px", marginLeft: "610px" }}></Typography>
          
         <div>
             <Box className={classes.hero}>
            {/* <Box>React Blog</Box> */}
               </Box>
        </div>
            </Paper>


        </>
    )
}

export default Team;













