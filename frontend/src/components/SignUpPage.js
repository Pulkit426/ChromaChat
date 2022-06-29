import { Container, Typography  } from "@mui/material"
// import SignUpForm from "./SignUpForm";

 
const SignUpPage = () => {
   

    return (
        <div>

       <Typography align="center" gutterBottom="true" variant="body1" sx={{p: "1rem", m: "0.5rem", color: "gray", fontSize: "1.5rem", fontWeight: 600}}>
        Create a New Account
        </Typography>

            
        <Container maxWidth='sm' 
        sx={{backgroundColor:'#e5e7eb', width: 370, height: 450, borderRadius: "1.2rem", mb: 8,
        display: "flex", alignItems: "center", justifyContent: "center"}} >
          
        <Typography align="center" gutterBottom="true" variant="body1">
        <Typography variant="body1" sx={{mt:3, color: "#475569", fontWeight: 500}}> Created by Pulkit </Typography>
        </Typography>
        </Container>
        </div>
    )
}

export default SignUpPage