import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Icon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import Clock from './Clock';
import DarkMode from './DarkMode/DarkMode/DarkMode';
import { useState } from 'react';

const pages = ['Home', 'ContactUs'];

function ResponsiveAppBar({ toggleDarkMode, isDarkMode }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElAbout, setAnchorElAbout] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenAboutMenu = (event) => {
    setAnchorElAbout(event.currentTarget);
  };

  const handleCloseAboutMenu = () => {
    setAnchorElAbout(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isDarkMode ? '#000000' : '#61C0BF',
        border: isDarkMode ? '1px solid white' : 'none',
        position: 'fixed',
        width: '100%',
        height: '75px',
        borderBottomLeftRadius: '25px',
        borderBottomRightRadius: '25px',
        padding: 0,
      }}
    >
      <Container maxWidth="xl" sx={{ maarginTop: '0' }}>
        <Toolbar disableGutters sx={{ marginBottom: '0' }}>
          <Icon sx={{ color: 'white', fontSize: '50px', marginRight: '10px', marginBottom: '25px' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'garamond',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
              marginBottom: '25px',
              fontSize: '35px',
            }}
          >
            <Link style={{ textDecoration: 'none', color: 'white' }} to={`/`}>
              Ceylon Crush
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={`/Home`}>
                  <Typography textAlign="center">Home</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleOpenAboutMenu}>
                <Typography textAlign="center">About Us</Typography>
              </MenuItem>
              <Menu
                anchorEl={anchorElAbout}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElAbout)}
                onClose={handleCloseAboutMenu}
                sx={{
                  '& .MuiPaper-root': {
                    backgroundColor: isDarkMode ? '#333' : '#fff',
                    color: isDarkMode ? '#fff' : '#000',
                  },
                }}
              >
                <Link style={{ textDecoration: 'none', color: isDarkMode ? 'white' : 'black' }} to="/AboutUs">
                <MenuItem onClick={handleCloseAboutMenu}>
                    <Typography textAlign="center">About Us</Typography>  
                </MenuItem></Link>
                <Link style={{ textDecoration: 'none', color: isDarkMode ? 'white' : 'black' }} to="/AboutUs/History">
                <MenuItem onClick={handleCloseAboutMenu}>
                <Typography textAlign="center">History</Typography>
                </MenuItem></Link>
              </Menu>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={`/ContactUs`}>
                  <Typography textAlign="center">Contact Us</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'garamond',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Ceylon Crush
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginBottom: '25px' }}>
            <Link style={{ textDecoration: 'none', color: 'white', fontFamily: 'Arial' }} to={`/Home`}>
              <Button
                key="Home"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
            </Link>
            <Button
              key="AboutUs"
              onClick={handleOpenAboutMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              About Us
            </Button>
            <Menu
              anchorEl={anchorElAbout}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElAbout)}
              onClose={handleCloseAboutMenu}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: isDarkMode ? '#333' : '#fff',
                  color: isDarkMode ? '#fff' : '#000',
                },
              }}
            >
              <MenuItem onClick={handleCloseAboutMenu}>
                <Link style={{ textDecoration: 'none', color: isDarkMode ? 'white' : 'black' }} to="/AboutUs">
                  <Typography textAlign="center">About Us</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseAboutMenu}>
                <Link style={{ textDecoration: 'none', color: isDarkMode ? 'white' : 'black' }} to="/AboutUs/History">
                  <Typography textAlign="center">History</Typography>
                </Link>
              </MenuItem>
            </Menu>
            <Link style={{ textDecoration: 'none', color: 'white', fontFamily: 'Arial' }} to={`/ContactUs`}>
              <Button
                key="ContactUs"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Contact Us
              </Button>
            </Link>
          </Box>

          <div className="clock" style={{ marginBottom: '10px' }}>
            <Clock />
          </div>
          <div className="togglebutton" style={{ marginBottom: '35px', marginLeft: '25px' }}>
            <DarkMode toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
