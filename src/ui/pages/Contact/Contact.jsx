import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Title } from '../../../components/common/Title'
import InstagramIcon from '@mui/icons-material/Instagram';
import { FaFacebook } from 'react-icons/fa';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Contact = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '150px', marginX:'auto' }}>
            <Container fixed sx={{ padding: { xs: '10px auto', md: '100px auto' }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', border: '2px solid #FFD76D', borderRadius: '16px', width: '80%' }}>
                <br />
                <Title>Contact</Title>
                <br />
                <Grid container spacing={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item xs='12' lg='4' >
                        <ContactForm />
                    </Grid>

                    <Grid item xs='12' lg='4' sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column',  }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column',  }} >
                            <Typography variant='h5' color='#FFD76D'>
                                Contact
                            </Typography>
                            <Typography variant='h6' color='#FFD76D'>
                                eclecticdivinationsbyraina@gmail.com
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} >
                            <Typography variant='h5' color='#FFD76D'>
                                Based In
                            </Typography>
                            <Typography variant='h6' color='#FFD76D'>
                                Andheri west, Mumbai
                            </Typography>
                        </Box>
                        <br /><br />
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px' }}>
                            <InstagramIcon style={{ height: '50px', width: '50px', color: '#FFD76D' }} />
                            <FaFacebook style={{ height: '40px', width: '40px', color: '#FFD76D' }} />
                            <TwitterIcon style={{ height: '50px', width: '50px', color: '#FFD76D' }} />
                        </Box>
                    </Grid>
                </Grid>
                <Typography color='#FFFFFF99' textAlign='center' width='60%' margin='20px'  fontSize={{xs:'10px' , md:'15px'}}>
                    We do not provide all the other services online, to avail any of the services we recommend to consult with our expert if that service is relevant and favourable to your conditions.
                    <br />
                    For more details regarding the services as well as availing them,
                    do contact us through our mail loremipsum@gmail.com.
                </Typography>
            </Container>
        </Box>
    )
}










const ContactForm = () => {
    return (
        <form action="">
            <br />
            <div>
                <Typography gutterBottom variant="h5" color='#FFD76D' >
                    Your Name
                </Typography>
                <TextField
                    id=""
                    sx={{ background: '#3C1D3F', width: '100%' }}
                />
            </div>
            <br />
            <div>
                <Typography gutterBottom variant="h5" color='#FFD76D' >
                    E-mail
                </Typography>
                <TextField
                    id=""
                    sx={{ background: '#3C1D3F', width: '100%' }}
                />
            </div>
            <br />
            <div>
                <Typography gutterBottom variant="h5" color='#FFD76D' >
                    Mobile Number
                </Typography>
                <TextField
                    id=""
                    sx={{ background: '#3C1D3F', width: '100%' }}
                />
            </div>
            <br />
            <div>
                <Typography gutterBottom variant="h5" color='#FFD76D' >
                    Message
                </Typography>
                <TextField
                    id=""
                    sx={{ background: '#3C1D3F', width: '100%' }}
                />
            </div>
            <br /><br />
            <Button size="large" variant="contained" style={{ textTransform: 'inherit' }} sx={{ bgcolor: '#FFD76D', color: 'black' }} >

                Contact Us
            </Button>
            <br /><br />
        </form>
    )
}


