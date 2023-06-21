import React from 'react'
import dish1 from './image/dish-1.png'
export default function Breakfast() {
    const increment = (id) => {

        let input = document.getElementById(id);
        let i = input.value;
        input.value = parseInt(i) + 1;

    }
    const decrement = (id) => {

        let input = document.getElementById(id);
        let i = input.value;
        if (parseInt(i) > 1) {
            input.value = parseInt(i) - 1;
        }

    }

    return (
        <div className='container'>
            <div className="row">
                <div class="col-xl-4 col-md-6 mb-4">
                    <div class="card border-left-warning shadow h-100 py-2">
                        <div class="card-body">
                            <img src={dish1} className='img-fluid' alt="" />
                            <p className='py-3 text-start' style={{ fontSize: "30px", fontWeight: "bold" }}>Egg, kiwi and sauce chilli</p>
                            <div className="d-flex justify-content-between">
                                <div className="btn">
                                    <button className='me-2 ' style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent" }}>
                                        Breakfast
                                    </button>
                                </div>
                                <div className='d-flex '>
                                    <div className="icon1 me-3">
                                        <i class="fa-solid fa-circle-info"></i>
                                    </div>
                                    <div className="icon2">
                                        <i class="fa-solid fa-heart" style={{ color: "#f29f05" }}></i>
                                    </div>
                                </div>

                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div><p style={{ fontSize: "35px", fontWeight: "bolder" }}>Rs.50</p></div>
                                <div className='d-flex'>
                                    <button className='me-2' onClick={() => decrement('myNumberInput')} style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent", width: '35px' }}>
                                        <span style={{ fontSize: "25px" }}>-</span>
                                    </button>
                                    <div className='border me-2 rounded border-1' style={{ width: '35px', overflow: 'hidden' }}>
                                        <input type="number" defaultValue={1} id={'myNumberInput'} style={{ width: "55px", marginLeft: '-5px', height: '100%', outlineColor: 'salmon', textAlign: 'center', outline: 'none', border: 'none' }} />
                                    </div>

                                    <button className='me-2' id='btnc' onClick={() => increment('myNumberInput')} style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent", width: '35px' }}>
                                        <span style={{ fontSize: "25px" }}>+</span>
                                    </button>
                                </div>


                            </div>
                            
                            <div class="addbasket d-grid gap-2 py-3">
                                <button class="btn btn-sm border-0 text-center" type="button" style={{ backgroundColor: "#f59f05" }}>
                                    <div className='w-100'>
                                    <div className='d-flex text-white align-items-center py-2 justify-content-center' style={{ fontSize:"15px"}}>
                                        <span className='me-2'>Add to basket</span>
                                        <i class="fa-solid fa-lock"></i>
                                    </div>
                                    </div>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 mb-4">
                    <div class="card border-left-warning shadow h-100 py-2">
                        <div class="card-body">
                            <img src={dish1} className='img-fluid' alt="" />
                            <p className='py-3 text-start' style={{ fontSize: "30px", fontWeight: "bold" }}>Egg, kiwi and sauce chilli</p>
                            <div className="d-flex justify-content-between">
                                <div className="btn">
                                    <button className='me-2 ' style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent" }}>
                                        Breakfast
                                    </button>
                                </div>
                                <div className='d-flex '>
                                    <div className="icon1 me-3">
                                        <i class="fa-solid fa-circle-info"></i>
                                    </div>
                                    <div className="icon2">
                                        <i class="fa-solid fa-heart" style={{ color: "#f29f05" }}></i>
                                    </div>
                                </div>

                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div><p style={{ fontSize: "35px", fontWeight: "bolder" }}>Rs.50</p></div>
                                <div className='d-flex'>
                                    <button className='me-2' onClick={() => decrement('myNumberInput1')} style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent", width: '35px' }}>
                                        <span style={{ fontSize: "25px" }}>-</span>
                                    </button>
                                    <div className='border me-2 rounded border-1' style={{ width: '35px', overflow: 'hidden' }}>
                                        <input type="number" defaultValue={1} id={'myNumberInput1'} style={{ width: "55px", marginLeft: '-5px', height: '100%', outlineColor: 'salmon', textAlign: 'center', outline: 'none', border: 'none' }} />
                                    </div>

                                    <button className='me-2' id='btnc' onClick={() => increment('myNumberInput1')} style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent", width: '35px' }}>
                                        <span style={{ fontSize: "25px" }}>+</span>
                                    </button>
                                </div>


                            </div>
                            
                            <div class="addbasket d-grid gap-2 py-3">
                                <button class="btn btn-sm border-0 text-center" type="button" style={{ backgroundColor: "#f59f05" }}>
                                    <div className='w-100'>
                                    <div className='d-flex text-white align-items-center py-2 justify-content-center' style={{ fontSize:"15px"}}>
                                        <span className='me-2'>Add to basket</span>
                                        <i class="fa-solid fa-lock"></i>
                                    </div>
                                    </div>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 mb-4">
                    <div class="card border-left-warning shadow h-100 py-2">
                        <div class="card-body">
                            <img src={dish1} className='img-fluid' alt="" />
                            <p className='py-3 text-start' style={{ fontSize: "30px", fontWeight: "bold" }}>Egg, kiwi and sauce chilli</p>
                            <div className="d-flex justify-content-between">
                                <div className="btn">
                                    <button className='me-2 ' style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent" }}>
                                        Breakfast
                                    </button>
                                </div>
                                <div className='d-flex '>
                                    <div className="icon1 me-3">
                                        <i class="fa-solid fa-circle-info"></i>
                                    </div>
                                    <div className="icon2">
                                        <i class="fa-solid fa-heart" style={{ color: "#f29f05" }}></i>
                                    </div>
                                </div>

                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div><p style={{ fontSize: "35px", fontWeight: "bolder" }}>Rs.50</p></div>
                                <div className='d-flex'>
                                    <button className='me-2' onClick={() => decrement('myNumberInput2')} style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent", width: '35px' }}>
                                        <span style={{ fontSize: "25px" }}>-</span>
                                    </button>
                                    <div className='border me-2 rounded border-1' style={{ width: '35px', overflow: 'hidden' }}>
                                        <input type="number" defaultValue={1} id={'myNumberInput2'} style={{ width: "55px", marginLeft: '-5px', height: '100%', outlineColor: 'salmon', textAlign: 'center', outline: 'none', border: 'none' }} />
                                    </div>

                                    <button className='me-2' id='btnc' onClick={() => increment('myNumberInput2')} style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent", width: '35px' }}>
                                        <span style={{ fontSize: "25px" }}>+</span>
                                    </button>
                                </div>


                            </div>
                            
                            <div class="addbasket d-grid gap-2 py-3">
                                <button class="btn btn-sm border-0 text-center" type="button" style={{ backgroundColor: "#f59f05" }}>
                                    <div className='w-100'>
                                    <div className='d-flex text-white align-items-center py-2 justify-content-center' style={{ fontSize:"15px"}}>
                                        <span className='me-2'>Add to basket</span>
                                        <i class="fa-solid fa-lock"></i>
                                    </div>
                                    </div>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 mb-4">
                    <div class="card border-left-warning shadow h-100 py-2">
                        <div class="card-body">
                            <img src={dish1} className='img-fluid' alt="" />
                            <p className='py-3 text-start' style={{ fontSize: "30px", fontWeight: "bold" }}>Egg, kiwi and sauce chilli</p>
                            <div className="d-flex justify-content-between">
                                <div className="btn">
                                    <button className='me-2 ' style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent" }}>
                                        Breakfast
                                    </button>
                                </div>
                                <div className='d-flex '>
                                    <div className="icon1 me-3">
                                        <i class="fa-solid fa-circle-info"></i>
                                    </div>
                                    <div className="icon2">
                                        <i class="fa-solid fa-heart" style={{ color: "#f29f05" }}></i>
                                    </div>
                                </div>

                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div><p style={{ fontSize: "35px", fontWeight: "bolder" }}>Rs.50</p></div>
                                <div className='d-flex'>
                                    <button className='me-2' onClick={() => decrement('myNumberInput3')} style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent", width: '35px' }}>
                                        <span style={{ fontSize: "25px" }}>-</span>
                                    </button>
                                    <div className='border me-2 rounded border-1' style={{ width: '35px', overflow: 'hidden' }}>
                                        <input type="number" defaultValue={1} id={'myNumberInput3'} style={{ width: "55px", marginLeft: '-5px', height: '100%', outlineColor: 'salmon', textAlign: 'center', outline: 'none', border: 'none' }} />
                                    </div>

                                    <button className='me-2' id='btnc' onClick={() => increment('myNumberInput3')} style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent", width: '35px' }}>
                                        <span style={{ fontSize: "25px" }}>+</span>
                                    </button>
                                </div>


                            </div>
                            
                            <div class="addbasket d-grid gap-2 py-3">
                                <button class="btn btn-sm border-0 text-center" type="button" style={{ backgroundColor: "#f59f05" }}>
                                    <div className='w-100'>
                                    <div className='d-flex text-white align-items-center py-2 justify-content-center' style={{ fontSize:"15px"}}>
                                        <span className='me-2'>Add to basket</span>
                                        <i class="fa-solid fa-lock"></i>
                                    </div>
                                    </div>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 mb-4">
                    <div class="card border-left-warning shadow h-100 py-2">
                        <div class="card-body">
                            <img src={dish1} className='img-fluid' alt="" />
                            <p className='py-3 text-start' style={{ fontSize: "30px", fontWeight: "bold" }}>Egg, kiwi and sauce chilli</p>
                            <div className="d-flex justify-content-between">
                                <div className="btn">
                                    <button className='me-2 ' style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent" }}>
                                        Breakfast
                                    </button>
                                </div>
                                <div className='d-flex '>
                                    <div className="icon1 me-3">
                                        <i class="fa-solid fa-circle-info"></i>
                                    </div>
                                    <div className="icon2">
                                        <i class="fa-solid fa-heart" style={{ color: "#f29f05" }}></i>
                                    </div>
                                </div>

                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div><p style={{ fontSize: "35px", fontWeight: "bolder" }}>Rs.50</p></div>
                                <div className='d-flex'>
                                    <button className='me-2' onClick={() => decrement('myNumberInput4')} style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent", width: '35px' }}>
                                        <span style={{ fontSize: "25px" }}>-</span>
                                    </button>
                                    <div className='border me-2 rounded border-1' style={{ width: '35px', overflow: 'hidden' }}>
                                        <input type="number" defaultValue={1} id={'myNumberInput4'} style={{ width: "55px", marginLeft: '-5px', height: '100%', outlineColor: 'salmon', textAlign: 'center', outline: 'none', border: 'none' }} />
                                    </div>

                                    <button className='me-2' id='btnc' onClick={() => increment('myNumberInput4')} style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent", width: '35px' }}>
                                        <span style={{ fontSize: "25px" }}>+</span>
                                    </button>
                                </div>


                            </div>
                            
                            <div class="addbasket d-grid gap-2 py-3">
                                <button class="btn btn-sm border-0 text-center" type="button" style={{ backgroundColor: "#f59f05" }}>
                                    <div className='w-100'>
                                    <div className='d-flex text-white align-items-center py-2 justify-content-center' style={{ fontSize:"15px"}}>
                                        <span className='me-2'>Add to basket</span>
                                        <i class="fa-solid fa-lock"></i>
                                    </div>
                                    </div>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 mb-4">
                    <div class="card border-left-warning shadow h-100 py-2">
                        <div class="card-body">
                            <img src={dish1} className='img-fluid' alt="" />
                            <p className='py-3 text-start' style={{ fontSize: "30px", fontWeight: "bold" }}>Egg, kiwi and sauce chilli</p>
                            <div className="d-flex justify-content-between">
                                <div className="btn">
                                    <button className='me-2 ' style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent" }}>
                                        Breakfast
                                    </button>
                                </div>
                                <div className='d-flex '>
                                    <div className="icon1 me-3">
                                        <i class="fa-solid fa-circle-info"></i>
                                    </div>
                                    <div className="icon2">
                                        <i class="fa-solid fa-heart" style={{ color: "#f29f05" }}></i>
                                    </div>
                                </div>

                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div><p style={{ fontSize: "35px", fontWeight: "bolder" }}>Rs.50</p></div>
                                <div className='d-flex'>
                                    <button className='me-2' onClick={() => decrement('myNumberInput5')} style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent", width: '35px' }}>
                                        <span style={{ fontSize: "25px" }}>-</span>
                                    </button>
                                    <div className='border me-2 rounded border-1' style={{ width: '35px', overflow: 'hidden' }}>
                                        <input type="number" defaultValue={1} id={'myNumberInput5'} style={{ width: "55px", marginLeft: '-5px', height: '100%', outlineColor: 'salmon', textAlign: 'center', outline: 'none', border: 'none' }} />
                                    </div>

                                    <button className='me-2' id='btnc' onClick={() => increment('myNumberInput5')} style={{ borderRadius: "5px", color: "#f29f05", border: "1px solid #f29f05", backgroundColor: "transparent", width: '35px' }}>
                                        <span style={{ fontSize: "25px" }}>+</span>
                                    </button>
                                </div>


                            </div>
                            
                            <div class="addbasket d-grid gap-2 py-3">
                                <button class="btn btn-sm border-0 text-center" type="button" style={{ backgroundColor: "#f59f05" }}>
                                    <div className='w-100'>
                                    <div className='d-flex text-white align-items-center py-2 justify-content-center' style={{ fontSize:"15px"}}>
                                        <span className='me-2'>Add to basket</span>
                                        <i class="fa-solid fa-lock"></i>
                                    </div>
                                    </div>
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>


        </div>


    )
}
