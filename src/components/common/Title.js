import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React   from 'react'

export const Title = ({children}) => {
  return (
    <Box sx={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-end', width: '100%', justifyContent: 'center' }}>
    <Box>
      <img src={require("../../ui/assets/common/Line 1.png")} alt="" />
    </Box>
    <Box>
      <Typography variant='h2' color='#FFD76D' textAlign='center' >
        {children}
      </Typography>
    </Box>
    <Box>
      <img src={require("../../ui/assets/common/Line 1.png")} alt="" />
    </Box>
  </Box>
  )
}
