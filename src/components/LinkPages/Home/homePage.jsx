import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import r1 from "../../../assets/image/image.png";

/* Typing Effect */
const TypingText = ({
  text,
  typingSpeed = 80,
  deletingSpeed = 50,
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
      timeout = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);

  return <span>{displayedText}</span>;
};

export default function HelloPage() {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "350px", md: "550px" },
        overflow: "hidden",
      }}
    >
      {/* الصورة */}
      <img
        src={r1}
        alt="Asmaa"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Overlay content */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "flex-end", md: "center" },
          alignItems: { xs: "center", md: "flex-end" },
          px: { xs: 2, md: 30 },
          pb: { xs: 5, md: 0 },
          textAlign: { xs: "center", md: "right" },
          zIndex: 2,
        }}
      >
        {/* Name */}
        <Typography
          variant="h4"
          sx={{
            color: "white",
            mb: 2,
            fontWeight: 700,
            opacity: 0,
            animation: "fadeUp 1s ease forwards",
          }}
        >
          Asmaa Alhamada
        </Typography>

        {/* Job title */}
        <Typography
          variant="h6"
          sx={{
            color: "#c319d2",
            fontWeight: 700,
            mb: 2,
            borderRight: { xs: "none", md: "2px solid #c319d2" },
            pr: { md: "6px" },
            opacity: 0,
            animation: "fadeUp 1s ease forwards",
            animationDelay: "0.3s",
          }}
        >
          <TypingText text="Web Developer" />
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: "1.1rem",
            color: "#ddd",
            maxWidth: "400px",
          }}
        >
          Hello, I am Asmaa, passionate about building websites and developing
          smart solutions
          <br />
          <br />
          Where creativity meets technology.
        </Typography>

        {/* Button */}
        <Link to="/conect" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#c319d2",
              color: "#fff",
              fontSize: "18px",
              borderRadius: 2,
              textTransform: "none",
              px: 4,
              py: 1.2,
              zIndex: 2,
              "&:hover": {
                backgroundColor: "#a315b0",
              },
            }}
          >
            Contact Me
          </Button>
        </Link>
      </Box>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Box>
  );
}