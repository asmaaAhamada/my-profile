import { Box, Typography, useTheme } from "@mui/material";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import { motion } from "framer-motion";

export default function AboutPage() {
  const theme = useTheme();

  // إعدادات حركة النص التتابعية (Stagger) للعنوان
  const titleContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.2 }
    }
  };

  const letterVariant = {
    hidden: { opacity: 0, y: 10, filter: "blur(5px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 100 } 
    }
  };

  const titleText = "Why choose me as your Web Developer?";

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      sx={{
        py: 10,
        px: 2,
        textAlign: "center",
        background:
          "radial-gradient(circle at top, rgba(201,17,238,0.12), transparent 65%), #000",
        color: "#fff",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* TITLE */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 3,
          position: "relative",
        }}
      >
        {/* Glow الخلفي المحسن */}
        <Box
          component={motion.div}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.35, 0.5, 0.35]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          sx={{
            position: "absolute",
            width: "320px",
            height: "120px",
            background:
              "radial-gradient(circle, rgba(201,17,238,0.4), transparent 70%)",
            filter: "blur(30px)",
            zIndex: 0,
          }}
        />

        {/* أيقونة اللمبة مع أنيميشن نبض خفيف */}
        <Box
          component={motion.div}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          sx={{ display: "flex", alignItems: "center", zIndex: 1 }}
        >
          <EmojiObjectsIcon
            fontSize="large"
            sx={{
              mr: 1.5,
              color: "#c911ee",
              filter: "drop-shadow(0 0 12px rgba(201,17,238,0.9))",
            }}
          />
        </Box>

        {/* عنوان يتفكك لأحرف ويظهر بتأثير سينمائي مرن */}
        <Typography
          component={motion.span}
          variants={titleContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variant="h5"
          fontWeight="800"
          sx={{
            zIndex: 1,
            display: "inline-block",
            background: "linear-gradient(90deg, #ffffff 30%, #c911ee 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "1px",
          }}
        >
          {titleText.split("").map((char, index) => (
            <motion.span 
              key={index} 
              variants={letterVariant}
              style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char}
            </motion.span>
          ))}
        </Typography>
      </Box>

      {/* TEXT & LINK */}
      <Typography
        component={motion.p}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
        sx={{
          color: "#bdbdbd",
          maxWidth: 680,
          mx: "auto",
          lineHeight: 1.9,
          fontSize: "17px",
          letterSpacing: "0.3px"
        }}
        variant="body1"
      >
        I build modern and elegant web applications that deliver exceptional user experiences.
        With React, JavaScript, and UI/UX best practices, I bring ideas to life and help projects
        reach their full potential.
        <br />
        <br />
        Check out my{" "}
        <Box
          component={motion.a}
          href="https://github.com/asmaaAhamada"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ 
            scale: 1.1,
            color: "#e256ff",
            textShadow: "0 0 15px rgba(201,17,238,0.9)"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          sx={{
            display: "inline-block",
            color: "#c911ee",
            textDecoration: "none",
            fontWeight: "bold",
            borderBottom: "1px dashed rgba(201,17,238,0.4)",
            pb: "2px",
          }}
        >
          GitHub
        </Box>{" "}
        to see my work.
      </Typography>
    </Box>
  );
}