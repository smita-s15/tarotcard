import React from "react"
import { Button, TextField, Typography } from "@mui/material"
import { Form, Formik } from "formik"
import { object, string } from "yup"


const initialValues = {
    "name" : "",
    "email": "",
    mobileNumber : "",
    "message": "",

}

export const ContactForm = () => {


    return (
        <Formik initialValues={initialValues}
            onSubmit={(values, formikHelpers) => {
                console.log(values);
                formikHelpers.resetForm();
            }}
            validationSchema={object({
                message: string().required('Please Enter Your Name').message('Invalid Name'),
                email: string().required('Please Enter Email').email('Invalid Email'),
            })}
        >
            {() => (
                <Form>
                    <br />
                    <div>
                        <Typography gutterBottom variant="h5" color='#FFD76D' >
                            Your Name
                        </Typography>
                        <TextField
                            id="name"
                            name='name'
                            type='text'
                            sx={{ background: '#3C1D3F', width: '100%' }}
                        />
                    </div>
                    <br />
                    <div>
                        <Typography gutterBottom variant="h5" color='#FFD76D' >
                            E-mail
                        </Typography>
                        <TextField
                            id="email"
                            name='email'
                            type='email'
                            sx={{ background: '#3C1D3F', width: '100%' }}
                        />
                    </div>
                    <br />
                    <div>
                        <Typography gutterBottom variant="h5" color='#FFD76D' >
                            Mobile Number
                        </Typography>
                        <TextField
                            id="mobileNumber"
                            name='mobileNumber'
                            type='number'
                            sx={{ background: '#3C1D3F', width: '100%' }}
                        />
                    </div>
                    <br />
                    <div>
                        <Typography gutterBottom variant="h5" color='#FFD76D' >
                            Message
                        </Typography>
                        <TextField
                            id="message"
                            name='message'
                            type='text'
                            sx={{ background: '#3C1D3F', width: '100%' }}
                        />
                    </div>
                    <br /><br />
                    <Button type='submit' size="large" variant="contained" style={{ textTransform: 'inherit' }} sx={{ bgcolor: '#FFD76D', color: 'black' }} disableRipple >

                        Contact Us
                    </Button>
                    <br /><br />
                </Form>
            )}
        </Formik>
    )
}