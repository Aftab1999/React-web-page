import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const Banner = () => {
    const useStyles = makeStyles((theme) => ({
      
        hero: {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
          height: "500px",
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
        <div>
             <Box className={classes.hero}>
            <Box>React Assingment</Box>
               </Box>
        </div>
    );
};

export default Banner;