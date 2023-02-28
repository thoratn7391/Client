import React from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Select from "react-select"
import { useFormik } from 'formik';
import { RegisterSchema } from '../validation/yupvalidation';
const Registration = () => {
    const option = [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Other", label: "Other" }
    ]

    const initialvalues = {
        name: "",
        email: "",
        password: "",
        confirmpass: "",
        phone: "",
        symptoms: "",
        gender: "",
        dob: ""
    }

    const { values, handleChange, errors, handleSubmit } = useFormik({
        initialValues: initialvalues,
        validationSchema: RegisterSchema,
        onSubmit: (values) => { console.log(values) }
    })

    const navigate = useNavigate();

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit} className='reg-form' >
                <Grid container spacing={2}>
                    <h1>Registration Form</h1>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            label="Enter Your FullName"
                            onChange={handleChange}
                            type="text"
                            name='name'
                            value={values.name}
                            fullWidth
                        />
                        <p style={{ color: "red" }}>{errors.name}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            label="Enter Your Email"
                            onChange={handleChange}
                            type="email"
                            name='email'
                            value={values.email}
                            fullWidth
                        />
                        <p style={{ color: "red" }}>{errors.email}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            label="Enter Your Password"
                            onChange={handleChange}
                            type="number"
                            name='password'
                            value={values.password}
                            fullWidth
                        />
                        <p style={{ color: "red" }}>{errors.password}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            label="Enter Your confirm Password"
                            onChange={handleChange}
                            type="number"
                            name='confirmpass'
                            value={values.confirmpass}
                            fullWidth
                        />
                        <p style={{ color: "red" }}>{errors.confirmpass}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            label="Enter Your Address"
                            onChange={handleChange}
                            type="text"
                            name='address'
                            value={values.address}
                            fullWidth
                        />
                        <p style={{ color: "red" }}>{errors.address}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            label="Enter Your Mobile No"
                            onChange={handleChange}
                            type="number"
                            name='phone'
                            value={values.phone}
                            fullWidth
                        />
                        <p style={{ color: "red" }}>{errors.phone}</p>
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            variant="outlined"
                            label="Enter Your Date of Birth"
                            onChange={handleChange}
                            type="number"
                            name='dob'
                            value={values.dob}
                            fullWidth
                        />
                        <p style={{ color: "red" }}>{errors.dob}</p>
                    </Grid>
                    <Grid item xs={7}>
                        <Select options={option} >Select</Select>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            label="Enter Your Symtopms"
                            onChange={handleChange}
                            type="text"
                            name='symptoms'
                            value={values.symptoms}
                            fullWidth
                        />
                        <p style={{ color: "red" }}>{errors.symptoms}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='contained'
                            type='submit'
                            style={{ marginLeft: "140px" }}

                        >Register</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <p style={{ marginLeft: "120px" }}>Already Have Account?</p>
                        <Button variant='outlined'
                            color='primary'
                            style={{ marginLeft: "150px" }}
                            onClick={() => navigate("/login")}>Login</Button>
                    </Grid>
                </Grid>
            </form>
        </React.Fragment>
    )
}

export default Registration
