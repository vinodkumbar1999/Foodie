import axios from "axios";
import { useEffect, useState } from "react";
import Banner from './banner'
const About = () => {
    let title = "ABOUT PAGE"
    let [users, setUsers] = useState([])
    let [posts, setPost] = useState([])

    useEffect(() => {
        let fetchData = async () => {
            let res = await axios('http://localhost:4000/post')
            let data = await res.data
            setPost(data)
            console.log(data);
        }
        fetchData()
    }, [])
    useEffect(() => {
        let fetchData = async () => {
            let res = await axios.get('http://localhost:4000/user')
            let data = await res.data
            setUsers(data)
            console.log(data);
        }
        fetchData()
    }, [])
    return (

        <div className=" text-center text-light font-monospace m-3">
            <div className="row">
                <Banner data={title}/>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-5 ms-5 mb-5">
                        <img width='500px' height="600px" src="/images/12.jpeg" alt="" />
                    </div>
                    <div className="col-6 ">
                        <h1 className="bg-light text-dark p-2 rounded">About Stories</h1>
                        <p className="bg-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, aperiam.</p>
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <div className="card p-4 m-5 bg-dark text-light ">
                                        Users
                                        <h4>{users.length}</h4>
                                    </div>
                                    <div className="card  p-4 m-5 bg-dark text-light">Lorem ipsum dolor sit amet.</div>
                                </div>
                                <div className="col-6">
                                    <div className="card  p-4 m-5 bg-dark text-light"> Lorem ipsum dolor sit amet.</div>
                                    <div className="card  p-4 m-5 bg-dark text-light">
                                        posts
                                        <h4>{posts.length}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

          
               
        </div>

    );
}

export default About;

