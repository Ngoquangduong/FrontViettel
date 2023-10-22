import { Card, Button } from "react-bootstrap"
export default function Product(props){
	return(
		<Card className="product-card-img position-relative">
			{/* Card content */}
				<Card.Title className="text-light text-center uppercase position-absolute product-name w-100 py-1">Card Title</Card.Title>
			<Card.Body className="justify-content-center align-items-center d-flex flex-column">
	
			<Card.Text className="text-light text-center">
			Some quick example text to build on the card title and make up the
			bulk of the card's content.

			</Card.Text>
				<Button  className="mx-auto text-dark button-62 mt-2 ">Chi tiết</Button>
			</Card.Body>
	  	</Card>
	)
}
