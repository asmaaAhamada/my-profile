import { Box, Typography, useTheme } from "@mui/material";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { Link } from "react-router-dom";
import { useInViewAnimation } from "../../useInViewAnimation";

export default function AboutPage() {
  const theme = useTheme();
    const [ref, inView] = useInViewAnimation({ threshold: 0.2 });

  return (
      <Box
          ref={ref}
          sx={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0px)" : "translateY(50px)",
            transition: "all 0.8s ease-out",
          }}
        >
    <Box
      sx={{
        py: 6,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        textAlign: "center",
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
        <EmojiObjectsIcon fontSize="large" sx={{ mr: 1, color: theme.palette.primary.main }} />
        <Typography variant="h5" fontWeight="bold">
          Why choose me as your Web Developer?
        </Typography>
      </Box>

      <Typography
        sx={{ color: theme.palette.text.secondary, maxWidth: 600, mx: "auto", mt: 2, lineHeight: 1.6 }}
        variant="body1"
      >
        I build modern and elegant web applications that deliver exceptional user experiences.
        With React, JavaScript, and UI/UX best practices, I bring ideas to life and help projects
        reach their full potential.
        <br /><br />
        Check out my <a href="https://github.com/asmaaAhamada" style={{ color: theme.palette.primary.main, textDecoration: "underline" }}>GetHUB</a> to see my work.
      </Typography>
    </Box>
    </Box>
  );
}
