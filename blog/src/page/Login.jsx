import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";
import { userState$ } from "../redux/selectors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const defaultTheme = createTheme();

export default function Login() {
  const navigation = useNavigate();
  const [error, setError] = useState("");
  const [data, setData] = useState({
    username: "anc",
    password: "11111111",
  });
  const dispatch = useDispatch();
  const isLogged = useSelector(userState$);
  const handleLoginClick = React.useCallback(() => {
    if (data.username !== "" && data.password !== "") {
      dispatch(actions.login.getLoginRequest(data));
    } else {
      setError("Wrong username and password.");
    }
  }, [dispatch, data]);
  console.log("ra ne", isLogged);
  useEffect(() => {
    if (isLogged) {
      navigation("/");
    } else {
      return;
    }
  }, [isLogged]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={data.username}
              autoFocus
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={data.password}
              autoComplete="current-password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLoginClick}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
