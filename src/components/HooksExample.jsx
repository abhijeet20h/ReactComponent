import React, { useState }  from "react";

const  HooksExample = ()=>{

    const CurrentTime = new Date().toLocaleTimeString()
    const [CTime ,  setTime]= useState(CurrentTime);
 const UpdatedTime = ()=>{
     const NewTime = new Date().toLocaleTimeString()
      setTime(NewTime);
    return(
        <>
        <div className="HooksExample-div">
               <h2>{CTime}</h2>
   <button className="HooksExample-button" onClick={UpdatedTime}>Get Time</button>
        </div>


        </>
    )
}}
export default HooksExample;