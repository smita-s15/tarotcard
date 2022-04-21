import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const Title = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', width:'100%' }}>
      <img src={require("../../ui/assets/common/Line 1.png")} alt="" />
      <Typography variant='h2' color='#FFD76D' >
        {children}
      </Typography>
      <img src={require("../../ui/assets/common/Line 1.png")} alt="" />
    </Box>
  )
}
