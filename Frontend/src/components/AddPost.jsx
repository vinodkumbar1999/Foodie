import Banner from "./banner";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddPost = () => {
    let title = "ADD YOUR POST"
    let [author, setauthor] = useState("")
    let [posttitle, setposttitle] = useState("")
    let [summary, setsummary] =useState("")
    let [image, setimage] = useState("")
    let [location, setlocation] = useState("")
    
    let handelpost = (e) =>{
        e.preventDefault();
        let data = {author, posttitle, summary, image, location}
        if (author=="" && posttitle=="" && summary=="" && image=="" && location=="") {
            alert("please fill all the fields")
        } else {
            axios.post('http://localhost:4000/add-post', data)
            .then(res =>{
                alert(res.data.message)
            }).catch(err=>{
                alert(err.data.message)
            })
           
        }

    }

    return ( 
        <div className="addpost">
            <Banner data={title}/>
           
            <div className="row">
                <div className="col-6">
                    <img style={{marginTop:"42px", marginLeft:"100px"}} height={720} width={600} src="images/13.jpeg" alt="" />
                </div>
                <div className="col-6 ">
                <h1 className="fs-1 fw-bolder m-4"> <u>ADD POST</u> </h1>  
                <form action="" onSubmit={handelpost}>
                <div className="author mx-4">
                    <label htmlFor="">Author</label>
                    <input type="text" name="author" className="form-control my-2 rounded-0 w-75" value={author} onChange={(e)=>setauthor(e.target.value)} />
                </div>
                <div className="title mt-3 mx-4">
                    <label htmlFor="">Title</label>
                    <input type="text" name="posttitle" className="form-control my-2 rounded-0 w-75" value={posttitle} onChange={(e)=>setposttitle(e.target.value)} />
                </div>
                <div className="summary mx-4">
                    <label htmlFor="">Summary</label>
                    <textarea name="summary" id="" cols="30" rows="10" className="form-control my-2 rounded-0 w-75" value={summary} onChange={(e)=>setsummary(e.target.value)}></textarea>
                </div>
                 <div className="image mx-4">
                    <label htmlFor="">Image</label>
                    <input type="text" name="image" className="form-control my-2 rounded-0 w-75" value={image} onChange={(e)=>setimage(e.target.value)}/>
                 </div>
                 <div className="loc mx-4">
                    <label htmlFor="">Location</label>
                    <input type="text" name="location" className="form-control  rounded-0 w-75" value={location} onChange={(e)=>setlocation(e.target.value) }/>
                 </div>
                 <div className="button m-4">
                    <button className="btn btn-outline-danger ">Submit Post</button>
                 </div>
                 </form>
                </div>
            </div>
        </div>
     );
}
 
export default AddPost;