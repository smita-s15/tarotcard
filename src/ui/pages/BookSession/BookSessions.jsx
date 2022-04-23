import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import {  NavLink } from 'react-router-dom'
import { Title } from '../../../components/common/Title'

export const BookSessions = () => {
  return (
    <>
      <Container fixed sx={{ padding: '100px auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: '100px', gap: '20px' }}>
        <br /> <br />
        <Title>
          Spiritual Guidance and Divination
        </Title>
        <br />
        <Typography variant='h6' color='#FFD76D99' textAlign='center'>
          At its core, spiritual guidance & Divination is the process and experience of receiving wisdom from the divine energies through various Divination tools such as tarot
        </Typography>
        <br />
        <Title>
          Tarot card Reading
        </Title>
        <br />
        <Typography variant='h6' color='#FFD76D99' textAlign='center'>
          The tarot is in essence a soul map, a deep psychological guide to self-empowerment as imaged through 78 symbolic cards.which can help you get a deep insight into your situations and find solutions
        </Typography>
        <NavLink
          style={{ textDecoration: 'none', color: '#000', cursor: 'pointer' }}
          to="/TarrotReading"
        >
          <Button size="large" variant="contained"   >
            Book Session
          </Button>
        </NavLink>

        <br />
        <Typography color='#ffffff' textAlign='center' width='60%' fontSize='20px' margin='20px auto' border='1px solid #FFD76D' borderRadius='10px' padding='10px'>
          Happy Hour Every Afternoon from 1pm to 5pm 999/- for 40 minutes Reading with Angel Card Advice
        </Typography>


        <br />
        <Title>
          Numerology
        </Title>
        <br />
        <Typography variant='h6' color='#FFD76D99' textAlign='center'>
          Numerology is the belief in a divine or mystical relationship between a number and one or more coinciding event Numerology is the study of particular numbers, such as a persons date of birth, in the belief that they may have special significance in a persons life.. It is also the study of the numerical value of the letters in words, names, and ideas
        </Typography>
       
        <NavLink
          style={{ textDecoration: 'none', color: '#000', cursor: 'pointer' }}
          to="/Numerology"
        >
          <Button size="large" variant="contained"     >
            Numerology
          </Button>
        </NavLink>

        <br />
        <Typography color='#ffffff' textAlign='center' width='60%' fontSize='20px' margin='20px auto' border='1px solid #FFD76D' borderRadius='10px' padding='10px'>
          We’ll arrive at your final Session within 3 business days, till then we’re appreciate your patience
        </Typography>


      </Container>
    </>
  )
}
