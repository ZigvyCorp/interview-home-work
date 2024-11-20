import React from 'react';
import { Box } from '@mui/material';

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: '#1976d2',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ color: '#fafafa' }}>@9/11/2023</Box>
      </Box>
    </>
  );
};

export default Footer;
