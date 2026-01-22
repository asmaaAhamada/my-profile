import React, { useEffect, useState } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import r1 from "../../../assets/image/1766358205513.png";

/* ===== Typing Animation (Loop) ===== */
const TypingText = ({
  text,
  typingSpeed = 120,
  deletingSpeed = 80,
  delay = 1500,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!isDeleting && index === text.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, typingSpeed, deletingSpeed, delay]);

  return <span>{displayedText}</span>;
};

export default function HelloPage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        px: { xs: 2, md: 8 },
        py: { xs: 4, md: 8 },
        minHeight: "70vh",
      }}
    >
      {/* النص */}
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "1 1 45%" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: theme.palette.primary.main,
            mb: 2,
            fontWeight: 700,
          }}
        >
          Hello 👋
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: "1.1rem",
            color: theme.palette.text.secondary,
          }}
        >
          Welcome to my digital world,
          <br />
          I’m Asmaa Al-Hamada, a passionate web developer crafting modern and
          elegant web solutions.
          <br />
          <br />
          Where creativity meets technology.
        </Typography>

        {/* الاسم + Web Developer أنيميشن */}
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            fontWeight: 600,
            color: theme.palette.text.primary,
          }}
        >
          Asmaa Al-Hamada |{" "}
          <Typography
            component="span"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 700,
              borderRight: "2px solid",
              pr: "6px",
              animation: "blink 1s infinite",
            }}
          >
            <TypingText text="Web Developer" />
          </Typography>
        </Typography>

        <Link to="/conect" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
                        fontSize:"18px"
,
              borderRadius: 2,
              textTransform: "none",
              px: 4,
              py: 1.2,
            }}
          >
conect Me          </Button>
        </Link>
      </Box>

      {/* الصورة */}
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "1 1 45%" },
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
          mt: { xs: 4, md: 0 },
        }}
      >
     <img
  src={r1}
  alt="Asmaa"
  style={{
    width: "320px",
    animation: "float 4s ease-in-out infinite",
  }}
/>

<style>
{`
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0); }
}
`}
</style>


      </Box>

      {/* Cursor animation */}
      <style>
        {`
          @keyframes blink {
            0% { border-color: transparent; }
            50% { border-color: currentColor; }
            100% { border-color: transparent; }
          }
        `}
      </style>
    </Box>
  );
}
