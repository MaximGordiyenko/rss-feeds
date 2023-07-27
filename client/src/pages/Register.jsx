import { Link, useNavigate } from "react-router-dom";
import { Button } from "../styles";
import { api } from "../apis/constants.js";
import { Input, InputAdornment, IconButton, Typography, Box, FormControl, TextField, Grid } from "@mui/material";
import { AccountCircle, VisibilityOff, Visibility } from "@mui/icons-material";
import { useState } from "react";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await api.post("/register", { ...values });
      if (data && data.errors) {
        const { email, password } = data.errors;
        const errorType = email ? email : password;
        console.log("Error:", errorType);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <h2>Register Account</h2>
        <Box component="form" onSubmit={(e) => handleSubmit(e)}>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            <TextField
              id="standard-basic"
              variant="standard"
              label="Email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle/>
                  </InputAdornment>
                ),
              }}
            />
            <Input
              id="outlined-adornment-password"
              variant="standard"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Typography variant="overline" component="p">
            Already have an account ?<Link to="/login"> Login</Link>
          </Typography>
          <Button type="submit">Register</Button>
        </Box>
      </Grid>
    </Grid>
  );
};
