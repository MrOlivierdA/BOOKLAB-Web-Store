import { Link } from "react-router-dom";

export function NavbarVisitor() {
	return (
		<>
			<div className="bg-white pb-6 sm:pb-8 lg:pb-12">
				<div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
					<header className="flex justify-between items-center py-4 md:py-8 mb-8 md:mb-12 xl:mb-16">
						<a href="/" className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
							BookLab
						</a>

						<nav className="hidden lg:flex gap-12 2xl:ml-16">
							<Link to="/products" className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
								Products
							</Link>
							<Link to="/about" className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
								About
							</Link>

							<form className="hidden sm:inline-block md:hidden lg:inline-block mx-5">
								<div className="flex flex-wrap items-stretch w-full relative">
									<input
										type="text"
										className="flex-shrink flex-grow max-w-full leading-5 relative text-sm py-2 px-4 ltr:rounded-l rtl:rounded-r text-gray-800 bg-gray-100 overflow-x-auto focus:outline-none border border-gray-100 focus:border-gray-200 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
										placeholder="Search…"
									></input>
									<div className="flex -mr-px">
										<button
											className="flex items-center py-2 px-4 ltr:-ml-1 rtl:-mr-1 ltr:rounded-r rtl:rounded-l leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0"
											type="button"
										>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5">
												<circle cx="11" cy="11" r="8"></circle>
												<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
											</svg>
										</button>
									</div>
								</div>
							</form>
						</nav>
						<div className="hidden lg:flex space-x-4 items-center gap-6 2xl:ml-16 ">
							<Link to="/login" className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">
								Log In
							</Link>

							<Link
								to="/register"
								className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
							>
								Sign Up
							</Link>
						</div>

						<button type="button" className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
							</svg>
							Menu
						</button>
					</header>
				</div>
			</div>
		</>
	);
}
