import React from "react";

const Menu = () => {
    return (
        <div id="restaurantmenu">
            <h1>Menu</h1>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <div className="d-flex justify-content-between">
                        <h6 className="m-0 font-weight-bold text-orange">Restaurant Menu</h6>
                        
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Breakfast</th>
                                    <th>Lunch</th>
                                    <th>Tea</th>
                                    <th>Dinner</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>#</th>
                                    <th>Breakfast</th>
                                    <th>Lunch</th>
                                    <th>Tea</th>
                                    <th>Dinner</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {/* if menu is null */}
                                {/* <div>
                                    <tr>
                                        <td colspan="5" className="text-danger text-center">
                                            <span style={{fontSize: 'larger', fontWeight: 'bold'}}>Add Your Restaurant Menu !!</span>
                                        </td>
                                    </tr>
                                </div> */}
                                {/* if menu is not null */}
                                {/* <div> */}
                                    <tr>
                                        <th>Monday</th>
                                        <td>Paratha</td>
                                        <td>Dal Chawal</td>
                                        <td>Tea/Biscuit</td>
                                        <td>Roti sabji</td>

                                    </tr>
                                    <tr>
                                        <th>Tuesday</th>
                                        <td>Paratha</td>
                                        <td>Dal Chawal</td>
                                        <td>Tea/Biscuit</td>
                                        <td>Roti sabji</td>

                                    </tr>
                                    <tr>
                                        <th>Wednesday</th>
                                        <td>Paratha</td>
                                        <td>Dal Chawal</td>
                                        <td>Tea/Biscuit</td>
                                        <td>Roti sabji</td>

                                    </tr>
                                    <tr>
                                        <th>Thursday</th>
                                        <td>Paratha</td>
                                        <td>Dal Chawal</td>
                                        <td>Tea/Biscuit</td>
                                        <td>Roti sabji</td>

                                    </tr>
                                    <tr>
                                        <th>Friday</th>
                                        <td>Paratha</td>
                                        <td>Dal Chawal</td>
                                        <td>Tea/Biscuit</td>
                                        <td>Roti sabji</td>

                                    </tr>
                                    <tr>
                                        <th>Saturday</th>
                                        <td>Paratha</td>
                                        <td>Dal Chawal</td>
                                        <td>Tea/Biscuit</td>
                                        <td>Roti sabji</td>

                                    </tr>
                                    <tr>
                                        <th>Sunday</th>
                                        <td>Paratha</td>
                                        <td>Dal Chawal</td>
                                        <td>Tea/Biscuit</td>
                                        <td>Roti sabji</td>

                                    </tr>

                                {/* </div> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;