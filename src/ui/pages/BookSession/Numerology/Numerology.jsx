import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { Title } from '../../../../components/common/Title'
import { NumerologyForm } from './Form'

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
