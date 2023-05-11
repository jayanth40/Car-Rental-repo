// import 'antd/dist/antd.css';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {DatePicker} from 'antd';
import moment from 'moment';
import axios from 'axios';
import React,{ useContext, useState } from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom'
import { CreateContext } from '../CreateContext';
const {RangePicker} = DatePicker
function DateRange(){
const [date,setDate] = useState([])
const navigate = useNavigate();
const {data,type,firstName,lastName,model,setFirstName,setLastName} = useContext(CreateContext);
const handleButtonClick = () => {
    // Send a POST request to create a new user
    let bookingDate = date
    let vehicalId = model
    axios.post('http://localhost:8080/user', { firstName,lastName,vehicalId,bookingDate })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
      alert(`Vehicle booking successful...!`)
    
    axios.put(`http://localhost:8080/cars/${vehicalId}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
      navigate("/")
      setFirstName("");
      setLastName("")
  };
    
    return(<>
<div className="App">
    <Paper elevation={12}>
       <p style={{fontFamily:"sans-serif",fontSize:"27px",paddingTop:"20px"}}> Select Booking Date</p>
       <RangePicker
       onChange={(e)=>{
        setDate(e.map(item=>{
            return moment(item).format('DD-MM-YYYY')
        }))
       }}
       />
    
      {date?<Button variant="contained" onClick={handleButtonClick}
       style={{width:"250px",height:"50px",marginTop:"25px",marginBottom:"20px"}}
      
       >Book</Button>:""}
      
      
      
    </Paper>
    </div>
   

    </>)
}
export default DateRange