import { Container,Row,Col } from "react-bootstrap";
import PostList from "./PostList";
const  Footer = ()=>{
return(
<>
<div style={{
	
	height:"218px",
}}  className="p-4 footer-background">
	<Container className="h-100">
		<Row className="h-100">
			<Col md="2"  className="p-2 d-flex h-100">
				<img src="/viettel-logo.png"
				width={80} height={80}
				className="m-auto ms-0"/>	
			</Col>
			<Col md="3">
				<p ><a href="" className="footer-text "> Sản phẩm dịch vụ</a></p>
			</Col>
			<Col md="3">
				<p ><a href="" className="footer-text "> Thông tin về dịch vụ trả sau</a></p>
			</Col>
			<Col md="4">
				<p ><a href="" className="footer-text ">Quy định và điều khoản</a></p>
			</Col>
		</Row>
	</Container>	
</div>
</>
)
}
export default  Footer;
