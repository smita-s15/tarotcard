import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Title } from '../../../components/common/Title'
import CircleIcon from '@mui/icons-material/Circle';
import { Box } from '@mui/system';


export const WhatIDo = () => {
  return (
    <Container fixed sx={{ padding: '100px auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt:'100px' }}>
      <br />
      <Title>What I Do</Title>
      <br />
      <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap:'20px' }} >
        <Grid item xs='10'  sm='6' md='5' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }} >
          {Data.map((item, index) =>
            <Box key={index} color='#FFD76D99' flexDirection='row' sx={{ display: 'flex', alignItems: 'center', alignContent: 'flex-start', gap:{xs:'5px', md:'20px'}, margin: '10px', }}>
              <CircleIcon style={{ width: '10px', height: '10px' }} />
              <Typography variant='h5' >
                {item.title}
              </Typography>
            </Box>
          )}
        </Grid>
        <Grid item xs='6' sm='6' md='5' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
          <img src={require("../../assets/whatI/Rectangle 2 (1).png")} alt=''/>
          <Typography variant='h2' color='#FFD76D' textAlign='center' mt='20px'>
            Raina Ahluwalia
          </Typography>
        </Grid>
      </Grid>
      <br />  <br />
      <Title>About Me</Title>
      <br />
      <Box>
        <Typography variant='h5' color='#FFD76D99' textAlign='center'>
          My name is Raina Ahluwalia. I am a Tarot Shadow master & I began intuitively reading tarot cards over a decade ago , and haven't turned away since. I am skilled in reading for all kinds of situations, but most enjoy helping clients to take steps to better honor and understand themselves.
          <br />   <br />
          My readings are both articulate and insightful, guiding you towards being able to make real changes in your life. Through the cards , I will get down to the the heart of a situation and start connecting the dots, showing how things are related in the bigger picture.
          Conducted with empathy and awareness, my readings offer clarity and guidance, all while giving you a space to enjoy the magic and atmosphere of the reading itself.
          <br />   <br />
          Our services can help in improving the quality of life and we have immense knowledge about solving love/marriage problems, business problems, property disputes and many other issues that can be solved with the proper guidance and insight.
          <br />   <br />
          Feel free to contact us so we can help guide you in the area of your life, which you would like to improve
        </Typography>
      </Box>
    </Container>
  )
}

const Data = [
  {
    title: 'Spiritual Guidance'
  },
  {
    title: 'Tarot And Numerology'
  },
  {
    title: 'Holistic And Alternative Healing'
  },
  {
    title: 'Runes & Crystal Theorapy'
  },
  {
    title: 'Vaastu & Graphology'
  },
  {
    title: 'Tasseomancy & Scrying'
  },
  {
    title: 'Reiki & Accessbar Practitioner'
  },
  {
    title: 'Spiritual Mindfulness Coach'
  },
]
