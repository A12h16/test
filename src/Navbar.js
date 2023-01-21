const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Anusha blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/craete" style={{
                    color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius:"8px"
                }}>New blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;