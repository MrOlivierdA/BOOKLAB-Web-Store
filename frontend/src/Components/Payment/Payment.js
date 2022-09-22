import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";

const KEY = "pk_test_51Lkjp1H0KwJmX0MSU8GxwgngaZbN4BUB6ePzgfGWTjOYGTOePEkjLIElrMdzpWBSdoOlhWDL29OLnd5FGTgXmYam000UjSjSEy";

export function Payment() {
	const [stripeToken, setStripeToken] = useState(null);

	const onToken = (token) => {
		setStripeToken(token);
	};

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const res = await axios.post("http://localhost:5000/api/checkout/payment", {
					tokenId: stripeToken.id,
					amount: 2000,
				});
				console.log(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		stripeToken && makeRequest();
	}, [stripeToken]);

	return (
		<>
			<StripeCheckout name="Booklab" image="../../Images/Booklab_logo.png" billingAddress shippingAddress description="Your total is 20€" amount={2000} token={onToken} stripeKey={KEY}>
				<button className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
					Check out
				</button>
			</StripeCheckout>
		</>
	);
}
