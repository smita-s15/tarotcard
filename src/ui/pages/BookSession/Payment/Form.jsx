import React from "react"
import { Box, Button, TextField, Typography } from "@mui/material"
import * as Yup from "yup";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import axios from "axios";


export const PaymentForm = () => {
    const baseUrl = 'http://localhost:8002'

    const formik = useFormik({
        initialValues: {
            cardname: "",
            cardnumber: "",
            cvvnumber: "",
        },

        validationSchema: Yup.object({
            cardname: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),

            cardnumber: Yup.string()
                .required("Number is required"),

            cvvnumber: Yup.string()
                .required("CVVNumber is required")

        }),

        onSubmit: async (val) => {
            try {
                await axios.post(`${baseUrl}/payment`, val)

                alert("Form submitted successfully!")
                return
            } catch (error) {
                alert("Form submission error!")
                return
            }
        }
    });
    return (
        <>
            <form onSubmit={formik.handleSubmit} >
                <div>
                    <Typography gutterBottom variant="h5" color='#FFD76D' >
                        Enter Card Name
                    </Typography>
                    <TextField
                        id="cardname"
                        name='cardname'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.cardname}
                        onBlur={formik.handleBlur}
                        sx={{ background: '#3C1D3F', width: '100%', input: { color: '#ffffff' } }}
                    />
                    <small >
                        {formik.touched.cardname && formik.errors.cardname ? (
                            <small>{formik.errors.cardname}</small>) : null}
                    </small>
                </div>
                <br />
                <div>
                    <Typography gutterBottom variant="h5" color='#FFD76D' >
                        Enter Card Number
                    </Typography>
                    <TextField
                        id="cardnumber"
                        name='cardnumber'
                        type='number'
                        onChange={formik.handleChange}
                        value={formik.values.cardnumber}
                        onBlur={formik.handleBlur}
                        sx={{ background: '#3C1D3F', width: '100%', input: { color: '#ffffff' } }}
                    />
                    <small >
                        {formik.touched.cardnumber && formik.errors.cardnumber ? (
                            <small>{formik.errors.cardnumber}</small>) : null}
                    </small>
                </div>
                <br />
                <div>
                    <Typography gutterBottom variant="h5" color='#FFD76D' >
                        Enter CVV Code
                    </Typography>
                    <TextField
                        id="cvvnumber"
                        name='cvvnumber'
                        type='number'
                        onChange={formik.handleChange}
                        value={formik.values.cvvnumber}
                        onBlur={formik.handleBlur}
                        sx={{ background: '#3C1D3F', width: '100%', input: { color: '#ffffff' } }}
                    />
                    <small >
                        {formik.touched.cvvnumber && formik.errors.cvvnumber ? (
                            <small>{formik.errors.cvvnumber}</small>) : null}
                    </small>
                </div>
                <br />

                <Box sx={{ display: 'flex', gap: '20px' }}>

                    <NavLink
                        style={{ textDecoration: 'none', color: '#000', cursor: 'pointer' }}
                        to='/BookingDetails'
                    >
                        <Button type='submit' size="large" variant="outlined" >
                            Back
                        </Button>
                    </NavLink>
                    <Button type='submit' size="large" variant="contained" >
                        Next
                    </Button>
                </Box>
                <br /><br />
            </form>
        </>
    )
}