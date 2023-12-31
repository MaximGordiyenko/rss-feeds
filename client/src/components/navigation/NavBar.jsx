import { useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import { MenuOutlined, ApiOutlined } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { pages, settings } from "../../constants/navbar.constants.js";
import { Logout } from "../Logout.jsx";
import { LinkCSS } from "./navbar.styles.js";

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ApiOutlined sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            FEEDS
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(event) => setAnchorElNav(event.currentTarget)}
              color="inherit">
              <MenuOutlined/>
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
              onClose={() =>setAnchorElNav(null)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}>
              {pages.map(({ id, link, page }) => (
                <MenuItem key={id} onClick={() => setAnchorElNav(null)}>
                  <LinkCSS to={link}>{page}</LinkCSS>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <ApiOutlined sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            FEEDS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({ id, link, page }) => (
              <Button
                key={id}
                onClick={() => setAnchorElNav(null)}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                <LinkCSS to={link}>{page}</LinkCSS>
              </Button>
            ))}
          </Box>
          
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={(event) => setAnchorElUser(event.currentTarget)} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src=""/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}>
              {settings.map(({ id, link, page }) => (
                <MenuItem key={id} onClick={() => setAnchorElUser(null)}>
                  <Link to={link}>{page}</Link>
                </MenuItem>
              ))}
              <Logout/>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
