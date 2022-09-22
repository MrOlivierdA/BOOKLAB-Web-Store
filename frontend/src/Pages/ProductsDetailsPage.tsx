import { Navbar } from "../Components/Navbar/Navbar";
import { Newsletter } from "../Components/Newsletter/Newsletter";
import { Footer } from "../Components/Footer/Footer";
import { ProductsDetails } from "../Components/ProductsDetails/ProductsDetails";

export function ProductsDetailsPage() {
	return (
		<>
			<Navbar />
			<ProductsDetails />
			<Newsletter />
			<Footer />
		</>
	);
}
