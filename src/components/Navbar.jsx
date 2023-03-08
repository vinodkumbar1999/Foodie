const Navbar = () => {
    return ( 
        <div className="navbar">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <img height={70} width={120} src="images/Logo.webp" alt="" />
                    <a class="navbar-brand fs-2 fs-bold" href="#">Foodie</a>
                    <div class="collapse navbar-collapse fs-4 " id="navbarNav" style={{ marginLeft: "600px" }}>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active mx-2" aria-current="page" href="/home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active mx-2" href="/about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active mx-2" href="/post">Posts</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active mx-2" href="/add-post">Add Post</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active mx-2" href="/">logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;