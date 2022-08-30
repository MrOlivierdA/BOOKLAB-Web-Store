import { Navbar } from "../Components/Navbar/Navbar";
import { NavbarVisitor } from "../Components/NavbarVisitor/NavbarVisitor";
import { Newsletter } from "../Components/Newsletter/Newsletter";
import { Footer } from "../Components/Footer/Footer";
import { Register } from "../Components/Register/Register";

export function RegisterPage() {
	return (
		<>
			<NavbarVisitor />
			<Register />
			<Newsletter />
			<Footer />
		</>
	);
}
