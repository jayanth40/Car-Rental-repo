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
function SelectVehicle(){
    const {data,type,setType,model,setModel} = useContext(CreateContext);
    
    return(<>
    <div className="App">
    <Paper elevation={12}>
       <p style={{fontFamily:"sans-serif",fontSize:"27px",paddingTop:"20px"}}> Specific Model</p>
       <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Select model</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
       <div>
      {data.map((object) => {
        if( object.type == type){
          return   <FormControlLabel
            key={object.id}
            control={
              <Radio
               
                value={object.model}
                onClick={()=>{
                  setModel(object.vehicalId)
                }}
              />
            }
            label={object.model}
          />
        }
     
        
    })}
    </div>
     
      </RadioGroup>
    </FormControl><br/>

    

    {model && data!=[]?<Link to={'/range'} style={{textDecoration:'none'}}>
       <Button variant="contained" 
       style={{width:"270px",height:"50px",marginTop:"25px",marginBottom:"20px",}}>Next
       </Button>
       </Link>:""}
    </Paper>
    </div>
   
    </>)
}

export default SelectVehicle