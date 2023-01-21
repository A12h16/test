import { useState } from "react";

const HomePage = () => {
    const [name,setName]=useState("anusha");
    const [age,setAge]=useState(18);

    const handelClick =()=>{
        setName("Bojamma");
        setAge(24)
    }

    return ( 
        <div className="home">
            <h1>Home Page</h1>
            <p>{name} is {age} old</p>
            <button onClick={handelClick}>Click me</button>
        </div>
     );
}
 
export default HomePage ;