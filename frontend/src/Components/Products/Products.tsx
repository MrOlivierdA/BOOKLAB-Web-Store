import { Link } from "react-router-dom";

export function Products() {
	return (
		<>
			<div className="bg-white py-6 sm:py-8 lg:py-12">
				<div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
					<div className="flex justify-between items-end gap-4 mb-6">
						<h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">Selected</h2>

						<Link
							to="/products"
							className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
						>
							Show more
						</Link>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
						<div>
							<Link to="/productsdetails" className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
								<img
									src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&q=75&fit=crop&w=600"
									loading="lazy"
									alt="Photo by Rachit Tank"
									className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
								/>

								<span className="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">sale</span>
							</Link>

							<div>
								<Link to="/productsdetails" className="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">
									Timely Watch
								</Link>

								<div className="flex items-end gap-2">
									<span className="text-gray-800 lg:text-lg font-bold">$15.00</span>
									<span className="text-red-500 line-through mb-0.5">$30.00</span>
								</div>
							</div>
						</div>

						<div>
							<a href="#" className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
								<img
									src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&q=75&fit=crop&w=600"
									loading="lazy"
									alt="Photo by Galina N"
									className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
								/>
							</a>

							<div>
								<a href="#" className="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">
									Fancy Plant
								</a>

								<div className="flex items-end gap-2">
									<span className="text-gray-800 lg:text-lg font-bold">$9.00</span>
								</div>
							</div>
						</div>

						<div>
							<a href="#" className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
								<img
									src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&q=75&fit=crop&w=600"
									loading="lazy"
									alt="Photo by eniko kis"
									className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
								/>
							</a>

							<div>
								<a href="#" className="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">
									Elderly Cam
								</a>

								<div className="flex items-end gap-2">
									<span className="text-gray-800 lg:text-lg font-bold">$45.00</span>
								</div>
							</div>
						</div>

						<div>
							<a href="#" className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
								<img
									src="https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&q=75&fit=crop&w=600"
									loading="lazy"
									alt="Photo by Irene Kredenets"
									className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
								/>
							</a>

							<div>
								<a href="#" className="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">
									Shiny Shoe
								</a>

								<div className="flex items-end gap-2">
									<span className="text-gray-800 lg:text-lg font-bold">$29.00</span>
								</div>
							</div>
						</div>

						<div>
							<a href="#" className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
								<img
									src="https://images.unsplash.com/photo-1528476513691-07e6f563d97f?auto=format&q=75&fit=crop&w=600"
									loading="lazy"
									alt="Photo by Charles Deluvio"
									className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
								/>
							</a>

							<div>
								<a href="#" className="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">
									Spiky Plant
								</a>

								<div className="flex items-end gap-2">
									<span className="text-gray-800 lg:text-lg font-bold">$4.00</span>
								</div>
							</div>
						</div>

						<div>
							<a href="#" className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
								<img
									src="https://images.unsplash.com/photo-1612033448550-9d6f9c17f07d?auto=format&q=75&fit=crop&w=600"
									loading="lazy"
									alt="Photo by Fernando Lavin"
									className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
								/>
							</a>

							<div>
								<a href="#" className="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">
									Wieldy Film
								</a>

								<div className="flex items-end gap-2">
									<span className="text-gray-800 lg:text-lg font-bold">$19.00</span>
								</div>
							</div>
						</div>

						<div>
							<a href="#" className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
								<img
									src="https://images.unsplash.com/photo-1579609598065-79f8e5bcfb70?auto=format&q=75&fit=crop&w=600"
									loading="lazy"
									alt="Photo by Kiran CK"
									className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
								/>
								<span className="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">sale</span>
							</a>

							<div>
								<a href="#" className="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">
									Sturdy Stand
								</a>

								<div className="flex items-end gap-2">
									<span className="text-gray-800 lg:text-lg font-bold">$12.00</span>
									<span className="text-red-500 line-through mb-0.5">$24.00</span>
								</div>
							</div>
						</div>
						<div>
							<a href="#" className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
								<img
									src="https://images.unsplash.com/photo-1619066045029-5c7e8537bd8c?auto=format&q=75&fit=crop&w=600"
									loading="lazy"
									alt="Photo by Fakurian Design"
									className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
								/>
							</a>

							<div>
								<a href="#" className="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">
									Lazy Bottle
								</a>

								<div className="flex items-end gap-2">
									<span className="text-gray-800 lg:text-lg font-bold">$9.00</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
