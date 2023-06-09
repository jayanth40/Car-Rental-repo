import React, { useContext,useEffect, useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { CreateContext } from "../CreateContext";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "../App.css"
function Type(){
    const {data,type,setType} = useContext(CreateContext);
    
   let result = []
    data.map((object)=>(result.push(object.type)))
    
    result =[...new Set(result)]
    console.log(result)
    return(<>
    <div className="App">
    <Paper elevation={12}>
       <p style={{fontFamily:"sans-serif",fontSize:"27px",paddingTop:"20px"}}> Type of vehicle</p>
       <FormControl>
      {result.length?<FormLabel id="demo-row-radio-buttons-group-label">Select type</FormLabel>:<p style={{color:"red",marginBottom:"25px"}}>"Vehicals not available, please select other vehicle"</p>}
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
       <div>
      {result.map((object,index) => (
        
          <FormControlLabel
          key={index}
          control={
            <Radio
             
              value={object}
              onClick={()=>{
                setType(object)
              }}
            />
          }
          label={object}
        />
        
      ))}
    </div>
        {console.log(type)}  
      </RadioGroup>
    </FormControl><br/>
    
    {type?<Link to={'/model'} style={{textDecoration:'none'}}>
       <Button variant="contained" 
       style={{width:"270px",height:"50px",marginTop:"25px",marginBottom:"20px",}}>Next
       </Button>
       </Link>:""}
     
    </Paper>
    </div>
   
    </>)
}

export default Type