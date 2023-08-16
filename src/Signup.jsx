import React from 'react'
import { Link } from 'react-router-dom'
export default function Signup() {
	return (
		<div className='bg-danger py-1' style={{ minHeight: "100vh" }}>

			<div className="container">
				<div className="card o-hidden border-0 shadow-lg my-5">
					<div className="card-body p-0">
						{/* <!-- Nested Row within Card Body --> */}
						<div className="row">
							<div className="col-lg-5 d-none d-lg-block" style={{
								background: 'url("https://source.unsplash.com/Mv9hjnEUHR4/600x800")',
								backgroundPosition: 'center',
								backgroundSize: 'cover'
							}}>
							</div>
							<div className="col-lg-7">
								<div className="p-5">

									<div className="text-center">
										<h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
									</div>
									<form className="user" method="post">
										<div className="form-group row mb-3">
											<div className="col-sm-6 mb-3 mb-sm-0">
												<input type="text" className="form-control form-control-user" id="exampleFirstName"
													placeholder="First Name" />
											</div>
											<div className="col-sm-6">
												<input type="text" className="form-control form-control-user" id="exampleLastName"
													placeholder="Last Name" />
											</div>
										</div>
										<div className="form-group mb-3">
											<input type="email" className="form-control"
												placeholder="username" />
										</div>
										<div className="form-group mb-3">
											<input type="email" className="form-control form-control-user"
												placeholder="email" />
										</div>
										<div className="form-group row mb-3">
											<div className="col-sm-6 mb-3 mb-sm-0">
												<input type="password" className="form-control form-control-user"
													id="exampleInputPassword" placeholder="Password" />
											</div>
											<div className="col-sm-6">
												<input type="password" className="form-control form-control-user"
													id="exampleRepeatPassword" placeholder="Repeat Password" />
											</div>
										</div>
										<div className="text-center">
											<button type="submit" className="btn btn-success mb-3">
												Create Account
											</button>
										</div>
										<hr />
										<div className="text-center">
											<a href="index.html" className="btn btn-danger my-2 me-2">
												<i className="fab fa-google fa-fw"></i> Register with Google
											</a>
											<a href="index.html" className="btn btn-primary my-2">
												<i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
											</a>
										</div>
									</form>
									<hr />
									
									<div className="text-center">
										<Link to="/login" className="small">Already have an account? Login!</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>.</div>
		</div>
	)
}

