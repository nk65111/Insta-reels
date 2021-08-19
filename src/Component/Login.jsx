import React, { useState ,useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import Coursal from '../Coursal.png'
import {Button,TextField,Card,CardMedia,Typography,Container,Grid,Paper,CardContent,CardActions,makeStyles} from '@material-ui/core';
const Login = (props) => {
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const {login}=useContext(AuthContext);

    let useStyle=makeStyles({
        marginUpDown:{
          marginTop:"0.5rem",
          marginBottom:"0.5rem",
          width:"100%"
        },
        marginTop:{
          margin:"10% ",
        },
        Coursal:{
          height:"100%",
          // backgroundColor:"blue"
        }
        
    });
    let classes=useStyle();
    async function handelLogin(e){
        try{
            await login(email,password);
            props.history.push("/");
        }
        catch(err){
           
            setemail("");
            setpassword("");
        }
        
    }
    return ( 
        <>
        
        <Container style={{backgroundColor:"pink"}}>
         <Grid container spacing={5} className={classes.marginTop}>
            <Grid item sm={5} xs={5}>
              <Paper className={classes.Coursal}>
                <CardMedia image={Coursal}  style={{ height: "100%", width:"100%", backgroundSize: "contain" }}></CardMedia>
              </Paper>
            </Grid>
            <Grid item sm={4} xs={5}>
              <Card variant="outlined">
                <CardMedia image={logo} style={{ height: "5rem", backgroundSize: "contain" }}>
                  
                </CardMedia>
                <CardContent>
                  <TextField className={classes.marginUpDown } label="email" value={email} onChange={ (e)=>{setemail(e.target.value)}} variant="outlined" size="small"></TextField>
                  <TextField className={classes.marginUpDown} label="password" value={password} onChange={ (e)=>{setpassword(e.target.value)}} variant="outlined" size="small"></TextField>
                </CardContent>
                <CardActions>
                  <Button className={classes.marginUpDown } onClick={handelLogin} variant="contained" color="primary">Login</Button>
                </CardActions>
              </Card>
              <Card variant="outlined">
                 <Typography>
                   Don't have account ?
                   <Link to='/signup'>
                   Sign Up</Link>
                 </Typography>
              </Card>
            </Grid>
         </Grid>
        </Container>
        </>
     );
}
 
export default Login;