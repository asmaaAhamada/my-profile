import React from "react";
import {
  Box,
  Card,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CodeOffIcon from "@mui/icons-material/CodeOff";

export default function ProjectDetails({ project }) {
  const theme = useTheme();

  return (
    <Card sx={{ backgroundColor: "#121212", mt: 4, p: 4 }}>
      {/* 🔥 TITLE */}
      <Box textAlign="center" mb={4}>
        <Typography
          variant="h3"
          fontWeight="700"
          color="#c319d2ff"
          gutterBottom
        >
          <CodeOffIcon sx={{ fontSize: 40, mr: 2 }} />
          {project.title}
        </Typography>
      </Box>

    {/* 🔥 PROJECT OVERVIEW */}
<Box textAlign="center" mb={6} maxWidth="800px" mx="auto">
  
 

  {/* الوصف الرئيسي */}
  <Typography
    variant="h6"
    sx={{
      color: "rgba(255,255,255,0.85)",
      mt: 2,
      lineHeight: 1.8,
      fontWeight: 400,
    }}
  >
 {project.des}
  </Typography>

</Box>
<br/>
      {/* 🔥 MAIN IMAGE */}
      <Box mb={5}>
        <Box
          component="img"
          src={project.images[0]}
          alt={project.title}
          sx={{
            width: "100%",
            maxHeight: 450,
            objectFit: "contain",
            borderRadius: 3,
          }}
        />
      </Box>

      {/* 🔥 IMAGES GRID بدل السلايدر */}
      <Grid container spacing={2}>
        {project.images.map((img, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Box
              component="img"
              src={img}
              alt={`screenshot ${index}`}
              sx={{
                width: "100%",
                height: 140,
                objectFit: "cover",
                borderRadius: 2,
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
          </Grid>
        ))}
        
      </Grid>
      <br/>
       {/* 🔥 FEATURES */}
      <Box mb={5}>
        <Box textAlign="center" mb={4}>
        <Typography
          variant="h3"
          fontWeight="700"
          color="#c319d2ff"
          gutterBottom
        >
          <CodeOffIcon sx={{ fontSize: 40, mr: 2 }} />
          Features:
        </Typography>
      </Box>
        <Grid container spacing={2}>
          {project.features.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <CheckCircleIcon sx={{ color: "green" }} />
                <Typography sx={{ color: "white" }}>
                  {item}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Card>
  );
}