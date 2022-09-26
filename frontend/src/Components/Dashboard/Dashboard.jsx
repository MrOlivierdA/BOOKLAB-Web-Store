export const Dashboard = () => {
	return (
		<>
			<div className="flex-shrink max-w-full px-4 w-full sm:w-1/2 lg:w-1/4 mb-6">
				<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
					<div x-data="{ tooltips: false }" className="pt-6 px-6 relative text-sm font-semibold">
						Total Orders
						<div className="ltr:float-right rtl:float-left text-green-500">
							+12%
							<div className="absolute top-auto bottom-full mb-3" style="display: none;">
								<div className="z-40 w-32 p-2 -mb-1 text-sm leading-tight text-white bg-black rounded-lg shadow-lg text-center">Since last month</div>
								<div className="absolute transform -rotate-45 p-1 w-1 bg-black bottom-0 -mb-2 ltr:ml-6 rtl:mr-6"></div>
							</div>
						</div>
					</div>
					<div className="flex flex-row justify-between px-6 py-4">
						<div className="self-center w-14 h-14 rounded-full text-pink-500 bg-pink-100 dark:bg-pink-900 dark:bg-opacity-40 relative text-center">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 bi bi-cart3" viewBox="0 0 16 16">
								<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
							</svg>
						</div>
						<h2 className="self-center text-3xl">421</h2>
					</div>
					<div className="px-6 pb-6">
						<a className="hover:text-indigo-500 text-sm" href="#">
							View more...
						</a>
					</div>
				</div>
			</div>
			<div className="flex-shrink max-w-full px-4 w-full sm:w-1/2 lg:w-1/4 mb-6">
				<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
					<div x-data="{ tooltips: false }" className="pt-6 px-6 relative text-sm font-semibold">
						Total Sales
						<div>
							+15%
							<div className="absolute top-auto bottom-full mb-3" style="display: none;">
								<div className="z-40 w-32 p-2 -mb-1 text-sm leading-tight text-white bg-black rounded-lg shadow-lg text-center">Since last month</div>
								<div className="absolute transform -rotate-45 p-1 w-1 bg-black bottom-0 -mb-2 ltr:ml-6 rtl:mr-6"></div>
							</div>
						</div>
					</div>
					<div className="flex flex-row justify-between px-6 py-4">
						<div className="self-center w-14 h-14 rounded-full text-yellow-500 bg-yellow-100 dark:bg-yellow-900 dark:bg-opacity-40 relative text-center">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 bi bi-credit-card" viewBox="0 0 16 16">
								<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
								<path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
							</svg>
						</div>
						<h2 className="self-center text-3xl">
							<span>$</span>31K
						</h2>
					</div>
					<div className="px-6 pb-6">
						<a className="hover:text-indigo-500 text-sm" href="#">
							View more...
						</a>
					</div>
				</div>
			</div>
			<div className="flex-shrink max-w-full px-4 w-full sm:w-1/2 lg:w-1/4 mb-6">
				<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
					<div x-data="{ tooltips: false }" className="pt-6 px-6 relative text-sm font-semibold">
						New Customers
						<div className="ltr:float-right rtl:float-left text-pink-500">
							-5%
							<div className="absolute top-auto bottom-full mb-3" x-cloak>
								<div className="z-40 w-32 p-2 -mb-1 text-sm leading-tight text-white bg-black rounded-lg shadow-lg text-center">Since last month</div>
								<div className="absolute transform -rotate-45 p-1 w-1 bg-black bottom-0 -mb-2 ltr:ml-6 rtl:mr-6"></div>
							</div>
						</div>
					</div>
					<div className="flex flex-row justify-between px-6 py-4">
						<div className="self-center w-14 h-14 rounded-full text-green-500 bg-green-100 dark:bg-green-900 dark:bg-opacity-40 relative text-center">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 bi bi-person" viewBox="0 0 16 16">
								<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
							</svg>
						</div>
						<h2 className="self-center text-3xl">1.2K</h2>
					</div>
					<div className="px-6 pb-6">
						<a className="hover:text-indigo-500 text-sm" href="#">
							View more...
						</a>
					</div>
				</div>
			</div>
			<div className="flex-shrink max-w-full px-4 w-full sm:w-1/2 lg:w-1/4 mb-6">
				<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full">
					<div x-data="{ tooltips: false }" className="pt-6 px-6 relative text-sm font-semibold">
						Users Online <span className="ltr:float-right rtl:float-left w-2 h-2 rounded-full bg-green-500 mt-1 animate-pulse"></span>
					</div>
					<div className="flex flex-row justify-between px-6 py-4">
						<div className="self-center w-14 h-14 rounded-full text-indigo-500 bg-indigo-100 dark:bg-indigo-900 dark:bg-opacity-40 relative text-center">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-8 h-8 bi bi-people" viewBox="0 0 16 16">
								<path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
							</svg>
						</div>
						<h2 className="self-center text-3xl">602</h2>
					</div>
					<div className="px-6 pb-6">
						<a className="hover:text-indigo-500 text-sm" href="#">
							View more...
						</a>
					</div>
				</div>
			</div>
		</>
	);
};
