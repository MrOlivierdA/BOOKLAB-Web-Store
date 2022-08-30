import { Navbar } from "../Components/Navbar/Navbar";
import { Faq } from "../Components/Faq/Faq";
import { Newsletter } from "../Components/Newsletter/Newsletter";
import { Footer } from "../Components/Footer/Footer";

export function About() {
	return (
		<>
			<Navbar />
			<Faq />
			<Newsletter />
			<Footer />
		</>
	);
}
