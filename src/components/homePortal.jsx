import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import AddPost from "./AddPost";
import Post from "./Post";
import SinglePost from "./SinglePost";
import Footer from "./Footer";
const Homeportal = () => {
    return ( 
        <div className="homePortal">
            <Navbar/>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/add-post" element={<AddPost/>}/>
                <Route path="/post" element={<Post/>}/>
                <Route path="/post/:_id" element={<SinglePost/>}/>
            </Routes>
            <Footer/>
        </div>
     );
}
 
export default Homeportal;