import { useState } from "react";

function Loginpage () {
  const [firstname,setFirstname] = useState('mohamed')
  
  return (
    <form>
      <input type="text" name= "firstname" value={firstname}/>
    </form>
  );
}
export default Loginpage;
   
