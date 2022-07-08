import React, {useState} from 'react'
import { Typography, Container } from '@mui/material';
import { useDispatch } from "react-redux";
import LoginForm from './LoginForm'
import {login} from '../reducers/user'
import { useNavigate } from 'react-router-dom';
import LoginNavbar from './LoginNavbar';

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
          setTimeout(() => navigate('/rooms'), 500)
        } catch (error) {
          console.log(error);
        }

      };

    return (
        <div style={{display: "flex",flex: 1, flexDirection:"column", alignItems: "center", justifyContent: "center"}}>

          <LoginNavbar />


       <Typography align="center" gutterBottom="true" variant="body1" sx={{p: "1rem", m: "1rem", color: "gray", fontSize: "1.5rem", fontWeight: 600}}>
        Log in to application
        </Typography>


        <Container maxWidth='sm' 
        sx={{backgroundColor:'#e5e7eb', width: 350, height: 375, borderRadius: "1.2rem", mb: 10,
        display: "flex", alignItems: "center", justifyContent: "center"}} >
          
          <Typography align="center" gutterBottom="true" variant="body1">
          
        <LoginForm
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />

<Typography variant="body1" sx={{mt:2.5, mb:0.5, color: "#475569", fontWeight: 500}}> Created by Pulkit </Typography>
        </Typography>
        </Container>
      </div>
    )
}

export default LoginPage