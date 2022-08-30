import { Navbar } from "../Components/Navbar/Navbar";
import { Newsletter } from "../Components/Newsletter/Newsletter";
import { Footer } from "../Components/Footer/Footer";
import { ShoppingCart } from "../Components/ShoppingCart/ShoppingCart";

export function Cart() {
	return (
		<>
			<Navbar />
			<ShoppingCart />
			<Newsletter />
			<Footer />
		</>
	);
}
