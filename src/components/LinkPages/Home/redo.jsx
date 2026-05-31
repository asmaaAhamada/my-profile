import { Box, Card, CardContent, Grid, Typography, useTheme } from "@mui/material";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
import { motion } from "framer-motion";

export default function RedoAt() {
  const theme = useTheme();

  const data = [
    { day: "MUI", sales: 90 },
    { day: "React_Icon", sales: 75 },
    { day: "Mui_Icons", sales: 80 },
    { day: "Code_Pen", sales: 50 },
    { day: "Boot_Strab", sales: 40 },
    { day: "Lutti", sales: 40 },
  ];

  // إعدادات ظهور كروت المهارات (تظهر واحد تلو الآخر)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 120, damping: 12 } 
    },
  };

  return (
    <Grid container spacing={4}>
      {/* UI CARD - الإحصائيات مع أنيميشن القفز الفخم */}
      <Grid item xs={12} md={6}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, scaleY: 0.3, transformOrigin: "bottom center" }} // بيبدأ وهو مضغوط من الأسفل
          whileInView={{ opacity: 1, scaleY: 1 }} // بيطول ليستقر
          viewport={{ once: true }}
          transition={{ 
            type: "spring", 
            stiffness: 80,  // سرعة القفزة
            damping: 10,    // بيعمل تموج واهتزاز خفيف قبل ما يستقر (Bounce Effect)
            duration: 1.2 
          }}
        >
          <Card sx={{ backgroundColor: "#000", color: "white", height: "100%" }}>
            <Box
              sx={{
                p: 2,
                backgroundColor: '#121212',
                borderBottom: `1px solid #c911eeff`,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <EmojiObjectsIcon fontSize="large" sx={{ color: '#c911eeff' }} />
              <Box>
                <Typography variant="h6" fontWeight="600" color='white'>
                  UI Skills
                </Typography>
                <Typography variant="body2" sx={{ color: '#c911eeff' }}>
                  Design & Components
                </Typography>
              </Box>
            </Box>

            <CardContent sx={{ position: "relative" }}>
              <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={25}
                height={280}
                style={{ background: { fill: "transparent" } }}
              >
                <VictoryAxis
                  tickValues={data.map(d => d.day)}
                  style={{
                    tickLabels: { fill: 'white', fontSize: 10, fontWeight: 500 },
                    axis: { stroke: "rgba(255,255,255,0.2)" },
                  }}
                />
                <VictoryAxis
                  dependentAxis
                  tickFormat={(x) => `%${x}`}
                  style={{
                    axis: { stroke: "transparent" },
                    tickLabels: { fill: "#aaa", fontSize: 10 },
                    grid: { stroke: "rgba(201,17,238,0.1)", strokeDasharray: "4" }
                  }}
                />
                <VictoryBar
                  data={data}
                  x="day"
                  y="sales"
                  barWidth={14}
                  style={{
                    data: {
                      fill: ({ index }) => index % 2 === 0 ? "#c911ee" : "#7a1cff",
                      filter: "drop-shadow(0px 0px 8px rgba(201, 17, 238, 0.5))",
                    },
                  }}
                />
              </VictoryChart>
            </CardContent>
          </Card>
        </Box>
      </Grid>

      {/* LOGIC CARD - المهارات البرمجية */}
      <Grid item xs={12} md={6}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card sx={{ backgroundColor: "#000", color: "white", height: "100%" }}>
            <Box
              sx={{
                backgroundColor: '#121212',
                p: 2,
                borderBottom: `1px solid #c911eeff`,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <EmojiObjectsIcon fontSize="large" sx={{ color: '#c911eeff' }} />
              <Box>
                <Typography variant="h6" fontWeight="600" color='white'>
                  Logic Skills
                </Typography>
                <Typography variant="body2" sx={{ color: '#c911eeff' }}>
                  Language, Frameworks & Performance
                </Typography>
              </Box>
            </Box>

            <CardContent>
              <Box
                component={motion.div}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 2,
                }}
              >
                {[
                  "React_js", "Next_js", "java_script", "Html", "Css",
                  "State Management", "API Integration", "Reusable Logic",
                  "Performance Optimization", "Scalability", "Redux",
                  "Redux_Toolkit", "contextApi", "Redux_Dev_Tools"
                ].map((item) => (
                  <Box
                    key={item}
                    component={motion.div}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      boxShadow: '0 0 20px rgba(195, 25, 210, 0.4)',
                      borderColor: 'rgba(195, 25, 210, 0.8)'
                    }}
                    sx={{
                      p: 1.8,
                      borderRadius: "14px",
                      background: "linear-gradient(145deg, #1a1a1a, #2a0a2f)",
                      border: "1px solid rgba(195, 25, 210, 0.2)",
                      textAlign: "center",
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      color: "white",
                      cursor: 'default',
                    }}
                  >
                    {item}
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}