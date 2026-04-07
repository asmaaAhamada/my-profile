import React, { useState, useEffect, useRef } from "react";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { projectsData } from "../../projectsData";
import { useInViewAnimation } from "../../useInViewAnimation";







// كارد مستقل
const Card = ({ feature }) => {
    const [ref, inView] = useInViewAnimation({ threshold: 0.2 });

  const theme = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null); // لتجنب مشاكل strict mode

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % feature.images.length);
    }, 2100);

    return () => clearInterval(intervalRef.current);
  }, [feature.images.length]);

  return (
    <Box
      ref={ref}
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(50px)",
        transition: "all 0.8s ease-out",
      }}
    >
    <Paper
    
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",        backgroundColor:'black',

        gap: 2,
        p: 2,
        borderRadius: 3,
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 10,
        },
      }}
    >
      <Box
        component="img"
        src={feature.images[currentImageIndex]}
        alt={feature.title}
        sx={{
          width: "100%",
          height: 200,
          objectFit: "contain",
          borderRadius: 2,
          transition: "opacity 0.5s ease-in-out", // fade animation
        }}
      />
      <Typography variant="h6" fontWeight={700} sx={{           color: theme.navbar.border
 }}>
        {feature.title}
      </Typography>
      {feature.description && (
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
          {feature.description}
        </Typography>
      )}
      <Button
  component={Link}
  to={`/projects/${feature.id}`}
  variant="contained"
  sx={{
    mt: 1,
    textTransform: "none",
    backgroundColor: theme.navbar.hover,
    color: theme.palette.primary.main,
     "&:hover": {
color:'white'       },
  }}
>
  View Details
</Button>
    </Paper>
   </Box>
  );
};

// الصفحة الرئيسية للكاردات
const CardPage = () => {
  const theme = useTheme();

  return (
    <>
    <Box sx={{ py: 6, px: { xs: 1, sm: 3 } ,overflowX: "hidden",        backgroundColor:'#121212',
 }}>
      <Grid container spacing={3}>
       {projectsData.map((project) => (
  <Grid item key={project.id} xs={12} sm={6} md={4}>
    <Card feature={project} />
  </Grid>
))}

      </Grid>
    </Box>

    </>
   
    
  );
};

export default CardPage;
