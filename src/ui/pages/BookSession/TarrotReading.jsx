import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Title } from '../../../components/common/Title'

export const TarrotReading = () => {
  return (
    <Container fixed sx={{ padding: '100px auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '30px', mt: '50px' }} >
      <br /><br />
      <Title>Tarot reading sessions</Title>
      <br /><br />
      <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
        {Data.map((item, index) =>
          <Grid item xs='12' sm='8' md='4' lg='3' key={index} sx={{ flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            {item.img}
            <Typography color='#FFFFFF' textAlign='center' margin='20px' border='1px solid #FFFFFF' borderRadius='10px' padding='5px' width={{ xs: '60%', md: '70%' }}>
              {item.title1} <br /> {item.title2}
            </Typography>
          </Grid>
        )}
      </Grid>
      <Box sx={{ border: '1px solid #FFD76D', borderRadius: '10px', display: "flex", alignItems: 'center', justifyContent: 'center', width: '60%' }}>
        <Typography color='#FFF' fontSize='20px' lineHeight='30px' textAlign='center' width='80%' margin='10px auto' >
          Happy Hour Every Afternoon from 1pm to 5pm
          999/- for 40 minutes Reading with Angel Card Advice
        </Typography>
      </Box>
      <br />
      <Box sx={{ border: '1px solid #FFD76D', borderRadius: '10px', display: "flex", alignItems: 'center', justifyContent: 'center', width: '60%' }}>
        <Typography color='#FFF' fontSize='20px' lineHeight='30px' textAlign='center' width='60%' margin='10px auto'  >
          Sunday sessions need to be Pre-booked as early as possible
        </Typography>
        <br /><br />
      </Box>
      <br /><br />
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '20px' }}>
        <Button size="large" variant="outlined" style={{ textTransform: 'inherit' }} sx={{ borderColor: '#FFD76D', color: '#FFD76D', margin: '20px', width: '170px' }} >
          Back
        </Button>
        <Button size="large" variant="contained" style={{ textTransform: 'inherit' }} sx={{ bgcolor: '#FFD76D', color: 'black', margin: '20px', width: '170px' }} >
          <Link style={{ color: '#000', textDecoration: 'none' }} to="/BookingDetails">
            Next
          </Link>
        </Button>
      </Box>

      <br /><br />
      <Title>Suggestion Card</Title>
      <br /><br />
      <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
        {Data.map((item, index) =>
          <Grid item xs='12' sm='8' md='4' lg='3' key={index} sx={{ flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            {item.img}
            <Typography color='#FFFFFF' textAlign='center' margin='20px' border='1px solid #FFFFFF' borderRadius='10px' padding='5px' width={{ xs: '60%', md: '70%' }}>
              {item.title1} <br /> {item.title2}
            </Typography>
          </Grid>
        )}
      </Grid>

    </Container>
  )
}



const Data = [
  {
    title1: '20 minutes',
    title2: '999/-',
    img: <img src={require("../../assets/BookSession/Rectangle 45.png")} alt='' />,
  },
  {
    title1: '45 minutes',
    title2: '1999/-',
    img: <img src={require("../../assets/BookSession/Rectangle 45.png")} alt='' />,
  },
  {
    title1: '75 minutes',
    title2: '2999/-',
    img: <img src={require("../../assets/BookSession/Rectangle 45.png")} alt='' />,
  },
]
