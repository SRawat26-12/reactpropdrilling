import { useState } from "react";
import Comp1 from "./Comp1";
const App=()=>{
  const[user,setUser]=useState("shivam");
  return(
    <>
    <h1>welcome:{user}</h1>
    <Comp1 user={user}/>
    </>
  )
}
export default App;
