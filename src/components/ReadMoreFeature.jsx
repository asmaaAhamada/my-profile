import { useState, useRef, useEffect } from "react";
import { Typography, Button, Box } from "@mui/material";

export default function ReadMoreFeature({ text, lines = 3 }) {
  const [expanded, setExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      setShowButton(
        textRef.current.scrollHeight > textRef.current.clientHeight
      );
    }
  }, []);

  return (
    <Box>
      <Typography
        ref={textRef}
        variant="body2"
        sx={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: expanded ? "unset" : lines,
          overflow: "hidden",
        }}
      >
        {text}
      </Typography>

      {showButton && (
        <Button
          onClick={() => setExpanded(!expanded)}
          sx={{
            textTransform: "none",
            fontSize: "12px",
            color: "#c319d2",
            p: 0,
            mt: 0.5,
          }}
        >
          {expanded ? "See less" : "See more"}
        </Button>
      )}
    </Box>
  );
}