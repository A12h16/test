const HomePage = () => {

    const handelClick =()=>{
        console.log("I am clicked")
    }

    const handelClickWithArg =(name)=>{
        console.log("hello " + name)
    }
     
    const handelClickForEvent =(name,e)=>{
        console.log("hello " + name ,e.target)
    }

    return ( 
        <div className="home">
            <h1>Home Page</h1>
            <button onClick={handelClick}>Click me</button>
            <button onClick={()=>handelClickWithArg("anusha")}>Click me again</button>
            <button onClick={(e)=>handelClickForEvent("anusha",e)}>Click me again for event</button>
        </div>
     );
}
 
export default HomePage ;