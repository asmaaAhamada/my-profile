import { Box, Typography, useTheme } from "@mui/material";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
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

        py: 8,
        px: 2,
        textAlign: "center",

        background:
          "radial-gradient(circle at top, rgba(201,17,238,0.15), transparent 60%), #000",
        color: "#fff",
      }}
    >
      {/* TITLE */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
          position: "relative",
        }}
      >
        {/* glow background */}
        <Box
          sx={{
            position: "absolute",
            width: "260px",
            height: "90px",
            background:
              "radial-gradient(circle, rgba(201,17,238,0.35), transparent)",
            filter: "blur(25px)",
            zIndex: 0,
          }}
        />

        <EmojiObjectsIcon
          fontSize="large"
          sx={{
            mr: 1,
            color: "#c911ee",
            filter: "drop-shadow(0 0 10px rgba(201,17,238,0.8))",
            zIndex: 1,
          }}
        />

        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            zIndex: 1,
            background: "linear-gradient(90deg, #ffffff, #c911ee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "1px",
          }}
        >
          Why choose me as your Web Developer?
        </Typography>
      </Box>

      {/* TEXT */}
      <Typography
        sx={{
          color: "#bdbdbd",
          maxWidth: 650,
          mx: "auto",
          mt: 3,
          lineHeight: 1.8,
          fontSize: "16px",
        }}
        variant="body1"
      >
        I build modern and elegant web applications that deliver exceptional user experiences.
        With React, JavaScript, and UI/UX best practices, I bring ideas to life and help projects
        reach their full potential.
        <br />
        <br />
        Check out my{" "}
        <a
          href="https://github.com/asmaaAhamada"
          style={{
            color: "#c911ee",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          GetHUB
        </a>{" "}
        to see my work.
      </Typography>
    </Box>
  );
}