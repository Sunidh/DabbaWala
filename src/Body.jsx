import React from 'react'
import delivery from './image/body1.jpg';
import illustration1 from './image/illustration-1.png';
import illustration2 from './image/illustration-2.png';
import illustration3 from './image/illustration-3.png';
import Annapurna from './image/Annapurna.jpg';
import Photo3 from './image/photo-3.png';
import Photo4 from './image/photo-4.png';
import merchant from './image/merchant.jpg';
import subscribe from './image/subscribe.png'
import { base_url } from './apiLinks'
import Navbar from './Navbar';
import Footer from './Footer'; 

export default function Body() {
  return (
    <div>
      <Navbar/>
      <div>
      <div className="container">
        <div className="d-flex justify-content-between flex-wrap pb-5">
          <div className=" text-start w-50 " style={{ width: "28rem" }}>
            <p style={{ fontSize: "60px", fontWeight: "bold", lineHeight: "80px" }}>The Best<br />
              Restaurants<br />in Your Home.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe explicabo perspiciatis ex vel rem quo fuga ullam in, totam aspernatur ea quasi atque architecto doloribus dolorem! Adipisci ratione neque voluptatibus libero perferendis eos esse sequi. Quibusdam explicabo incidunt accusantium repellendus.</p>
            <div className='d-flex'>
              <select class="form-select " aria-label="Default select example" style={{ color: "gray" }}>
                <option selected style={{ color: "gray" }}>Select a Restaurant</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <button className="btn text-white ms-2" type="submit" style={{ backgroundColor: "#f29f05" }}>Order&nbsp;now</button>
            </div>
          </div>
          <div style={{ width: "28rem" }}>
            <img className='img-fluid' src={delivery} alt="" />
          </div>
        </div>
        <div className='py-5'>
          <div className="text">
            <p style={{ textAlign: 'center', fontSize: '50px' }}>How it Works</p>
            <p style={{ textAlign: 'center', color: 'GrayText' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic nesciunt illum consequuntur aperiam reiciendis enim sint<br /> quo, accusamus ut doloribus!</p>
          </div>
          {/* //cards// services */}
          <div className="d-flex justify-content-around flex-wrap" >
            <div >
              <div class="card bg-transparent border-0" style={{ width: "18rem" }}>
                <img src={illustration1} class="card-img-top" alt="" />
                <div class="card-body">
                  <h4 class="card-title "><span style={{ color: "GrayText", fontSize: "30px" }}>01</span>Select Restaurant</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                </div>

              </div>
            </div>
            <div >
              <div class="card bg-transparent border-0" style={{ width: "18rem" }}>
                <img src={illustration2} class="card-img-top" alt="" />
                <div class="card-body">
                  <h4 class="card-title "><span style={{ color: "GrayText", fontSize: "30px" }}>02</span>Select menu</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                </div>

              </div>
            </div>
            <div>
              <div class="card bg-transparent border-0" style={{ width: "18rem" }}>
                <img src={illustration3} class="card-img-top" alt="" />
                <div class="card-body">
                  <h4 class="card-title "><span style={{ color: "GrayText", fontSize: "30px" }}>03</span>Wait for Delivery</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                </div>

              </div>
            </div>
          </div>
        </div>
        {/* End of card */}

        {/* Start of best Restaurants */}
        <div className='py-5'>
          <div className="row">
            <div className="col text-start ">
              <p style={{ fontSize: "60px", fontWeight: "bold", lineHeight: "80px" }}>Best Quality <br />in your City.</p>
              <p style={{ color: "gray" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, doloribus quo repudiandae necessitatibus eius earum temporibus? Suscipit alias vero aperiam.</p>

            </div>
            <div className="col d-flex pt-4">
              <div><img className='me-4' style={{ width: "70px", height: "70px", borderRadius: "10px" }} src={Annapurna} alt="" /></div>
              <div className='text-start'>
                <h4 >Annapurna Mess Services</h4>
                <div className='d-flex '>
                  <button className='me-1 ' style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05" }}>
                    Breakfast
                  </button>
                  <button className='me-1 ' style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05" }}>Lunch</button>
                  <button className='me-1 ' style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05" }}>Dinner</button>

                </div>
                <div>
                  <p className='mt-3' style={{ color: "gray" }} >                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et, dolorum voluptates molestiae dolores culpa. Quos, culpa ea, neque vitae blanditiis delectus sapiente dolore perspiciatis
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col d-flex pt-5">
              <div><img className='me-4' style={{ width: "50px", height: "50px", borderRadius: "10px" }} src={Annapurna} alt="" /></div>
              <div className='text-start'>
                <h4 >Annapurna Mess Services</h4>
                <div className='d-flex '>
                  <button className='me-1 ' style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05" }}>
                    Breakfast
                  </button>
                  <button className='me-1 ' style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05" }}>Lunch</button>
                  <button className='me-1 ' style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05" }}>Dinner</button>

                </div>
                <div>
                  <p className='mt-3' style={{ color: "gray" }} >                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et, dolorum voluptates molestiae dolores culpa. Quos, culpa ea, neque vitae blanditiis delectus sapiente dolore perspiciatis
                  </p>
                </div>
              </div>

            </div>
            <div className="col d-flex pt-5">
              <div><img className='me-4' style={{ width: "50px", height: "50px", borderRadius: "10px" }} src={Annapurna} alt="" /></div>
              <div className='text-start'>
                <h4 >Annapurna Mess Services</h4>
                <div className='d-flex '>
                  <button className='me-1 ' style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05" }}>
                    Breakfast
                  </button>
                  <button className='me-1 ' style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05" }}>Lunch</button>
                  <button className='me-1 ' style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05" }}>Dinner</button>

                </div>
                <div>
                  <p className='mt-3' style={{ color: "gray" }} >                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam et, dolorum voluptates molestiae dolores culpa. Quos, culpa ea, neque vitae blanditiis delectus sapiente dolore perspiciatis
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div className="button mt-5" >

            <button style={{ borderRadius: "5px", border: "1px solid #f29f05", backgroundColor: "none", color: "#f29f05", width: "100px", height: "36px", fontSize: "15px" }}>

              SEE ALL &nbsp;
              <i class="fa-solid fa-arrow-right "></i>

            </button>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-between flex-wrap pb-5 my-5">
            <div style={{ width: "28rem" }}>
              <img className='img-fluid' src={Photo3} alt="" />
            </div>
            <div className=" text-start w-50 " style={{ width: "28rem" }}>
              <p style={{ fontSize: "60px", fontWeight: "bold", lineHeight: "60px" }}>Food from your favorite restaurants to your table</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe explicabo perspiciatis ex vel rem quo fuga ullam in, totam aspernatur ea quasi atque architecto doloribus dolorem! Adipisci ratione neque voluptatibus libero perferendis eos esse sequi. Quibusdam explicabo incidunt accusantium repellendus.</p>
              <div >

                <button className="btn text-white" type="submit" style={{ backgroundColor: "#f29f05" }}>Order&nbsp;now</button>
              </div>
            </div>

          </div>
        </div>
        {/* start of new service show good taste */}
        <div className='mb-4'>

          <div class="row">
            <div className="col text-start">
              <p style={{ fontSize: "30px", fontWeight: "bold" }}>
                Service shows good taste.
              </p>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-0 shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">

                      <div class="h5 mb-0 font-weight-bold " style={{ color: "#f29f05", fontSize: "50px", fontWeight: "700" }}>976</div>
                    </div>
                    <div class="col text-start">
                      <p style={{ color: "gray", fontSize: "20px" }}>Satisfied Customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-0 shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">

                      <div class="h5 mb-0 font-weight-bold " style={{ color: "#f29f05", fontSize: "50px", fontWeight: "700" }}>120</div>
                    </div>
                    <div class="col text-start">
                      <p style={{ color: "gray", fontSize: "20px" }}>Best Restaurants</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-0 shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">

                      <div class="h5 mb-0 font-weight-bold " style={{ color: "#f29f05", fontSize: "50px", fontWeight: "700" }}>1K+</div>
                    </div>
                    <div class="col text-start">
                      <p style={{ color: "gray", fontSize: "20px" }}>Food Delivered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* Cutomer say */}
        <div>
          <div className="d-flex justify-content-between flex-wrap py-5">
            <div className=" text-start w-50 " style={{ width: "28rem" }}>
              <p style={{ fontSize: "60px", fontWeight: "bold", lineHeight: "80px" }}>What customers  Say about us.</p>
              <p style={{ color: "grey" }}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe explicabo perspiciatis ex vel rem quo fuga ullam in, totam aspernatur ea quasi atque architecto doloribus dolorem! Adipisci ratione neque voluptatibus libero perferendis eos esse sequi. Quibusdam explicabo incidunt accusantium repellendus."</p>
              <div className='d-flex'>

              </div>
            </div>
            <div style={{ width: "28rem" }}>
              <img className='img-fluid' src={Photo4} alt="" />
            </div>
          </div>
        </div>


      </div>

      <div style={{ backgroundColor: "#363636" }}>
        <div className="container">
          <div className="text-white py-5" style={{ textAlign: "center", fontSize: "50px", fontWeight: "bold" }}>
            Want To Join Partnership?
          </div>
          <div className="row">
            <div class="col-xl-6 col-md-6 mb-4" style={{ backgroundImage: `url(${merchant})`, backgroundSize: "100% 100%", borderRadius: "20px" }}>
              <div class="card border-0 shadow  py-2 bg-transparent " style={{ height: "250px" }} >
                <div class="card-body bg-transparent">
                  {/* <div class="row no-gutters align-items-center">
                    <div class="col mr-2">

                      <div class="h5 mb-0 font-weight-bold " style={{ color: "#f29f05", fontSize: "50px", fontWeight: "700" }}>976</div>
                    </div>
                    <div class="col text-start">
                      <p style={{ color: "gray", fontSize: "20px" }}>Satisfied Customers</p>
                    </div>
                  </div> */}
                  


                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 mb-4">
              <div className="card-text card h-100 text-center" style={{backgroundColor: "#252525"}}>
                <p className='mt-4' style={{ color: "white", fontWeight: "bolder", marginTop: "100px", fontSize: "35px" }}>Register Your Restaurant
                </p>
                <div className="button mt-5" >

                  <a href={`${base_url}/restaurant-owner-registration`} rel="noreferrer" target='_blank' className='btn btn-warning text-dark'>

                    Register Now &nbsp;
                    <i class="fa-solid fa-arrow-right "></i>

                  </a>
                </div>
              </div>
            </div>
            {/* <div class="col-xl-6 col-md-6 mb-4">
              <div class="card border-0 shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">

                      <div class="h5 mb-0 font-weight-bold " style={{ color: "#f29f05", fontSize: "50px", fontWeight: "700" }}>976</div>
                    </div>
                    <div class="col text-start">
                      <p style={{ color: "gray", fontSize: "20px" }}>Satisfied Customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* Subscribe */}
      <div className="container py-5">

        <div className="d-flex justify-content-between flex-wrap py-5">
          <div style={{ width: "28rem" }}>
            <img className='img-fluid' src={subscribe} alt="" />
          </div>
          <div className=" text-start w-50 " style={{ width: "28rem" }}>
            <p style={{ fontSize: "60px", fontWeight: "bold", lineHeight: "80px" }}>Get Hussle Free Delivery Everyday without ordering Daily</p>

            <div className='d-flex'>
              <input type='email' placeholder='Enter Your E-mail' style={{ border: "none", borderRadius: "5px" }} />
              <button className="btn text-white ms-2" type="submit" style={{ backgroundColor: "#f29f05" }}>Subscribe</button>
            </div>
          </div>

        </div>

      </div>
    </div>
    <Footer/>
    </div>
  )
}
