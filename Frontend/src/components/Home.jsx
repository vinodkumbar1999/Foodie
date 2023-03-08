import { Link } from "react-router-dom";
import '../Styles/home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="row" >
                <div className="col-lg-7 col-sm-12 ">
                    <img width={950} height={600} src="images/2.jpeg" alt="" />
                </div>
                <div className=" bg-warning col-lg-5 col-sm-12 ">
                    <h1 className=" p-5 mt-5 mt-3 pb-2">Love the <br /> Delicious & <br />Tasty Foods</h1>
                    <hr />
                    <p className="fs-5 px-5">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <Link to='/add-post' className="btn btn-outline-dark mt-3 mx-5" style={{ padding: "8px 13px", fontSize: "20px" }}>Add a Post &#8594;</Link>
                    <div className="d-flex mt-5">
                        <div>
                            <Link className="btn btn-outline-light" style={{ padding: "18px 110px", fontSize: "20px" }}>&#8592;Forward</Link>
                        </div>
                        <div>
                            <Link className="btn btn-outline-light" style={{ padding: "18px 110px", fontSize: "20px", marginLeft: "3px" }}> Next  &#8594;</Link>
                        </div>
                    </div>
                </div>
            </div>


            <h1 className="fs-2 fs-bold mt-5 mx-5"> <u>Recent Stories</u> </h1>
            <div className="row">
                <div className="col-6">
                    <div className="row m-4">
                        <div className="col-6">
                            <img width={300} height={300} src="images/3.jpeg" alt="" />
                            <h5 className="" style={{ color: "gray" }}>Dessert  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   March 01, 2018</h5>
                            <h5 style={{ fontFamily: "sans-serif" }}>Tasty & Delicious Foods</h5>
                            <Link to={'/post'} style={{ color: "orangered", textDecoration: "none", fontSize: "22px" }}>Read More &#8594;</Link>
                        </div>
                        <div className="col-6">
                            <img width={300} height={300} src="images/4.jpeg" alt="" />
                            <h5 className="" style={{ color: "gray" }}>Dessert &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; March 01, 2018</h5>
                            <h5 style={{ fontFamily: "sans-serif" }}>Tasty & Delicious Foods</h5>
                            <Link to={'/post'} style={{ color: "orangered", textDecoration: "none", fontSize: "22px" }}>Read More &#8594;</Link>
                        </div>
                    </div>
                    <div className="row mx-4">
                        <div className="col-6">
                            <img width={300} height={300} src="images/5.jpeg" alt="" />
                            <h5 className="" style={{ color: "gray" }}>Dessert &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; March 01, 2018</h5>
                            <h5 style={{ fontFamily: "sans-serif" }}>Tasty & Delicious Foods</h5>
                            <Link to={'/post'} style={{ color: "orangered", textDecoration: "none", fontSize: "22px" }}>Read More &#8594;</Link>
                        </div>
                        <div className="col-6">
                            <img width={300} height={300} src="images/6.jpeg" alt="" />
                            <h5 className="" style={{ color: "gray" }}>Dessert  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   March 01, 2018</h5>
                            <h5 style={{ fontFamily: "sans-serif" }}>Tasty & Delicious Foods</h5>
                            <Link to={'/post'} style={{ color: "orangered", textDecoration: "none", fontSize: "22px" }}>Read More &#8594;</Link>
                        </div>
                    </div>

                </div>
                <div className="big col-6 mt-3">
                    <h1 style={{ marginTop: "600px", fontWeight: "bold", color: "white" }}>Tasty & Delicious Foods</h1>
                    <Link to={'/post'} style={{ color: "white", textDecoration: "none", fontWeight: "bold", fontSize: "40px", }}>Read More &#8594;</Link>
                </div>
            </div>

            <div className="row m-3">
                <div className="col-lg-4 ">
                    <div className="card bg-lg-dark  mb-3 ">
                        <div className="card-body bg-dark ">
                            <div className="card-lg-title mt-3 mb-3" style={{color:"white"}}>Watch Videos</div>
                            <div className="card-text mt-5 mb-5">
                                <h1 style={{color:"white"}}>  Roger <br /> Bosch</h1>
                                <p className="text-secondary mt-5 mb-5">A small river named Duden flows by their place and supplies it with the necessary regelialia. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p className="mt-5 mb-5" style={{color:"white"}}> <i> <u> Roger.Bosch</u> </i></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <figure className="figure">
                        <img className=" mt-2 mb-2 ms-0" height={470} width={900} src="https://t4.ftcdn.net/jpg/02/42/11/11/360_F_242111146_bIk4vYtvTo7n4T9EhOk37sLwVQjF6wVX.jpg" alt="" />
                    </figure>
                </div>
            </div>






        </div>
    );
}

export default Home;