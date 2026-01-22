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
          backgroundColor: theme.palette.background.default,
          mt: 2,
          borderRadius: "24px",
        }}
      >
        <CardContent>
          <Typography variant="h5" fontWeight="600" mb={1}>
            Contact Me
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.navbar?.icon || "text.secondary" }}
            mb={3}
          >
            Let’s connect and build something great 🚀
          </Typography>

          <Grid container spacing={3}>
            {contacts.map((item) => (
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
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: theme.palette.action.hover,
                      transform: "translateY(-6px)",
                    },
                  }}
                >
                  <IconButton
                    sx={{
                      bgcolor: item.color,
                      color: "#fff",
                      width: 56,
                      height: 56,
                      "&:hover": {
                        bgcolor: item.color,
                      },
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

      {/* Snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        message="Email copied to clipboard 📋"
      />
    </>
  );
}
