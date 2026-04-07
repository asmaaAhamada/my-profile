import { Box, Grid, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

/* ===== Counter Component ===== */
const Counter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    const incrementTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <>{count}</>;
};

const StatsSection = () => {
  const theme = useTheme();

  const items = [
    { number: "2", label: "Years of Experience", suffix: "+" },
    { number: "5", label: "Projects Completed", suffix: "+" },
    { number: "10", label: "Technologies Used", suffix: "+" },
    { number: "100", label: "Passion & Commitment", suffix: "%" },
  ];

  return (
    <Box
      sx={{
        py: 6,
        px: 2, // 👈 يمنع الخروج برا الشاشة
        backgroundColor: "#121212",
        overflowX: "hidden", // 👈 يمنع السكرول يمين
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {items.map((item, index) => (
          <Grid item xs={6} sm={6} md={3} key={index}>
            <Box
              sx={{
                textAlign: "center",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                }}
              >
                <Counter value={item.number} />
                {item.suffix}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  color: "white",
                  fontSize: { xs: "14px", sm: "16px" }, // 👈 تحسين للموبايل
                }}
              >
                {item.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSection;