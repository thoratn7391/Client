import React from 'react'
import { Grid, Card, CardContent, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Admin from './Admin'
import HomeContent from './HomeContent'

const Nav = () => {

    const navigate = useNavigate();

    return (
        <React.Fragment>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Card style={{ height: "200px", backgroundColor: "#F8EFBA" }}>
                        <CardContent>
                            <Admin />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card style={{ height: "550px", backgroundColor: "#f8c291" }}>
                        <CardContent>
                            <Button variant='text' onClick={() => navigate("/login")} fullWidth>Login</Button>
                            <br /> <br />
                            <Button variant='text' onClick={() => navigate("/register")} fullWidth>Registration</Button>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10}>
                    <Card style={{ height: "550px", backgroundColor: "#9AECDB" }}>
                        <CardContent>
                            <HomeContent />
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </React.Fragment>
    )
}

export default Nav
