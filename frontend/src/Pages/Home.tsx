import { Navbar } from "../Components/Navbar/Navbar";
import { NavbarVisitor } from "../Components/NavbarVisitor/NavbarVisitor";
import { Header } from "../Components/Header/Header";
import { Newsletter } from "../Components/Newsletter/Newsletter";
import { Footer } from "../Components/Footer/Footer";
import { Products } from "../Components/Products/Products";
import { Sales } from "../Components/Sales/Sales";

export function Home() {
	return (
		<>
			<NavbarVisitor />
			<Header />
			<Products />
			<Sales />
			<Newsletter />
			<Footer />
		</>
	);
}
