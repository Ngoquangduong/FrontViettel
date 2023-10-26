import { Container,Row,Col } from "react-bootstrap";
import PostList from "./PostList";
const  Footer = ()=>{
return(
<>
<div style={{
	backgroundImage: "linear-gradient(290deg, #E90000 7.28%, rgba(255, 245, 246, 0.91) 7.46%, rgba(242, 232, 255, 0.46) 19.1%)",
	height:"218px",
}}  className="p-4">
	<Container className="h-100">
		<Row className="h-100">
			<Col md="2"  className="p-2 d-flex h-100">
				<img src="/viettel-logo.png"
				width={80} height={80}
				className="m-auto ms-0"/>	
			</Col>
			<Col md="3">
				<strong>Dịch vụ tiện ích</strong>
			</Col>
			<Col md="3">
				<strong>Thông tin về dịch vụ trả sau</strong>
			</Col>
			<Col md="4">
				<strong>Quy định và điều khoản</strong>
			</Col>
		</Row>
	</Container>	
</div>
</>
)
}
export default  Footer;
