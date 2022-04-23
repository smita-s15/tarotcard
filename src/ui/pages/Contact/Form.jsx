import React from "react"
import { Button, TextField, Typography } from "@mui/material"
import * as Yup from "yup";
import { Form, Formik } from "formik"
import { object, string } from "yup"
import { useFormik } from "formik";


export const ContactForm = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            message: ""
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),

            phone: Yup.string()
                .required("Number is required")
                .max(10, "Please enter a valid number")
                .min(10, "Please enter a valid number")
                .matches(/[3-9]\d\d/, "Must be a valid number"),

            email: Yup.string().email("Invalid email address").required("Required"),

            message: Yup.string()

        }),

        onSubmit: (val, { resetForm }) => {
            console.log("val", val);
        }
    });
    return (
        <>
            <form onSubmit={formik.handleSubmit} >
                <div>
                    <Typography gutterBottom variant="h5" color='#FFD76D' >
                        Your Name
                    </Typography>
                    <TextField
                        id="name"
                        name='name'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                        sx={{ background: '#3C1D3F', width: '100%', input: { color: '#ffffff' } }}
                    />
                    <small >
                        {formik.touched.name && formik.errors.name ? (
                            <small>{formik.errors.name}</small>) : null}
                    </small>
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
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        sx={{ background: '#3C1D3F', width: '100%', input: { color: '#ffffff' } }}
                    />
                    <small >
                        {formik.touched.email && formik.errors.email ? (
                            <small>{formik.errors.email}</small>) : null}
                    </small>
                </div>
                <br />
                <div>
                    <Typography gutterBottom variant="h5" color='#FFD76D' >
                        Mobile Number
                    </Typography>
                    <TextField
                        id="mobileNumber"
                        name='phone'
                        type='number'
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        onBlur={formik.handleBlur}
                        sx={{ background: '#3C1D3F', width: '100%', input: { color: '#ffffff' }}}
                    />
                    <small >
                        {formik.touched.phone && formik.errors.phone ? (
                            <small>{formik.errors.phone}</small>) : null}
                    </small>
                </div>
                <br />
                <div>
                    <Typography gutterBottom variant="h5" color='#FFD76D' >
                        Message
                    </Typography>
                    <TextField
                        id="message"
                        type='text'
                        name="message"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        onBlur={formik.handleBlur}
                        sx={{ background: '#3C1D3F', width: '100%', input: { color: '#ffffff' }, focus:'none' }}
                    />
                    <small >
                        {formik.touched.message && formik.errors.message ? (
                            <small>{formik.errors.message}</small>) : null}
                    </small>
                </div>
                <br /><br />
                <Button type='submit' size="large" variant="contained" style={{ textTransform: 'inherit' }} sx={{ bgcolor: '#FFD76D', color: 'black' }}  >
                    Contact Us
                </Button>
                <br /><br />
            </form>
        </>
    )
}