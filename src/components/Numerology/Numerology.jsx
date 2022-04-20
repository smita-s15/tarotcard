import { Box, Button, ButtonGroup, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import { Title } from '../common/Title'

export const Numerology = () => {
    return (
        <Container fixed sx={{ padding: '100px auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', border: '2px solid #FFD76D', borderRadius: '16px', mt: '100px' }}>
            <br /><br />
            <Title>Numerology Chart</Title>
            <br /><br />
            <Box width='100%'>
                <NumerologyForm />
            </Box>
            <Typography color='#FFFFFF99' textAlign='center' width='50%' margin='10px'>
                We request you to wait till 3 Business days till we get your reading prepared. we will reach you through the email Id provided by you.
            </Typography>
            <Typography color='#FFFFFF99' textAlign='center' width='50%' margin='20px' border='1px solid #FFD76D' borderRadius='10px' padding='10px'>
                Sunday sessions need to be Pre-booked as early as possible
            </Typography>
        </Container>
    )
}

const NumerologyForm = () => {
    return (
        <form action="">
            <br />
            <div>
                <Typography gutterBottom variant="h6" color='#FFD76D' >
                    Official Name
                </Typography>
                <TextField
                    id=""
                    sx={{ background: '#3C1D3F', width: '100%', borderRadius:'6px' }}
                />
            </div>
            <br />
            <div>
                <Typography gutterBottom variant="h6" color='#FFD76D' >
                   Nick Name
                </Typography>
                <TextField
                    id=""
                    sx={{ background: '#3C1D3F', width: '100%',  borderRadius:'6px' }}
                />
            </div>
            <br />
            <div>
                <Typography gutterBottom variant="h6" color='#FFD76D' >
                    Mobile Number
                </Typography>
                <TextField
                    id=""
                    sx={{ background: '#3C1D3F', width: '100%',  borderRadius:'6px' }}
                />
            </div>
            <br />
            <div>
                <Typography gutterBottom variant="h6" color='#FFD76D' >
                    DOB (dd/mm/yyyy)
                </Typography>
                <TextField
                    id=""
                    sx={{ background: '#3C1D3F', width: '100%',  borderRadius:'6px' }}
                />
            </div>
            <br />
            <div>
                <Typography gutterBottom variant="h6" color='#FFD76D' >
                    Gender
                </Typography>
                <TextField
                    id=""
                    sx={{ background: '#3C1D3F', width: '100%',  borderRadius:'6px' }}
                />
            </div>
            <br />
            <div>
                <Typography gutterBottom variant="h6" color='#FFD76D' >
                    Email Id
                </Typography>
                <TextField
                    id=""
                    sx={{ background: '#3C1D3F', width: '100%', borderRadius:'6px' }}
                />
            </div>
            <br /><br />
            <Button size="large" variant="outlined" style={{ textTransform: 'inherit' }} sx={{ borderColor: '#FFD76D', color: '#FFD76D', margin: '20px', width: '150px' }} >
                Back
            </Button>
            <Button size="large" variant="contained" style={{ textTransform: 'inherit' }} sx={{ bgcolor: '#FFD76D', color: 'black', margin: '20px', width: '150px' }} >
                Done
            </Button>
            <br /><br />
        </form>
    )
}