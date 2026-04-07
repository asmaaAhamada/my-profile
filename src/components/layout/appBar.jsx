import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CallMissedIcon from '@mui/icons-material/CallMissed'; 
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//icons
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CottageIcon from '@mui/icons-material/Cottage';

import CallIcon from '@mui/icons-material/Call';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PublicIcon from '@mui/icons-material/Public';
const drawerWidth = 240;
const navItems = ['Public', 'Skills','Projects','Conect'];



function DrawerAppBar(props) {
  const { window, toggleMode, mode } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(prev => !prev);
  };
const iconsMap = {
  Public: <PublicIcon fontSize='small' sx={{fontSize:'25px' ,color: '#c319d2ff'}} />,
  Skills: <PlaylistAddIcon fontSize='small' sx={{fontSize:'35px' ,color: '#c319d2ff'}} />,
  Projects: <BusinessCenterIcon fontSize='small'sx={{fontSize:'25px',color: '#c319d2ff'}}/>,
  Conect: <CallIcon fontSize='small'sx={{fontSize:'25px' ,color: '#c319d2ff'}}/>,
};
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: theme.palette.background.default, height: '100%' }}>
      <Typography variant="h5" sx={{ my: 2, color: theme.navbar.border }}>
Asmaa Alhamada      </Typography>
     
<Typography variant="h5" sx={{ my: 2, color: theme.navbar.border }}>
Asmaa Alhamada      </Typography>    <Divider />
      <List>
        {navItems.map((item) => {
          const href = `/${item.toLowerCase()}`;
          const isActive = location.pathname === href;

          return (
            <ListItem key={item} disablePadding>
              <ListItemButton
                component={Link}
  to={href}
                sx={{
                    gap:2,
                  bgcolor: isActive ? theme.palette.action.selected : 'transparent',
                  color: isActive ? theme.navbar.border : 'white',
                  '&:hover': {
                    bgcolor: theme.palette.action.hover,
                  },
                }}
              >
                {iconsMap[item]}
                <ListItemText primary={item} sx={{ ml: 1 }} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position="fixed"elevation={0} sx={{zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#000000', color: theme.palette.text.primary }}>
<Toolbar sx={{ position: 'relative' }}>          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } ,color: theme.navbar.border}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ color: theme.navbar.border,flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
Asmaa Alhamada           </Typography>
<Box
  sx={{
    display: { xs: 'none', sm: 'flex' },
    alignItems: 'center',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  }}
>            {navItems.map((item) => {
              const href = `/${item.toLowerCase()}`;
              const isActive = location.pathname === href;

              return (
               <Button
  component={Link}
  to={href}
  key={item}
  sx={{
    gap: 1,
 bgcolor: isActive ? theme.palette.action.selected : 'transparent',
                  color: isActive ? theme.navbar.border : 'white',    borderBottom: isActive
      ? `2px solid ${theme.palette.primary.main1}`
      : '2px solid transparent',
    borderRadius: 0,
    '&:hover': {
      bgcolor: 'transparent',
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
    ml: 1,
  }}
>
  {iconsMap[item]}
  {item}
</Button>
              );
            })}
           
          </Box>


      <Typography
  onClick={toggleMode}
  sx={{
    position: 'absolute',
    right: 16,
    cursor: 'pointer',
    fontWeight: 'bold',
    
    fontSize: { xs: '16px', sm: '24px' }, // 👈 تصغير على الموبايل
    whiteSpace: 'nowrap', // 👈 يمنع النزول سطر جديد
    
    display: { xs: 'none', sm: 'block' }, // 👈 إخفاء على الموبايل (أفضل حل)

    background: 'linear-gradient(90deg, #ffffff, #c319d2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 0 8px rgba(195, 25, 210, 0.6)',
    transition: '0.3s',
    '&:hover': {
      textShadow:
        '0 0 14px rgba(255, 255, 255, 0.9), 0 0 20px rgba(195, 25, 210, 0.8)',
      transform: 'scale(1.05)',
    },
  }}
>
  Front-End
</Typography>



        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box component="main" sx={{ p: 3, flexGrow: 1 }}>
        {/* <Toolbar /> */}
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
  toggleMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default DrawerAppBar;
