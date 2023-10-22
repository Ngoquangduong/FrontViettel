import {useState} from "react"
import { Card, Button } from "react-bootstrap"
export default function Product(props){
	const [product, setProduct] = useState(props.item)
	return(
		<Card className="product-card-img position-relative">
			{/* Card content */}
				<Card.Title className="text-light text-center uppercase position-absolute product-name w-100 py-1">{product.title}</Card.Title>
			<Card.Body className="justify-content-center align-items-center d-flex flex-column">
	
			<Card.Text className="text-light text-center">
			{product.description}

			</Card.Text>
				<Button  className="mx-auto text-dark button-62 mt-2 ">Chi tiết</Button>
			</Card.Body>
	  	</Card>
	)
}
