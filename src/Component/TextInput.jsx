import React from 'react'
import { useRecoilState } from "recoil";
import textState from '../Atom/Atom';
 const TextInput = () => {
  //* Components that need to read from and write to an atom should use useRecoilState()

   const [text, setText] = useRecoilState(textState);

   const handleChange = (event) => {
     setText(event.target.value);
   };

   return (
     <>
       <input type="text" value={text} onChange={handleChange} />
       <br />
       Text : {text}
     </>
   );
 }
export default TextInput;