import React, { useState } from 'react'
import dial_codePhone from '../Dialnumber/Phone';

const PhoneNumber=()=>{
 const[name,setName]=useState('')
 const[phone,setPhone]=useState('')
 const[dialcode,setDialcode]=useState('+93');
 const handleSubmit=(e)=>{
  e.preventDefault();

  console.log(`Name: ${name}, Phone: ${dialcode}${phone}`);
 }

 return (
   <>
     <h1 className="text-xl text-red-600">Dial Phone Nummber</h1>

     <form
       onSubmit={handleSubmit}
       style={{
         display: "flex",
         flexDirection: "column",
         gap: 20,
         width: "300px",
       }}
     >
       <input
         type="text"
         placeholder="Enter Name"
         onChange={(e) => setName(e.target.value)}
         style={{
           padding: "5px 5px 8px 5px",
           fontSize: "1rem",
           outline: "none",
           border: "none",
           borderBottom: "2px solid gray",
         }}
       />

       <div
         style={{
           display: "flex",
           gap: "5px",
         }}
       >
         <select
           name=""
           id=""
           onChange={(e) => setDialcode(e.target.value)}
           style={{
             width: "50px",
             padding: "5px",
             border: "none",
             backgroundColor: "white",
             fontSize:'1.3rem'
           }}
         >
           {dial_codePhone.map((val, ind) => {
             return (
               <option value={val.dial_code} key={ind} style={{
                fontSize:'1rem',
               
               }}>
                 {val.dial_code == dialcode ? val.flag : val.name}
               </option>
             );
           })}
         </select>
         <input
           type="tel"
           placeholder="Enter Mobile Number"
           onChange={(e) => setPhone(e.target.value)}
           maxLength={10}
           minLength={10}
           style={{
             width: "250px",
             padding: "5px 5px 8px 5px",
             outline: "none",
             border: "none",
             borderBottom: "2px solid gray",
           }}
         />
       </div>
       <button
         style={{
           width: "150px",
           fontSize: "1.2rem",
           padding: "10px",
           backgroundColor: "blue",
           color: "white",
           border: "none",
           borderRadius: "20px",
           shadow: "0px 0px 2px 1px black",
         }}
       >
         Submit
       </button>
     </form>
   </>
 );
}

export default PhoneNumber;