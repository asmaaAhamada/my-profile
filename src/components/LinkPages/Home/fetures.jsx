import React, { useState, useEffect, useRef } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { projectsData } from "../../projectsData";
// استيراد الفريمر موشن
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// مكون الكارد المطور بتقنية 3D
const PremiumCard = ({ feature }) => {
  const theme = useTheme();
  const cardRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // 1. منطق تبديل الصور التلقائي
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % feature.images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [feature.images.length]);

  // 2. إعدادات الموشن (إحداثيات الماوس)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // تنعيم الحركة (Spring)
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // تحويل الإحداثيات لزوايا دوران (من -15 إلى 15 درجة)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // تحويل الإحداثيات لموقع بقعة الضوء (Glow)
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["20%", "80%"]);
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["20%", "80%"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <Box sx={{ perspective: "1200px", width: "100%" }}>
      <Box
        ref={cardRef}
        component={motion.div}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
        }}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "black",
          gap: 2,
          p: 2,
          borderRadius: 4,
          border: "1px solid rgba(195, 25, 210, 0.15)",
          cursor: "pointer",
          overflow: "hidden",
          transition: "border-color 0.3s ease",
          "&:hover": {
            borderColor: theme.navbar.border || "#c319d2",
          },
        }}
      >
        {/* ✨ طبقة الـ Glow البنفسجية التي تتبع الماوس */}
        <Box
          component={motion.div}
          style={{ top: glowY, left: glowX, transform: "translate(-50%, -50%)" }}
          sx={{
            position: "absolute",
            width: "350px",
            height: "350px",
            background: "radial-gradient(circle, rgba(195, 25, 210, 0.2) 0%, transparent 75%)",
            filter: "blur(35px)",
            pointerEvents: "none",
            zIndex: 0,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />

        {/* 🖼️ حاوية الصورة مع تأثير البروز (translateZ) */}
        <Box
          component={motion.div}
          style={{ translateZ: isHovered ? "50px" : "0px" }}
          sx={{
            width: "100%",
            height: 220,
            borderRadius: 2,
            overflow: "hidden",
            backgroundColor: "#0a0a0a",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={feature.images[currentImageIndex]}
            alt={feature.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              transition: "transform 0.6s ease-in-out",
              transform: isHovered ? "scale(1.08)" : "scale(1)",
            }}
          />
        </Box>

        {/* 📝 النصوص والبيانات */}
        <Box sx={{ zIndex: 1, style: { translateZ: "30px" } }}>
          <Typography 
            variant="h6" 
            fontWeight={700} 
            sx={{ color: theme.navbar.border || "#c319d2", mb: 1 }}
          >
            {feature.title}
          </Typography>
          
          {feature.des && (
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)", minHeight: 40 }}>
              {feature.des.length > 80 ? feature.des.substring(0, 80) + "..." : feature.des}
            </Typography>
          )}
        </Box>

        {/* 🔘 الأزرار */}
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 1, zIndex: 1 }}>
          <Button
            component={Link}
            to={`/projects/${feature.id}`}
            variant="contained"
            fullWidth
            sx={{
              textTransform: "none",
              backgroundColor: 'purple',
              color: "white",
              fontWeight: "600",
              borderRadius: "10px",
              "&:hover": { backgroundColor: "#c319d2" },
            }}
          >
            View Details
          </Button>

          {feature.demoLink && (
            <Button
              component="a"
              href={feature.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              fullWidth
              sx={{
                textTransform: "none",
                borderColor: "rgba(255,255,255,0.2)",
                color: "#c319d2",
                borderRadius: "10px",
                "&:hover": { borderColor: "#c319d2", color: "white" },
              }}
            >
              View Demo
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

// الصفحة الرئيسية
const CardPage = () => {
  return (
    <Box sx={{ py: 6, px: { xs: 1, sm: 3 }, backgroundColor: "#121212", minHeight: "100vh" }}>
      <Grid container spacing={4}>
        {projectsData.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <PremiumCard feature={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardPage;