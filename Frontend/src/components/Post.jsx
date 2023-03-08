import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "./banner";
import { Link } from "react-router-dom";

const Post = () => {
    let title = "LATEST POSTS"

let [post, setpost] = useState([])

    useEffect(()=>{
        let fetchData = async() =>{
            let res = await axios.get("http://localhost:4000/post")
            let data = await res.data
            setpost(data)
        }
        fetchData()
    },[])
    return ( 
        <div className="post">
            <Banner data={title}/>
            <div className="m-5 d-flex" style={{display:"flex", flexWrap:"wrap"}}>
            {
                post.map(x=>(
                    <div className="posts mx-5 align-center">
                        <Link to={`/post/${x._id}`}><img src={x.image} height={400} width={300} alt="" /></Link>
                        <h1 style={{ marginBottom:"0px"}}>{x.posttitle}</h1>
                        <h4 style={{color:"gray"}}>Author: {x.author}</h4>
                        <Link to={`/post/${x._id}`}  className="btn btn-outline-danger">Read More</Link>
                
                    </div>
                ))
            }
            </div>
        </div>
     );
}
 
export default Post;