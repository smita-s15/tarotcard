import React from "react"
import { Box, Button, TextField, Typography } from "@mui/material"
import * as Yup from "yup";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import axios from "axios";


export const NumerologyForm = () => {
    const baseUrl = 'http://localhost:8001'

    const formik = useFormik({
        initialValues: {
            officialname: "",
            nickname: "",
            mobilenumber: "",
            dob: "",
            gender: "",
            email: "",
        },

        validationSchema: Yup.object({
            officialname: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),

            nickname: Yup.string()
                .max(10, "Must be 10 characters or less")
                .required("Required"),

            mobilenumber: Yup.string()
                .required("Number is required"),
            
            dob: Yup.string()
                .required("Date Of Birth is required"),

            gender: Yup.string()
                .required("Required"),

            email: Yup.string()
                .required("Email is required")

        }),

        onSubmit: async (val) => {
            try {
                await axios.post(`${baseUrl}/usersnumerology`, val)

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
                        Official Name
                    </Typography>
                    <TextField
                        id="officialname"
                        name='officialname'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.officialname}
                        onBlur={formik.handleBlur}
                        sx={{ background: '#3C1D3F', width: '100%', input: { color: '#ffffff' } }}
                    />
                    <small >
                        {formik.touched.officialname && formik.errors.officialname ? (
                            <small>{formik.errors.officialname}</small>) : null}
                    </small>
                </div>
                <br />
                <div>
                    <Typography gutterBottom variant="h5" color='#FFD76D' >
                        Nick Name
                    </Typography>
                    <TextField
                        id="nickname"
                        name='nickname'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.nickname}
                        onBlur={formik.handleBlur}
                        sx={{ background: '#3C1D3F', width: '100%', input: { color: '#ffffff' } }}
                    />
                    <small >
                        {formik.touched.nickname && formik.errors.nickname ? (
                            <small>{formik.errors.nickname}</small>) : null}
                    </small>
                </div>
                <br /> 
                <div>
                    <Typography gutterBottom variant="h5" color='#FFD76D' >
                        Mobile Number
                    </Typography>
                    <TextField
                        id="mobilenumber"
                        name='mobilenumber'
                        type='number'
                        onChange={formik.handleChange}
                        value={formik.values.mobilenumber}
                        onBlur={formik.handleBlur}
                        sx={{ background: '#3C1D3F', width: '100%', input: { color: '#ffffff' } }}
                    />
                    <small >
                        {formik.touched.mobilenumber && formik.errors.mobilenumber ? (
                            <small>{formik.errors.mobilenumber}</small>) : null}
                    </small>
                </div>
                <br />
                <div>
                    <Typography gutterBottom variant="h5" color='#FFD76D' >
                        DOB (dd/mm/yyyy)
                    </Typography>
                    <TextField
                        id="dob"
                        name='dob'
                        type='number'
                        onChange={formik.handleChange}
                        value={formik.values.dob}
                        onBlur={formik.handleBlur}
                        sx={{ background: '#3C1D3F', width: '100%', input: { color: '#ffffff' } }}
                    />
                    <small >
                        {formik.touched.dob && formik.errors.dob ? (
                            <small>{formik.errors.dob}</small>) : null}
                    </small>
                </div>
                <br />
                <div>
                    <Typography gutterBottom variant="h5" color='#FFD76D' >
                        Gender
                    </Typography>
                    <TextField
                        id="gender"
                        name='gender'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.gender}
                        onBlur={formik.handleBlur}
                        sx={{ background: '#3C1D3F', width: '100%', input: { color: '#ffffff' } }}
                    />
                    <small >
                        {formik.touched.gender && formik.errors.gender ? (
                            <small>{formik.errors.gender}</small>) : null}
                    </small>
                </div>
                <br />
                <div>
                    <Typography gutterBottom variant="h5" color='#FFD76D' >
                        Email Id
                    </Typography>
                    <TextField
                        id="email"
                        name='email'
                        type='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        sx={{ background: '#3C1D3F', width: '100%', input: { color: '#ffffff' } }}
                    />
                    <small >
                        {formik.touched.email && formik.errors.email ? (
                            <small>{formik.errors.cvvnumber}</small>) : null}
                    </small>
                </div>
                <br />

                <Box sx={{ display: 'flex', gap: '20px' }}>
                    <NavLink
                        style={{ textDecoration: 'none', color: '#000', cursor: 'pointer' }}
                        to="/BookSessions"
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