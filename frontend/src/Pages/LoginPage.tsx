import { Navbar } from "../Components/Navbar/Navbar";
import { NavbarVisitor } from "../Components/NavbarVisitor/NavbarVisitor";
import { Newsletter } from "../Components/Newsletter/Newsletter";
import { Footer } from "../Components/Footer/Footer";
import { Login } from "../Components/Login/Login";

export function LoginPage() {
	return (
		<>
			<NavbarVisitor />
			<Login />
			<Newsletter />
			<Footer />
		</>
	);
}
