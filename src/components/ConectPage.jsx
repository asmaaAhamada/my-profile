import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
  Snackbar,
} from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

// استيراد الفريمر موشن
import { motion } from "framer-motion";

export default function ConectPage() {
  const [open, setOpen] = useState(false);

  const contacts = [
    { icon: <WhatsAppIcon />, label: "WhatsApp", link: "https://wa.me/0991401566", color: "#25D366" },
    { icon: <TelegramIcon />, label: "Telegram", link: "https://t.me/Asmaa_alhmada", color: "#229ED9" },
    { icon: <LinkedInIcon />, label: "LinkedIn", link: "https://www.linkedin.com/in/asmaa-alhamada-a45127363/", color: "#0A66C2" },
    { icon: <FacebookIcon />, label: "Facebook", link: "https://www.facebook.com/asmaa.alhamada.2025", color: "#1877F2" },
    { icon: <InstagramIcon />, label: "Instagram", link: "https://www.instagram.com/asmaaalhamada4/", color: "#E4405F" },
    { icon: <EmailIcon />, label: "Email", email: "asmaalhamada4@gmail.com", color: "#BB001B" },
  ];

  const handleEmailCopy = (email) => {
    navigator.clipboard.writeText(email);
    setOpen(true);
  };

  // إعدادات الـ Stagger (ظهور الأيقونات ورا بعض)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 10 } 
    },
  };

  return (
    <>
      <Card
        component={motion.div}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        sx={{
          mt: 4,
          backgroundColor: "#121212",
          borderRadius: "24px",
          border: "1px solid rgba(255,255,255,0.05)",
          overflow: "visible", // للسماح بتوهج الأيقونات بالخروج من الحدود
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box textAlign="center" mb={4}>
            <Typography variant="h4" fontWeight="700" color="#c319d2" gutterBottom>
              Contact Me
            </Typography>
            <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.7)", fontWeight: 400 }}>
              Let’s connect and build something great 🚀
            </Typography>
          </Box>

          <Grid 
            container 
            spacing={4} 
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            justifyContent="center"
          >
            {contacts.map((item, index) => (
              <Grid item xs={6} sm={4} md={2} key={item.label} textAlign="center">
                <Box
                  component={motion.div}
                  variants={itemVariants}
                  // تأثير الطفو المستمر (Floating)
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2, // كل أيقونة تطفو بتوقيت مختلف
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    filter: `drop-shadow(0px 0px 15px ${item.color})`, // توهج بلون الأيقونة
                  }}
                  onClick={() =>
                    item.email
                      ? handleEmailCopy(item.email)
                      : window.open(item.link, "_blank")
                  }
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <IconButton
                    sx={{
                      bgcolor: "rgba(255,255,255,0.03)", // خلفية شفافة هادئة
                      border: `2px solid ${item.color}`,
                      color: item.color,
                      width: 65,
                      height: 65,
                      transition: "0.4s",
                      "&:hover": {
                        bgcolor: item.color,
                        color: "#fff",
                      },
                    }}
                  >
                    {React.cloneElement(item.icon, { sx: { fontSize: 32 } })}
                  </IconButton>

                  <Typography 
                    variant="body2" 
                    fontWeight="600" 
                    sx={{ color: "white", mt: 1, letterSpacing: 0.5 }}
                  >
                    {item.label}
                  </Typography>

                  {item.email && (
                    <Typography
                      variant="caption"
                      sx={{ 
                        display: { xs: 'none', md: 'block' },
                        opacity: 0.5, 
                        fontSize: "10px", 
                        color: "#fff" 
                      }}
                    >
                      {item.email}
                    </Typography>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        message="Email copied to clipboard 📋"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
}