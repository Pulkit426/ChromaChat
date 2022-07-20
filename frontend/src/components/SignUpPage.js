import { Container, Typography  } from "@mui/material"
import LoginNavbar from "./LoginNavbar";
import SignUpForm from "./SignUpForm";

 
const SignUpPage = () => {
   

    return (
        <div style={{display: "flex",flex: 1, flexDirection:"column", alignItems: "center", justifyContent: "center"}}>
        <LoginNavbar />

       <Typography align="center" variant="body1" sx={{p: 1, m: 2, mt:10, color: "gray", fontSize: "1.5rem", fontWeight: 600}}>
        Create a New Account
        </Typography>

            
        <Container maxWidth='sm' 
        sx={{backgroundColor:'#e5e7eb', width: 370, height: 450, borderRadius: "1.2rem", mb: 8,
        display: "flex", flexDirection: "column",  alignItems: "center", justifyContent: "center"}} >
          <img src="/favicon.png" alt="logo"  style={{maxHeight: 80, margin: "1rem", marginBottom: "1.25rem"}}/>
        <Typography align="center" gutterBottom="true" variant="body1">
            <SignUpForm />
        <Typography variant="body1" sx={{mt:3, color: "#475569", fontWeight: 500}}> Created by Pulkit 👨‍💻 </Typography>
        </Typography>
        </Container>
        </div>
    )
}

export default SignUpPage