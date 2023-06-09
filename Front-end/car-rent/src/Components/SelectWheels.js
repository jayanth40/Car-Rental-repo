import React, { useContext,useEffect, useState} from "react";
import axios from 'axios';
import { CreateContext } from "../CreateContext";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "../App.css"
import { Link } from "react-router-dom";
import Type from "./Type";
function SelectWheels(){
    
    const {data,setData,wheels,setWheels} = useContext(CreateContext);
    useEffect(() => {
      if(wheels =="bikes"){ axios.get(`http://localhost:8080/bikes`)
      .then(response => setData(response.data)) 
      .catch(error => console.log(error));
      console.log(data)
  
    }
    else if(wheels =="cars"){
        axios.get(`http://localhost:8080/cars`)
      .then(response => setData(response.data))
      .catch(error => console.log(error));
    console.log(data)
  
    }
    
  }, [wheels]);
    return(<>
    <div className="App">
    <Paper elevation={12}>
       <p style={{fontFamily:"sans-serif",fontSize:"27px",paddingTop:"20px"}}>Number of Wheels</p>
       <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Select Wheels</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Bike" control={<Radio />} label="2 Wheeler" onClick={()=>{
            setWheels("bikes")
           
        }}/>
        <FormControlLabel value="Car" control={<Radio />} label="4 Wheeler" onClick={()=>{
            setWheels("cars")
           
        }}/>
        
      </RadioGroup>
    </FormControl>
    {wheels?<Link to={'/type'} style={{textDecoration:'none'}}>
       <Button variant="contained" 
       style={{width:"270px",height:"50px",marginTop:"25px",marginBottom:"20px",}}>Next
       </Button>
       </Link>:""}
      
    </Paper>
    </div>
   
    </>)
}

export default SelectWheels