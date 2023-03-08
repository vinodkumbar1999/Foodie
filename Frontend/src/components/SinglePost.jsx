import { useEffect, useState } from "react";
import Banner from "./banner";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SinglePost = () => {
    let title = "POST"
    let param = useParams()
    let [post, setpost] = useState([])
    useEffect(()=>{
        let fetchData = async() =>{
            let res = await axios.get(`http://localhost:4000/post/${param._id}`)
            let data = await res.data
            setpost(data)
            console.log(data);
        }
        fetchData()
    })

    return ( 
        <div className="singlePost">
            <Banner data = {title}/>
            <div className="blogInfo text-center my-5 d-flex justify-content-center">
                <div className="image col-5" >
                    <img src={post.image} className="rounded-2 mt-5" alt="" height="650" width="450" />
                </div>
                <div className="info col-5 text-start">
                    <h1 className="my-3"> <u> {post.posttitle}</u></h1>
                    <div className="line mb-3"></div>
                    <p style={{wordWrap:"break-word"}}>{post.summary}</p>
                    <div className="location">
                        <h2> <img width="30" src="/images/location.png" alt="" /> Location</h2>
                        <div className="line mb-3"></div>
                        <iframe src={post.location}
                            className="my-3"
                            width="600" height="450"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className="linkBtn text-center">
                <Link to='/post' className="btn btn-dark btn-lg rounded-1 my-4 homeBtn">&lt; Go back to Posts</Link>
            </div>    

        </div>
     );
}
 
export default SinglePost;
