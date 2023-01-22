import { useState, useEffect } from "react";
import BlogList from "./BlogList"

const HomePage = () => {
    const [blogs, setBlogs] = useState(null)

    const [name, setName] = useState('mario')

     useEffect(() => {
        console.log("useEffect here")
        fetch(" http://localhost:8000/blogs")
            .then(res => {      //promise
                return res.json();
            })
            .then(data=>{ //another promise to take data from other response
                console.log(data)
                setBlogs(data)
            })
    }, [])

//{} used arround js // conditional templating in react//firts evaluates left then right on if left is true
    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs" />} 
        </div>
    );
}

export default HomePage;