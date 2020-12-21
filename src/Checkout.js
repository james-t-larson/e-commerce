import React from 'react'
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"
import { useStateValue } from "./StateProvider"

function Checkout() {

	const [{ basket }] = useStateValue()

	return (
		<div className="checkout">
			<div className="checkout__left">

				<img className="checkout__ad" src="./brokenImage.png" alt="" />
				{basket?.length === 0 ? (
					<div>
						<h2>Your shopping basket is empty</h2>
						<p>
							You have no items in your basket To buy one of our products click
							"Add to basket" next to the item.
                    </p>
					</div>
				) : (
						<div>
							<h2 className="checkout__title">Your Shopping Basket</h2>
							{basket?.map(item =>
								<CheckoutProduct
									id={item.id}
									title={item.title}
									image={item.image}
									price={item.price}
									rating={item.rating}
								/>
							)}
						</div>
					)}
			</div>
			{basket.length > 0 && (
				<div className="checkout__right">
					<Subtotal />
				</div>
			)}
		</div>
	)
}

export default Checkout