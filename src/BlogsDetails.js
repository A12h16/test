import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { data && <h2>{ data.title }</h2>}
    </div>
  );
}
 
export default BlogDetails;