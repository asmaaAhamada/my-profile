import React, { useState } from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectDetails({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCardClick = (index) => {
    if (index === currentIndex) {
      setCurrentIndex((prev) => (prev + 1) % project.images.length);
    } else {
      setCurrentIndex(index);
    }
  };

  // إعدادات حركة الظهور التتابعي للميزات
  const listContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -20, y: 10 },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <Card sx={{ backgroundColor: "#121212", mt: 4, p: { xs: 2, md: 4 }, overflow: "hidden", borderRadius: "24px" }}>
      {/* 🔥 TITLE */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" fontWeight="700" color="#c319d2ff" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
          {project.title}
        </Typography>
      </Box>

      {/* 🔥 PROJECT OVERVIEW */}
      <Box textAlign="center" mb={6} maxWidth="800px" mx="auto">
        <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.85)", mt: 2, lineHeight: 1.8, fontWeight: 400, px: 2 }}>
          {project.des}
        </Typography>
      </Box>

      {/* 🔥 3D STACKED CAROUSEL */}
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mb={10} mt={4} sx={{ userSelect: "none" }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "500px",
            height: "350px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            perspective: "2000px", 
          }}
        >
          <AnimatePresence mode="popLayout">
            {project.images.map((img, idx) => {
              const total = project.images.length;
              const order = (idx - currentIndex + total) % total;

              const isVisible = order < 5; 
              if (!isVisible) return null;

              const zIndex = 100 - order;
              const scale = 1 - order * 0.08;
              const moveX = order * 75;
              const moveY = order * -8;
              const rotateY = -25 + order * 8;
              const z = order * -90;

              return (
                <Box
                  key={idx}
                  component={motion.div}
                  style={{ transformOrigin: "center center" }}
                  animate={{
                    scale: scale,
                    x: moveX,
                    y: moveY,
                    rotateY: rotateY,
                    z: z,
                    opacity: 1,
                  }}
                  exit={{
                    x: -400,
                    y: -80,
                    rotateZ: -25,
                    opacity: 0,
                    scale: 0.7,
                    transition: { duration: 0.35, ease: "easeOut" }
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 22 }}
                  onClick={() => handleCardClick(idx)}
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: "24px",
                    boxShadow: order === 0 
                      ? "0px 30px 60px rgba(195, 25, 210, 0.25)" 
                      : "0px 15px 30px rgba(0,0,0,0.6)",
                    backgroundColor: "#1e1e1e",
                    border: order === 0 ? "2px solid #c319d2ff" : "1px solid rgba(255,255,255,0.08)",
                    p: 1.5,
                    cursor: "pointer",
                    zIndex: zIndex,
                    transition: "border-color 0.3s",
                    "&:hover": {
                      border: "2px solid #c319d2ff"
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={img}
                    alt={`Interface ${idx}`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: "18px",
                      pointerEvents: "none",
                    }}
                  />
                </Box>
              );
            })}
          </AnimatePresence>
        </Box>

        {/* مؤشر النقاط السفلي */}
        <Box display="flex" gap={1} mt={6}>
          {project.images.map((_, idx) => (
            <Box
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              sx={{
                width: idx === currentIndex ? 24 : 8,
                height: 8,
                borderRadius: 4,
                cursor: "pointer",
                backgroundColor: idx === currentIndex ? "#c319d2ff" : "rgba(255,255,255,0.2)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* 🔥 FEATURES (المطوّر والمعدّل بالكامل) */}
      <Box mb={2} sx={{ pt: 4, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <Box 
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          gap={1.5} 
          mb={5}
        >
          <Box
            component={motion.div}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <FeaturedPlayListIcon sx={{ fontSize: 36, color: "#c319d2ff", filter: "drop-shadow(0 0 8px rgba(195,25,210,0.6))" }} />
          </Box>
          <Typography variant="h4" fontWeight="800" color="#c319d2ff" sx={{ letterSpacing: "0.5px" }}>
            Features:
          </Typography>
        </Box>

        <Grid 
          container 
          spacing={2.5} 
          component={motion.div}
          variants={listContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {project.features.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box 
                component={motion.div}
                variants={itemVariant}
                whileHover={{ 
                  scale: 1.02, 
                  x: 5,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(195, 25, 210, 0.4)"
                }}
                sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: 2,
                  p: 2,
                  borderRadius: "14px",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.04)",
                  transition: "background-color 0.3s, border-color 0.3s",
                }}
              >
                <CheckCircleIcon sx={{ color: "#d325d3", filter: "drop-shadow(0 0 5px rgba(37,211,102,0.4))", fontSize: 24 }} />
                <Typography sx={{ color: "rgba(255,255,255,0.9)", fontWeight: 500, fontSize: "15.5px", lineHeight: 1.4 }}>
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