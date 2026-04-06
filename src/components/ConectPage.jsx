import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
  Snackbar,
  useTheme,
} from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

export default function ConectPage() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const contacts = [
    {
      icon: <WhatsAppIcon />,
      label: "WhatsApp",
      link: "https://wa.me/0991401566",
      color: "#25D366",
    },
    {
      icon: <TelegramIcon />,
      label: "Telegram",
      link: "https://t.me/Asmaa_alhmada",
      color: "#229ED9",
    },
    {
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/asmaa-alhamada-a45127363/?originalSubdomain=sy",
      color: "#0A66C2",
    },
    {
      icon: <FacebookIcon />,
      label: "Facebook",
      link: "https://www.facebook.com/asmaa.alhamada.2025",
      color: "#1877F2",
    },
    {
      icon: <InstagramIcon />,
      label: "Instagram",
      link: "https://www.instagram.com/asmaaalhamada4/",
      color: "#E4405F",
    },
    {
      icon: <EmailIcon />,
      label: "Email",
      email: "asmaalhamada4@gmail.com",
      color: theme.palette.primary.main,
    },
  ];

  const handleEmailCopy = (email) => {
    navigator.clipboard.writeText(email);
    setOpen(true);
  };

  return (
    <>
      <Card
        sx={{
          mt: 2,
          backgroundColor: "#121212",
          borderRadius: "20px",
        }}
      >
        <CardContent>
          <Typography variant="h4" fontWeight="600" mb={1} color="purple">
            Contact Me
          </Typography>

          <Typography
            variant="h6"
            sx={{ color: "#f7f1f1" }}
            mb={3}
          >
            Let’s connect and build something great 
          </Typography>

          <Grid container spacing={3}>
            {contacts.map((item, index) => (
              <Grid item xs={6} sm={4} md={2} key={item.label}>
                <Box
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
                    gap: 1,
                    p: 2,
                    borderRadius: "18px",
                    color: "white",

                    // ✨ دخول تدريجي
                    opacity: 0,
                    transform: "translateY(25px)",
                    animation: "fadeUp 0.6s ease forwards",
                    animationDelay: `${index * 0.1}s`,

                    transition: "0.3s",

                   
                  }}
                >
                  <IconButton
                    sx={{
                      bgcolor: item.color,
                      color: "#fff",
                      width: 56,
                      height: 56,
                      transition: "0.3s",

                     
                    }}
                  >
                    {item.icon}
                  </IconButton>

                  <Typography variant="body2" fontWeight="500">
                    {item.label}
                  </Typography>

                  {item.email && (
                    <Typography
                      variant="caption"
                      sx={{ opacity: 0.7, fontSize: "11px" }}
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
      />

      {/* animation */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}