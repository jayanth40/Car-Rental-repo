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
function Type(){
    const {data,setData,wheels,setWheels} = useContext(CreateContext);
    useEffect(() => {
          if(wheels =="cars"){ axios.get(`http://localhost:8080/bikes`)
          .then(response => setData(response.data)) 
          .catch(error => console.log(error));
          console.log(data)
      
        }
        else if(wheels =="bikes"){
            axios.get(`http://localhost:8080/cars`)
          .then(response => setData(response.data))
          .catch(error => console.log(error));
        console.log(data)
      
        }
        else{
            axios.get(`http://localhost:8080/bikes`)
          .then(response => setData(response.data))
          .catch(error => console.log(error));
        console.log(data)
        }
      }, []);
    return(<>
    <div className="App">
    <Paper elevation={12}>
       <p style={{fontFamily:"sans-serif",fontSize:"27px",paddingTop:"20px"}}> Type of vehicle</p>
       <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Select type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {/* {data.map((type)=>{
            console.log(type.type) 
             <FormControlLabel value="Bike" control={<Radio />} label={`${type.type}`} onClick={()=>{
            
              }}/>
         })}*/}
        
       
        
        
      </RadioGroup>
    </FormControl>
       <Button variant="contained" 
       style={{width:"250px",height:"50px",marginTop:"25px",marginBottom:"20px"}}
      
       >Next</Button>
    </Paper>
    </div>
   
    </>)
}

export default Type