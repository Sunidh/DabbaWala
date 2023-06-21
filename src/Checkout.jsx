import React from 'react'

export default function Checkout() {
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
    <div className='py-5' style={{ borderRadius: "20px" }}>
      <div className="container text-start bg-white ">
        <p className='px-4' style={{ fontSize: "40px", fontFamily: "sans-serif", fontWeight: "500" }}>All Items</p>
        <div className="items">
          <div className='row'>
            <div class="col-xl-6 col-md-6 mb-4">
              <div class="card shadow h-100 py-0">
                <div class="card-body py-1">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div>
                        <img className='img-fluid' src="https://bslthemes.com/html/quickeat/assets/img/dish-2.png" alt="" />
                      </div>

                    </div>
                    <div class="col">
                      <h4>item name</h4>

                    </div>
                    <div class="col mr-2">
                      <h3>$50</h3>

                    </div>
                  </div>
                  <div className="row">
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
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6 border col-md-6 mb-4 '>

            <div>Total Price</div>
            <div>Rs. 195</div>
           

            </div>
            
          </div>
        </div>
      </div>

    </div>
  )
}
