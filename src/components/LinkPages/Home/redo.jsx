import { Box, Card, CardContent, Grid, Typography, useTheme } from "@mui/material";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

export default function RedoAt() {
  const theme = useTheme();
  const barColor = theme.palette.primary.main;

  const data = [
    { day: "MUI", sales: 90 },
    { day: "React_Icon", sales: 75 },
    { day: "Mui_Icons", sales: 80 },
    { day: "Code_Pen", sales: 50 },
    { day: "Boot_Strab", sales: 40 },
    { day: "Lutti", sales: 40 },

  ];

  const cardStyle = {
  height: "100%",
  backgroundColor: "#000",   
  color: "white",
  transition: "0.3s",
 
};
const style = `
@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;
  return (
    <Grid container spacing={4}>
          <style>{style}</style>

      {/* UI CARD */}
      <Grid item xs={12} md={6}>
        <Card sx={cardStyle }>
          <Box
            sx={{
              p: 2,        backgroundColor:'#121212',

              borderBottom: `1px solid #c911eeff `,

            }}
          >
            <Typography variant="h6" fontWeight="600" color='white'>
                      <EmojiObjectsIcon fontSize="large" sx={{  color: '#c911eeff' }} />
              
              UI Skills
            </Typography>
            <Typography variant="body2" sx={{color:'#c911eeff'}}>
              Design & Components
            </Typography>
          </Box>

          <CardContent sx={{
  position: "relative",
  "&:before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
    background: "radial-gradient(circle, rgba(201,17,238,0.15), transparent)",
    filter: "blur(20px)",
    zIndex: 0,
  }
}}>
           <VictoryChart
  theme={VictoryTheme.material}
  domainPadding={20}
  height={250}
  animate={{
    duration: 1000,
    easing: "quadInOut"
  }}
  style={{
    background: { fill: "transparent" }
  }}
>
              <VictoryAxis
                tickValues={data.map(d => d.day)}
                style={{
                  tickLabels: { fill: 'white', fontSize: 9 },
                  axis: { stroke: theme.palette.divider },
                }}
              />
             <VictoryAxis
  dependentAxis
  tickFormat={(x) => `%${x}`}
  style={{
    axis: { stroke: "transparent" },
    tickLabels: { fill: "#aaa", fontSize: 10 },
    grid: {
      stroke: "rgba(201,17,238,0.15)",
      strokeDasharray: "4"
    }
  }}
/>
             <VictoryBar
  data={data}
  x="day"
  y="sales"
  barWidth={10}
  animate={{
    duration: 1200,
    onLoad: { duration: 800 }
  }}
  style={{
    data: {
      fill: ({ index }) =>
        index % 2 === 0 ? "#c911ee" : "#7a1cff",
      stroke: "#c911ee",
      strokeWidth: 1,
      filter: "drop-shadow(0px 0px 6px rgba(201, 17, 238, 0.6))",
      borderRadius: 6,
    },
  }}
/>
            </VictoryChart>
          </CardContent>
        </Card>
      </Grid>

      {/* LOGIC CARD */}
      <Grid item xs={12} md={6}>
        <Card sx={cardStyle}>
          <Box
            sx={{
  backgroundColor:'#121212',              p: 2,
              borderBottom: `1px solid #c911eeff `,
            }}
          >
            <Typography variant="h6" fontWeight="600" color='white'>
                                    <EmojiObjectsIcon fontSize="large" sx={{  color: '#c911eeff' }} />

              Logic Skills
            </Typography>
            <Typography variant="body2" sx={{color: '#c911eeff'}}>
           Language , frameworks,  State, Data & Performance
            </Typography>
          </Box>

          <CardContent>
            <Box
              sx={{
                display: "grid",backgroundColor:'#000', 
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 2,
              }}
            >
              {[
  "React_js",
  "Next_js",
  "java_script",
  "Html",
  "Css",
  "State Management",
  "API Integration",
  "Reusable Logic",
  "Performance Optimization",
  "Scalability",
  "Redux",
  "Redux_Tolkit",
  "contextApi",
  "Redux_Dev_Tools"
].map((item, index) => (
               <Box
  key={item}
  sx={{
    p: 2,
    borderRadius: "14px",
background: "linear-gradient(145deg, #1a1a1a, #2a0a2f)",
border: "1px solid rgba(195, 25, 210, 0.25)",
boxShadow: "0 0 0px rgba(195, 25, 210, 0.0)",
transition: "0.3s ease",    textAlign: "center",
    fontWeight: 500,
    color: "white",'&:hover': {
  transform: 'translateY(-4px) scale(1.02)',
  boxShadow: '0 0 15px rgba(195, 25, 210, 0.35)',
  border: '1px solid rgba(195, 25, 210, 0.7)',
},

    // ✨ animation
    opacity: 0,
    transform: "translateY(20px)",
    animation: "fadeUp 0.6s ease forwards",
    animationDelay: `${index * 0.08}s`,
  }}
>
  {item}
</Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  );
}
