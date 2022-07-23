import React, {useState} from 'react'
import { Typography, Container } from '@mui/material';
import { useDispatch } from "react-redux";
import LoginForm from './LoginForm'
import {login} from '../reducers/user'
import { useNavigate } from 'react-router-dom';
import LoginNavbar from './LoginNavbar';
import {Button} from '@mui/material'

const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
          dispatch(login(username,password))
          setUsername("");
          setPassword("");
          setTimeout(() => navigate('/rooms'), 1000)
        } catch (error) {
          console.log(error);
        }

      };

      const handleGuestLogin = (username,password) => {
        dispatch(login(username,password))
        setTimeout(() => navigate('/rooms'), 1000)
      }

    return (
        <div >

          <LoginNavbar />


       <Typography align="center" variant="body1" sx={{p: 1, m:2, mt: 10, color: "gray", fontSize: "1.5rem", fontWeight: 600}}>
        Log in to application
        </Typography>


        <Container maxWidth='sm' 
        sx={{backgroundColor:'#e0e7ff', width: 350, height: 375, borderRadius: "1.2rem", mb: 10,
        display: "flex", flexDirection: "column" ,alignItems: "center", justifyContent: "center"}} >
          <img src="/favicon.png" alt="logo"  style={{maxHeight: 80, margin: "1rem", marginBottom: "1.25rem"}}/>
          <Typography align="center" gutterBottom="true" variant="body1">
          
        <LoginForm
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />

<Button onClick = {() => handleGuestLogin("guest", "Guest#123")} id="login-button" variant="outlined" color="secondary" sx= {{width: 300,height: 40, p: 2, mt:2, '&:hover':{backgroundColor: "#A8E640"}, fontWeight: 700}}>
GUEST LOGIN 
        </Button>


<Typography variant="body1" sx={{mt:2.5, mb:0.5, color: "#475569", fontWeight: 500}}> Created by Pulkit 👨‍💻</Typography>
        </Typography>
        </Container>
      </div>
    )
}

export default LoginPage