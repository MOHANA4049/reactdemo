import React from 'react';
import { Drawer, List, ListItem, ListItemText, Divider, Typography } from '@mui/material';

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#f4f4f4',
        },
      }}
    >
      <div style={{ padding: '16px' }}>
        <Typography variant="h6" component="div">
          Categories
        </Typography>
      </div>
      <Divider />
      <List>
        {['Electronics', 'Fashion', 'Home Appliances', 'Books'].map((text, index) => (
          <ListItem button key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
