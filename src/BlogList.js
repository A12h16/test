const BlogList = ({blogs,title,handelDelete}) => {
   // const {blogs,title}=props
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) =>
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={()=>handelDelete(blog.id)}>Delete Blog</button>
                </div>)
            }
        </div>
     )
}
 
export default BlogList;