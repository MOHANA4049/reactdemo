import React from 'react';
import { AppBar, Toolbar, InputBase, Button, IconButton ,Typography } from '@mui/material';
import { Search as SearchIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import { Box } from '@mui/system';

function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Store Name
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', borderRadius: '4px', padding: '0 8px' }}>
          <SearchIcon sx={{ color: 'gray' }} />
          <InputBase
            placeholder="Search products..."
            inputProps={{ 'aria-label': 'search' }}
            sx={{ marginLeft: '8px', flex: 1 }}
          />
        </Box>

        <Button color="inherit" sx={{ marginLeft: '16px' }}>Home</Button>
        <IconButton color="inherit" aria-label="cart">
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
