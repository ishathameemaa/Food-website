import React, { useState } from 'react';
import { Box, styled, Typography } from '@mui/material';
import Custmbtn from '../CustomBtn/Custmbtn';
import logoImg from '../../Assets/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import HomeIcon from '@mui/icons-material/Home';
import ContactIcon from '@mui/icons-material/Contacts';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState({ left: false });
  const navigate = useNavigate();

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navTitles.map((item, index) => (
          <ListItem key={index} disablePadding onClick={() => navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <FeaturedPlayListIcon />}
                {index === 2 && <MiscellaneousServicesIcon />}
                {index === 3 && <ContactIcon />}
              </ListItemIcon>
              <ListItemText primary={item.display} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const navTitles = [
    {
      path: '/',
      display: 'Home',
    },
    {
      path: '/dishes',
      display: 'Dishes',
    },
    {
      path: '/services',
      display: 'Services',
    },
    {
      path: '/about',
      display: 'About Us',
    },
  ];

  const NavBarLinksBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }));

  const NavBarLinkBox = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    color: '#4F5361',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      color: 'white',
    },
  }));

  const NavbarLogo = styled('img')(({ theme }) => ({
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: 'pointer',
    display: 'none',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  }));

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '40px',
        maxWidth: 'auto',
        backgroundColor: '#FED801',
        marginLeft: '0px',
        marginBottom: '-24px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CustomMenuIcon onClick={toggleDrawer('left', true)} />
          <Drawer anchor="left" open={mobileMenu.left} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
          <NavbarLogo src={logoImg} alt="Logo" />
        </Box>
        <NavBarLinksBox>
          {navTitles.map((item, index) => (
            <NavBarLinkBox key={index} variant="body2" onClick={() => navigate(item.path)}>
              {item.display}
            </NavBarLinkBox>
          ))}
        </NavBarLinksBox>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        <NavBarLinkBox variant="body2">Sign Up</NavBarLinkBox>
        <Custmbtn backgroundColor="#0F1B4C" color="#fff" buttonText="Register" />
      </Box>
    </Box>
  );
};

export default Header;


