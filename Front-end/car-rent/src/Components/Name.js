import React, { useContext } from "react";
import { CreateContext } from "../CreateContext";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import "../App.css"
import { Link } from "react-router-dom";
function Name(){
    const {firstName,setFirstName,setLastName,lastName} = useContext(CreateContext);
    return(<>
    <div className="App">
    <Paper elevation={12}>
       <p style={{fontFamily:"sans-serif",fontSize:"25px",padding:"20px"}}> First, what's your name?</p>
      
       <div>
       <TextField
          required
          id="outlined-required"
          label="First Name"
          placeholder="Enter Here"
          style={{width:"270px",marginTop:"-25px"}}
          onChange={(e)=>{
            setFirstName(e.target.value)
          }}
        />
       </div>
       <div>
       <TextField
          required
          id="outlined-required"
          label="Last Name"
        //   placeholder="Enter Here"
          style={{width:"270px",marginTop:"25px"}}
          onChange={(e)=>{
            setLastName(e.target.value)
          }}
        />
       </div>
       <Link to={'/wheels'} style={{textDecoration:'none'}}>
       <Button variant="contained" 
       style={{width:"270px",height:"50px",marginTop:"25px",marginBottom:"20px",}}>Next
       </Button>
       </Link>
       
    </Paper>
    </div>
   
    </>)
}

export default Name