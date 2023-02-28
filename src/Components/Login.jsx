import React from 'react'
import { Grid, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Login = () => {

    const navigate = useNavigate();
    return (
        <React.Fragment>
            <form className='log-form'>
                <Grid container spacing={2}>

                    <Grid item xs={12}>
                        <TextField
                            variant='outlined'
                            label='Enter Your Email'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant='outlined'
                            label='Enter Your Password'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='contained'
                            style={{ width: "150px", marginLeft: "100px" }}
                            fullWidth>Login</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <p style={{ marginLeft: "50px" }}>Dont't Have a Account? Register Here.</p>

                        <Button variant='text'
                            style={{ marginLeft: "100px" }}
                            onClick={() => navigate("/register")}>Registeration</Button>
                    </Grid>
                </Grid>
            </form>
        </React.Fragment>
    )
}

export default Login
