import { Block } from "@mui/icons-material";
import { Button, Card, CardContent, Grid, Paper, Typography,  CardActions, IconButton,CardHeader,Avatar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react"
import bgimg from "../assets/bgimg.jpg"

const News = () => {

    return (
        <>
        <Box
        style={{
            backgroundColor:"#E7A356"
        }}
        >
                <Typography variant="h1" sx={{ display: "block", justifyContent: "center", fontSize: "35px", textAlign: "center", color: "black", fontWeight: "bold", maxWidth: "100%", backgroundColor:"#E7A356" }}>Latest News.<br/> The latest from i’ara.. </Typography>
                <Typography sx={{ borderBottom: "4px solid #E7A356", width: "25px", marginTop: "10px", marginLeft: "610px",backgroundColor:"#E7A356" }}></Typography>

                <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px", margin: "0px", padding: "0px" }}>
                    <Grid item md={3} sm={3} xs={12} sx={{ marginTop: "30px", maxWidth: "100%", padding: "10px" }} >
                       
 <Box>

      <Card>
        <CardHeader
          avatar={<Avatar></Avatar>}
          title="I'ara Support Coordination"
          subheader="Card sub heading"
          action={
            <IconButton>
              {/* <MoreVertIcon /> */}
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="body1">lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
            </Typography>
        </CardContent>
        <CardActions>
          <Button>share</Button>
        </CardActions>
      </Card>
 </Box>
                      
                        <div className="triangle-downn"></div>
                        <Grid item sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "25px" }}>
                        
                        </Grid>
                    </Grid>

                    <Grid item md={3} sm={3} xs={12} sx={{ marginTop: "30px", maxWidth: "100%", padding: "10px" }}>
                       
     <Box>

<Card>
  <CardHeader
    avatar={<Avatar></Avatar>}
    title="I'ara Support Coordination"
    subheader="Card sub heading"
    action={
      <IconButton>
      </IconButton>
    }
  />
  <CardContent>
    <Typography variant="body1">lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
      </Typography>
  </CardContent>
  <CardActions>
    <Button>share</Button>
  </CardActions>
</Card>
</Box>
                    
                       
                        <div className="triangle-down"></div>
                        <Grid item sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "25px" }}>
                          
                        </Grid>
                    </Grid>
                    <Grid item md={3} sm={3} xs={12} sx={{ marginTop: "30px", maxWidth: "100%", padding: "10px" }}>
                       
     <Box>

<Card>
  <CardHeader
    avatar={<Avatar></Avatar>}
    title="I'ara Support Coordination"
    subheader="Card sub heading"
    action={
      <IconButton>
      </IconButton>
    }
  />
  <CardContent>
    <Typography variant="body1">lorem ipsum dolor sit amet, consectetur adipiscing elit,
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      quis ipsum suspendisse ultrices gravida. risus commodo viverra maecenas
      </Typography>
  </CardContent>
  <CardActions>
    <Button>share</Button>
  </CardActions>
</Card>
</Box>
                    
                       
                        <div className="triangle-down"></div>
                        <Grid item sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "25px" }}>
                          
                        </Grid>
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}

export default News;













