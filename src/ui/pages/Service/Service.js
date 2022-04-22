import { Container, Typography } from '@mui/material'
import React from 'react'
import { Title } from '../../../components/common/Title'

export const Service = () => {
  return (
    <>
      <Container fixed sx={{ padding: '100px auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: '100px', gap:'20px' }}>
      <br /> <br /> 
        <Title>
          We offer plethora of service
        </Title>
        <br />
        <Typography variant='h5' color='#FFD76D99'>
          *A gentle reminder for our readers before we start
        </Typography>
        <br />
        <Typography variant='h6' color='#FFD76D99' textAlign='center'>
          We do not provide all the other services online, to avail any of the services we recommend to consult with our expert if that service is relevant and favourable to your conditions.
          For more details regarding the services as well as availing them, do contact us through our mail loremipsum@gmail.com.
        </Typography>
       
        {Data.map((item, index) =>
          <>
           <br /> <br /> <br /> 
            <Title>
              {item.title}
            </Title>
            <br />
            <Typography variant='h6' color='#FFD76D99' textAlign='center'>
              {item.details}
            </Typography>
          </>
        )}
      </Container>
    </>
  )
}



const Data = [
  {
    title: 'Tarot card Reading',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborin.'
  },
  {
    title: 'Numerology',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborin.'
  },
  {
    title: 'Spiritual Guidance',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborin.'
  },
  {
    title: 'Holistic and Alternate Healing',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborin.'
  },
  {
    title: 'Runes and Crystal Therapy',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborin.'
  },
  {
    title: 'Vaastu & Graphology',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborin.'
  },
  {
    title: 'Tasseomancy & Scrying',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborin.'
  },
  {
    title: 'Reiki & access bar practitioner',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborin.'
  },
]