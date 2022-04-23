import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { Title } from '../common/Title'

export const Banner = () => {
  return (
    <>
      <Container fixed sx={{ padding: '200px auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '30px', mt: '100px' }} >
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems:'center', width:'80%' }}>
          <img src={require("../../ui/assets/banner/banner.png")} alt="" style={{width:'100%'}} />
        </Box>
        <br />
        <Box width={{ xs: '90%', md: '70%' }} >
          <Typography variant='h1' textAlign='center' color='#FFD76D'>
            Personalized, Professional Readings To Keep You Looking On The Bright Side
          </Typography>
        </Box>
        <br />
        <Title>Who are we</Title>
        <br />
        <Box>
          <Typography variant='h5' color='#FFD76D99' textAlign='center'>
            Eclectic Divinations For You is a long standing and well reputed Spiritual Guidance company, having been recognised as one of the best services in the country for over a decade. Situated in Andheri West, Mumbai, we offer physical consultations as well as options for teleconference consultations.
            <br />  <br />
            With a long-list of repeat clients and celebrity clients, Eclectic Divinations For You offers a honest, deep knowledgeable and Spiritual & Holistic approach to healing and offering of advice during your readings.
          </Typography>
        </Box>
        <br />
        <Title>
          Get a free reading!
        </Title>
        <br />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <img src={require("../../ui/assets/banner/Rectangle 36.png")} alt="" />
          <br />
          <Typography variant='h3' color='#FFD76D99' textAlign='center'>
            Tap the angel card to view the message the universe has for you
          </Typography>
        </Box>

      </Container>
    </>
  )
}
