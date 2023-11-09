import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import {
    Avatar,
    Button,
    Paper,
    Grid,
    Typography,
    Container,
    TextField,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import Input from "./Input";
import Icon from "./icon";
import { GoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { actionLogin, actionSignup } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import * as type from "../../redux/constants/authConstant";

const Auth = () => {
    const classes = useStyles();

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [isSignUp, setIsSignUp] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignUp) {
            // Create
            dispatch(actionSignup(formData, navigate));
        } else {
            // Login
            dispatch(actionLogin(formData, navigate));
        }
    };

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const switchMode = () => {
        setIsSignUp((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };

    const googleSuccess = async (res) => {
        const clientId = res?.clientId;
        const credential = res?.credential;

        try {
            const data = {
                ...jwt_decode(credential),
                access_token: credential,
            };
            dispatch({
                type: type.AUTH,
                data,
            });
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    const googleError = (err) => {
        console.log(err);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography variant="h5">
                    {isSignUp ? "Sign Up" : "Sign In"}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignUp && (
                            <>
                                <Input
                                    name="firstName"
                                    label="First Name"
                                    handleChange={handleChange}
                                    autoFocus
                                    half
                                />
                                <Input
                                    name="lastName"
                                    label="Last Name"
                                    handleChange={handleChange}
                                    half
                                />
                            </>
                        )}
                        <Input
                            name="email"
                            label="Email Address"
                            handleChange={handleChange}
                            type="email"
                        />
                        <Input
                            name="password"
                            label="Password"
                            handleChange={handleChange}
                            type={showPassword ? "text" : "password"}
                            handleShowPassword={handleShowPassword}
                        />
                        {isSignUp && (
                            <Input
                                name="confirmPassword"
                                label="Repeat Password"
                                handleChange={handleChange}
                                type="password"
                            />
                        )}
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </Button>
                    <GoogleLogin
                        onSuccess={googleSuccess}
                        onError={googleError}
                    />
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp
                                    ? "Already have an account? Sign In"
                                    : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
