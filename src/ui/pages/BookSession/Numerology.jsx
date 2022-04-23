import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Title } from '../../../components/common/Title'

export const Numerology = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginX: 'auto', mt: '100px' }}>
            <Container fixed sx={{ padding: { xs: '10px auto', md: '100px auto' }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', border: '2px solid #FFD76D', borderRadius: '16px', width: '80%' }}>
                <br /><br />
                <Title>Numerology Chart</Title>
                <br /><br />
                <Box width='100%'>
                    <NumerologyForm />
                </Box>
                <Typography color='#FFFFFF99' textAlign='center' fontSize='14px' width='50%'>
                    We request you to wait till 3 Business days till we get your reading prepared. we will reach you through the email Id provided by you.
                </Typography>
                <Typography color='#FFFFFF99' textAlign='center' width='50%' fontSize='14px' margin='20px auto' border='1px solid #FFD76D' borderRadius='10px' padding='10px'>
                    Sunday sessions need to be Pre-booked as early as possible
                </Typography>
            </Container>
        </Box>
    )
}

const NumerologyForm = () => {
    return (
        <form action="">
            <br />
            <div>
                <Typography gutterBottom variant="h5" color='#FFD76D' >
                    Official Name
                </Typography>
                <TextField
                    id=""
                    sx={{ background: '#3C1D3F', width: '100%', borderRadius: '6px' }}
                />
            </div>
            <br />
            <div>
                <Typography gutterBottom variant="h5" color='#FFD76D' >
                    Nick Name
                </Typography>
                <TextField
                    id=""
                    sx={{ background: '#3C1D3F', width: '100%', borderRadius: '6px' }}
                />
            </div>
            <br />
            <div>
                <Typography gutterBottom variant="h5" color='#FFD76D' >
                    Mobile Number
                </Typography>
                <TextField
                    id=""
                    sx={{ background: '#3C1D3F', width: '100%', borderRadius: '6px' }}
                />
            </div>
            <br />
            <div>
                <Typography gutterBottom variant="h5" color='#FFD76D' >
                    DOB (dd/mm/yyyy)
                </Typography>
                <TextField
                    id=""
                    sx={{ background: '#3C1D3F', width: '100%', borderRadius: '6px' }}
                />
            </div>
            <br />
            <div>
                <Typography gutterBottom variant="h5" color='#FFD76D' >
                    Gender
                </Typography>
                <TextField
                    id=""
                    sx={{ background: '#3C1D3F', width: '100%', borderRadius: '6px' }}
                />
            </div>
            <br />
            <div>
                <Typography gutterBottom variant="h5" color='#FFD76D' >
                    Email Id
                </Typography>
                <TextField
                    id=""
                    sx={{ background: '#3C1D3F', width: '100%', borderRadius: '6px' }}
                />
            </div>
            <br /><br />
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '30px' }}>
                <NavLink
                    style={{ textDecoration: 'none', color: '#000', cursor: 'pointer' }}
                    to="/BookSessions"
                >
                    <Button size="large" variant="outlined"   >
                    Back
                    </Button>
                </NavLink>
                <NavLink
                    style={{ textDecoration: 'none', color: '#000', cursor: 'pointer' }}
                    to="#"
                >
                    <Button size="large" variant="contained"     >
                    Done
                    </Button>
                </NavLink>
            </Box>
            <br /><br />
        </form>
    )
}