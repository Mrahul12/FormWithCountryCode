import React from 'react'
import { useRecoilValue } from "recoil";
import charCountState from '../Selector/Selector'
//*  We can use the useRecoilValue() hook to read the value of charCountState:


const CharacterCount=()=> {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

export default CharacterCount

