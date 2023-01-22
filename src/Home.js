import BlogList from "./BlogList"
import useFetch from "./useFetch";

const HomePage = () => {
    const {data:blogs, isPending,error}=useFetch(" http://localhost:8000/blogs")
   
    //{} used arround js // conditional templating in react//firts evaluates left then right on if left is true
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading......</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default HomePage;