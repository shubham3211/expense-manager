import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom'

export default () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  }

  const renderMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={handleMobileMenuClose}
      open={isMobileMenuOpen}
    >
      <MenuItem onClick={handleMobileMenuClose}>
        <Link to="/login" style={{textDecoration: "none"}}>
          <Button>
            Login
          </Button>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link to="/home" style={{textDecoration: "none"}}>
          <Button>
            Home
          </Button>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link to="/month" style={{textDecoration: "none"}}>
          <Button>
            Month
          </Button>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link to="/week" style={{textDecoration: "none"}}>
          <Button>
            Week
          </Button>
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{flexGrow:1}}>
          Expense Manager
        </Typography>
        <Box display={{xs: 'none', md: 'block'}}>
          <Link to="/login" style={{textDecoration: "none"}}>
            <Button style={{color: "#fff"}}>
              Login
            </Button>
          </Link>
          <Link to="/home" style={{textDecoration: "none"}}>
            <Button style={{color: "#fff"}}>
              Home
            </Button>
          </Link>
          <Link to="/month" style={{textDecoration: "none"}}>
            <Button style={{color:"#fff"}}>
              Month
            </Button>
          </Link>
          <Link to="/week" style={{textDecoration: "none"}}>
            <Button style={{color: "#fff"}}>
              Week
            </Button>
          </Link>
        </Box>
        <Box display={{md: 'none'}}>
          <IconButton onClick={handleMobileMenuOpen} style={{color: '#fff'}}>
            <MoreIcon />
          </IconButton>
          {renderMenu}
        </Box>
      </Toolbar>
    </AppBar>
  )
}