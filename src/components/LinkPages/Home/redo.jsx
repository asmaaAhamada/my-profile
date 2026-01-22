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
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    transition: "0.3s",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
    },
  };

  return (
    <Grid container spacing={4}>
      
      {/* UI CARD */}
      <Grid item xs={12} md={6}>
        <Card sx={cardStyle}>
          <Box
            sx={{
              p: 2,        backgroundColor: theme.palette.background.default,

              borderBottom: `1px solid ${theme.palette.divider.main}`,

            }}
          >
            <Typography variant="h6" fontWeight="600">
                      <EmojiObjectsIcon fontSize="large" sx={{  color: theme.palette.primary.main }} />
              
              UI Skills
            </Typography>
            <Typography variant="body2" sx={{color:theme.navbar.icon}}>
              Design & Components
            </Typography>
          </Box>

          <CardContent>
            <VictoryChart
              theme={VictoryTheme.material}
              domainPadding={0.3}
              height={230}
            >
              <VictoryAxis
                tickValues={data.map(d => d.day)}
                style={{
                  tickLabels: { fill: theme.palette.text.primary, fontSize: 9 },
                  axis: { stroke: theme.palette.divider },
                }}
              />
              <VictoryAxis
                dependentAxis
                tickFormat={(x) => `%${x}`}
                style={{
                  tickLabels: { fill: theme.palette.text.primary, fontSize: 9 },
                  grid: { stroke: theme.palette.divider, strokeDasharray: "2" },
                }}
              />
              <VictoryBar
                data={data}
                x="day"
                y="sales"
                barWidth={8}
                style={{
                  data: {
                    fill: barColor,
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
        backgroundColor: theme.palette.background.default,
              p: 2,
              borderBottom: `1px solid ${theme.palette.divider.main}`,
            }}
          >
            <Typography variant="h6" fontWeight="600">
                                    <EmojiObjectsIcon fontSize="large" sx={{  color: theme.palette.primary.main }} />

              Logic Skills
            </Typography>
            <Typography variant="body2" sx={{color:theme.navbar.icon}}>
           Language , frameworks,  State, Data & Performance
            </Typography>
          </Box>

          <CardContent>
            <Box
              sx={{
                display: "grid",
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
                "Redux","Redux_Tolkit" ,"contextApi" ,"Redux_Dev_Tools"
              ].map((item) => (
                <Box
                  key={item}
                  sx={{
                    p: 2,
                    borderRadius: "14px",
                    bgcolor: theme.palette.background.default,
                    textAlign: "center",
                    fontWeight: 500,
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
