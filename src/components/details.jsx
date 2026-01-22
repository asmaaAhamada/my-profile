import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function ProjectDetails({ project }) {
  const theme = useTheme();
  const [scrollPosition, setScrollPosition] = useState(0);

  // سرعة الحركة
  const speed = 1; // pixels per frame

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(prev => (prev + speed) % (project.images.length * 100));
    }, 16); // ~60fps
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <Card sx={{ mt: 2, p: 2 }}>
      <Grid container spacing={2}>
        {/* TEXT SIDE */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Typography variant="h4" fontWeight="700" mb={3}>
            {project.title}
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {project.features.map((item, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
              >
                <CheckCircleIcon
                  sx={{ color: theme.palette.success.main, fontSize: 22 }}
                />
                <Typography sx={{ color: theme.palette.text.secondary }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* IMAGE SIDE */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={project.images[0]}
            alt={project.title}
            sx={{
              width: "100%",
              height: 300,
              objectFit: "contain",
              borderRadius: 2,
            }}
          />
        </Grid>
      </Grid>

      {/* 👇 الشريط المتحرك تحت كامل البوكس */}
      <Box
        sx={{
          mt: 3,
          overflow: "hidden",
          width: "100%",
          borderTop: `1px solid ${theme.palette.divider}`,
          borderBottom: `1px solid ${theme.palette.divider}`,
          py: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            transform: `translateX(-${scrollPosition}px)`,
            transition: "transform 0.1s linear",
          }}
        >
          {project.images.concat(project.images).map((img, idx) => (
            <Box
              key={idx}
              component="img"
              src={img}
              alt={`${project.title} screenshot ${idx}`}
              sx={{
                width: 120,
                height: 80,
                objectFit: "cover",
                borderRadius: 1,
              }}
            />
          ))}
        </Box>
      </Box>
    </Card>
  );
}
