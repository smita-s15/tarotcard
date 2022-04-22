import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const Title = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', width:'100%' }}>
     <Box borderBottom='1px solid #FFD76D' width={{xs:'15%', md:'20%'}} />
      <Typography variant='h2' color='#FFD76D' textAlign='center'  >
        {children}
      </Typography>
      <Box borderBottom='1px solid #FFD76D' width={{xs:'15%', md:'20%'}} />
    </Box>
  )
}