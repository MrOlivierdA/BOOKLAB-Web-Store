import { Home } from "./Pages/Home";
import { ProductsDetailsPage } from "./Pages/ProductsDetailsPage";
import { ProductsPage } from "./Pages/ProductsPage";
import { About } from "./Pages/About";
import { Cart } from "./Pages/Cart";
import { LoginPage } from "./Pages/LoginPage";
import { RegisterPage } from "./Pages/RegisterPage";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/productsdetails" element={<ProductsDetailsPage />} />
				<Route path="/products" element={<ProductsPage />} />
				<Route path="/about" element={<About />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
			</Routes>
		</>
	);
}

export default App;
