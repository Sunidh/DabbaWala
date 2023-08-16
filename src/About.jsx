import React from 'react'
import time from './image/time.png'
import Team from './image/Team.jpg'
import teamsa from './image/team-1.png'
import teamsb from './image/team-2.png'
import Navbar from './Navbar'
import Footer from './Footer'

export default function About() {
    return (
       <div>
        <Navbar/>
        <div className='container'>
            <div className="d-flex justify-content-between flex-wrap py-5">
                <div className=" text-start w-50 pt-5" style={{ width: "28rem" }}>
                    <p style={{ fontSize: "60px", fontWeight: "bold", lineHeight: "80px" }}>Nothing to Worry about with Dabbawalla.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe explicabo perspiciatis ex vel rem quo </p>

                </div>
                <div style={{ width: "28rem" }}>
                    <img className='img-fluid ' style={{ borderRadius: "10px " }} src={Team} alt="" />
                </div>
            </div>

            <div className="d-flex justify-content-between flex-wrap py-5">
                <div className='py-5' style={{ width: "28rem" }} >
                    <img className='img-fluid ' style={{ borderRadius: "10px " }} src={time} alt="" />
                </div>
                <div className=" text-start w-50 py-5" style={{ width: "28rem" }}>
                    <p style={{ fontSize: "50px", fontWeight: "bold", lineHeight: "70px" }}>Our mission is to save your time.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At et, omnis voluptatem vero ipsum numquam labore quas ullam sapiente ratione pariatur repellendus iure suscipit atque aspernatur, debitis soluta officiis ex?</p>

                </div>

            </div>
            <div className="row py-5" >
                <div className="col">
                    <div className="card shadow mb-4 border-0">

                        <div className="card-body">
                            <div className="icon" style={{ fontSize: "80px", color: "#f29f05" }}>
                                <i className="fa-solid fa-hand-holding-heart"></i>
                            </div>
                            <div className="head">
                                <h3>Free Delivery</h3>
                            </div>
                            <div className="detail pt-4" style={{ color: "grey" }}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi tempora optio quam, deserunt suscipit vitae incidunt aut accusamus quae quia officiis vero ab enim voluptate neque temporibus iure! Doloribus, dignissimos!
                            </div>
                        </div>
                    </div></div>
               
                <div className="col">
                    <div className="card shadow mb-4 border-0">

                        <div className="card-body">
                            <div className="icon" style={{ fontSize: "80px", color: "#f29f05" }}>
                            <i className="fa-regular fa-clock"></i>
                            </div>
                            <div className="head">
                                <h3>Save your time.</h3>
                            </div>
                            <div className="detail pt-4" style={{ color: "grey" }}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi tempora optio quam, deserunt suscipit vitae incidunt aut accusamus quae quia officiis vero ab enim voluptate neque temporibus iure! Doloribus, dignissimos!
                            </div>
                        </div>
                    </div></div>
                    <div className="col">
                    <div className="card shadow mb-4 border-0">

                        <div className="card-body">
                            <div className="icon" style={{ fontSize: "80px", color: "#f29f05" }}>
                            <i className="fa-solid fa-tags"></i>
                            </div>
                            <div className="head">
                                <h3>Regular Discount</h3>
                            </div>
                            <div className="detail pt-4" style={{ color: "grey" }}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi tempora optio quam, deserunt suscipit vitae incidunt aut accusamus quae quia officiis vero ab enim voluptate neque temporibus iure! Doloribus, dignissimos!
                            </div>
                        </div>
                    </div></div>
                <div className="col">
                    <div className="card shadow mb-4 border-0">

                        <div className="card-body">
                            <div className="icon" style={{ fontSize: "80px", color: "#f29f05" }}>
                            <i className="fa-solid fa-utensils "></i>
                            </div>
                            <div className="head">
                                <h3>Variety Food</h3>
                            </div>
                            <div className="detail pt-4" style={{ color: "grey" }}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi tempora optio quam, deserunt suscipit vitae incidunt aut accusamus quae quia officiis vero ab enim voluptate neque temporibus iure! Doloribus, dignissimos!
                            </div>
                        </div>
                    </div></div>




            </div>
           <div>
           <div className='py-5'>
                <p style={{textAlign:"center",fontSize:"40px",fontWeight:"700"}}>Our Team</p>
                <p style={{textAlign:"center",color:"gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquid voluptates consequuntur<br/> laboriosam quis. Sint optio, corporis iste, pariatur magnam culpa quasi minima assumenda<br/> sit hic similique iusto rem facilis.</p>
            </div>
            <div className="row py-3">
                <div className="col w-50">
                <div className="card border-0" style={{width: "18rem",background:"none"}}>
  <img src={teamsa} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Gaurav Sharma</h5>
    <p className="card-text" style={{color:"grey"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="media-menu " >
          <ul className='d-flex text-start m-0 p-0' style={{listStyleType:"none",justifyContent:"flex-start",}}>
            <li className='mr-1'  style={{borderRadius:"50%",border:"2px solid grey",height:"40px",width:"40px",textAlign:"center",fontSize:"20px",marginRight:"16px",color:"grey"}}> <i className="fa-brands fa-facebook-f my-2" ></i>
          
          </li>
          <li className='mr-1'  style={{borderRadius:"50%",border:"2px solid grey",height:"40px",width:"40px",textAlign:"center",fontSize:"20px",marginRight:"16px",color:"grey"}}><i className="fa-brands fa-instagram my-2"></i></li>
          <li className='mr-1'  style={{borderRadius:"50%",border:"2px solid grey",height:"40px",width:"40px",textAlign:"center",fontSize:"20px",marginRight:"16px",color:"grey"}}> <i className="fa-brands fa-twitter my-2"></i></li>
          </ul>
           
           </div>
    
  </div>
</div>
                </div>
                <div className="col w-50">
                <div className="card border-0" style={{width: "18rem",background:"none"}}>
  <img src={teamsb} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Sunidhi Saurabh</h5>
    <p className="card-text" style={{color:"grey"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="media-menu " >
          <ul className='d-flex text-start m-0 p-0' style={{listStyleType:"none",justifyContent:"flex-start",alignItems:"center"}}>
            <li className='mr-1'  style={{borderRadius:"50%",border:"2px solid grey",height:"40px",width:"40px",textAlign:"center",fontSize:"20px",marginRight:"14px",color:"grey"}}> <i className="fa-brands fa-facebook-f my-2" ></i>
          
          </li>
          <li className='mr-1'  style={{borderRadius:"50%",border:"2px solid grey",height:"40px",width:"40px",textAlign:"center",fontSize:"20px",marginRight:"14px",color:"grey"}}><i className="fa-brands fa-instagram my-2"></i></li>
          <li className='mr-1'  style={{borderRadius:"50%",border:"2px solid grey",height:"40px",width:"40px",textAlign:"center",fontSize:"20px",marginRight:"14px",color:"grey"}}> <i className="fa-brands fa-twitter my-2"></i></li>
          </ul>
           
           </div>
    
  </div>
</div>
                </div>

            </div>
           </div>
        </div>
        <Footer/>
       </div>
    )
}
