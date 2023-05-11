import React, { useState } from "react";
//Provider
//Consumer

const CreateContext = React.createContext();

const ContextProvider = (props)=> {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [wheels, setWheels] = useState("");
    const [type, setType] = useState("");
    const [model, setModel] = useState("");
    const [data, setData] = useState([]);
    return (
        <CreateContext.Provider value={{firstName,setFirstName,lastName,
        setLastName,wheels, setWheels,data, setData,type, setType,model, setModel}}>
            {props.children}
        </CreateContext.Provider>
    )
}
export {CreateContext, ContextProvider};