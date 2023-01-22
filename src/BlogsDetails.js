import { useParams } from "react-router-dom";

const BlogsDetails = () => {
    const {id}=useParams()
    return ( 
        <div className="blog-details">
            <h1>Blog details-{id}</h1>
        </div>
     );
}
 
export default BlogsDetails;