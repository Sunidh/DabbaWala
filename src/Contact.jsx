import React from 'react'
import contacts from './image/contacts-1.png'
import Navbar from './Navbar'
import Footer from './Footer'
export default function Contact() {
  return (
   <div>
    <Navbar/>
    <div className='container py-5'>
      <div className="d-flex justify-content-between flex-wrap pb-5">
          <div className=" text-start w-50 " style={{ width: "28rem" }}>
            <p className='pt-5'  style={{ fontSize: "60px", fontWeight: "bold", lineHeight: "80px" }}>Contact Us</p>
            <p style={{color:"grey"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe explicabo perspiciatis ex vel rem quo </p>
            <div className='d-flex' style={{justifyContent:"space-between"}}>
            <div className="card border-0" style={{width: "18rem",marginRight:"15px"}}>
  <div className="card-body">
    <div className="card-title"><i className="fa-solid fa-location-dot mt-1" style={{ fontSize:"45px",textAlign:"center",color:"#f29f05"}}></i>
    <p className='mt-3' style={{fontSize:"15px",fontWeight:"600"}}>
      Banglore,Karnataka 133222 , India
    </p>
    </div>
   
   
  </div>
</div>
<div className="card border-0" style={{width: "18rem",marginRight:"15px"}}>
  <div className="card-body">
    <div className="card-title"><i className="fa-solid fa-envelope mt-1" style={{ fontSize:"45px",textAlign:"center",color:"#f29f05"}}></i>
    <p className='mt-3' style={{fontSize:"15px",fontWeight:"600"}}>
      dabbawala.info@gmail.com
    </p>
    </div>
   
   
  </div>
</div>
<div className="card border-0" style={{width: "18rem",marginRight:"15px"}}>
  <div className="card-body">
    <div className="card-title"><i className="fa-solid fa-phone mt-1" style={{ fontSize:"45px",textAlign:"center",color:"#f29f05"}}></i>
    <p className='mt-3' style={{fontSize:"15px",fontWeight:"600"}}>
      +91 9113170477
    </p>
    </div>
   
   
  </div>
</div>
 
 




            </div>
            
          </div>
          <div style={{ width: "28rem" }}>
            <img className='img-fluid' src={contacts} alt="" />
          </div>
        </div>

       <div style={{paddingBottom:"50px",paddingTop:"50px"}}>
       <div className="card " >
 
       <div className="card-body d-flex">
       {/* <div className="w-50">
    <p className="text-start m-0" style={{ fontWeight: "bold", fontSize: "30px" }}>
      Get in touch with us
    </p>
    <div className="name-form m-0 p-0 py-4" style={{ position: "relative" }}>
    <i className='fa-regular fa-user'></i>
     
      <input className="p-0 m-0 " type="text"  placeholder="Enter your name" style={{width: "100%",height:"60px",color:"#cfcfcf",border:"1px solid #cfcfcf",borderRadius:"5px"}} />
    </div>
  </div> */}
  <div className="w-50">
  <p className="text-start m-0" style={{ fontWeight: "bold", fontSize: "30px" }}>
    Get in touch with us
  </p>
  <div className="name-form m-0 p-0 pt-4" style={{ position: "relative" }}>
    <input
      className=" m-0"
      type="text"
      placeholder="Enter your name"
      style={{
        width: "100%",
        height: "50px",
        color: "#cfcfcf",
        border: "1px solid #cfcfcf",
        borderRadius: "5px",
        paddingLeft: "40px", 
        fontSize:"20px"
        // Add left padding to make space for the icon
        
      }}
    />
    <i
      className="fa-regular fa-user pt-4"
      style={{
        position: "absolute",
        top: "50%",
        left: "10px", // Adjust the left position of the icon
        transform: "translateY(-50%)",
        zIndex:1,
        fontSize:"20px",
        color:"#cfcfcf"
      }}
    ></i>
  </div>

  <div className="name-form m-0 p-0 pt-4" style={{ position: "relative" }}>
    <input
      className=" m-0"
      type="email"
      placeholder="Enter your email"
      style={{
        width: "100%",
        height: "50px",
        color: "#cfcfcf",
        border: "1px solid #cfcfcf",
        borderRadius: "5px",
        paddingLeft: "40px", 
        fontSize:"20px"
        // Add left padding to make space for the icon
        
      }}
    />
    <i
      className="fa-regular fa-envelope pt-4"
      style={{
        position: "absolute",
        top: "50%",
        left: "10px", // Adjust the left position of the icon
        transform: "translateY(-50%)",
        zIndex:1,
        fontSize:"20px",
        color:"#cfcfcf"
      }}
    ></i>
  </div>

  <div className="name-form m-0 p-0 pt-4" style={{ position: "relative" }}>
    <textarea
      className=" m-0"
      type="text"
      placeholder="Enter your message"
      style={{
        width: "100%",
        height: "50px",
        color: "#cfcfcf",
        border: "1px solid #cfcfcf",
        borderRadius: "5px",
        paddingLeft: "40px", 
        fontSize:"20px"
        // Add left padding to make space for the icon
        
      }}
    />
    
  </div>
  <div className="name-form m-0 p-0 pt-4" style={{ position: "relative" }}>
    <button
      className=" m-0"
      
     
      style={{
        width: "100%",
        height: "50px",
        backgroundColor: "#f29f05",
        color:"white",
        border: "1px solid #cfcfcf",
        borderRadius: "5px",
        paddingLeft: "20px", 
        fontSize:"20px"
        // Add left padding to make space for the icon
        
      }}
    >Submit Application</button>
    
  </div>
</div>

  <div className="map w-50">
  
  </div>
</div>
</div>
       </div>
    </div>
    <Footer/>
   </div>
  )
}
