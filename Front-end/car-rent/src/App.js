
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Name from './Components/Name';
import SelectWheels from "./Components/SelectWheels";
import Type from "./Components/Type";
import SelectVehicle from "./Components/SelectVehicle";
import DateRange from "./Components/DateRange";


function App() {
  return (
   
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Name/>} ></Route>
          <Route path="/wheels" element={<SelectWheels/>}></Route>
          <Route path="/type" element={<Type/>}></Route>
          <Route path="/model" element={<SelectVehicle/>}></Route>
          <Route path="/range" element={<DateRange/>}></Route>
        </Routes>
      </BrowserRouter>
      
    
   
  );
}

export default App;
