import React, {useContext, useState, useEffect } from 'react'
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Badge, Box, IconButton, Toolbar as MUItoolbar, Typography, Container } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Input } from '@mui/material';
import { GlobalContext } from '../services/context/GlobalContext';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('xl')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('xl')]: {
      width: '20ch',
    },
  },
}));

const Toolbar = () => {
  const [q, setQ] = useState("");
  const { setQueryParam, basket } = useContext(GlobalContext);

  useEffect(() => {
    setQueryParam(q)
  }, [q])

  return (
          <Box sx={{mb:10}}>
            <AppBar position="fixed" >
            <Container disableGutters>
              <MUItoolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                >
                  <Badge badgeContent={basket} color="error">
                    <ShoppingBasketIcon />
                  </Badge>
                </IconButton>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Busqueda…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={q}
                    onChange={(e)=>{setQ(e.target.value)}}
                  />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
                <Box>
                  <IconButton
                    size="large"
                    aria-label="show more"
                    // aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    // onClick={handleMobileMenuOpen}
                    color="inherit"
                  >
                    <FilterListIcon />
                  </IconButton>
                </Box>
              </MUItoolbar>
            </Container>
            </AppBar>
          </Box>
  );
}

export default Toolbar;
