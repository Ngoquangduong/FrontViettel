import { Container,Row,Col } from "react-bootstrap";
import PostList from "./PostList";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/CSS/main.css"
const  Footer = ()=>{
return(
<>
<div style={{
	
	height:"100%",
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
				
				<Row className=" align-items-center justify-center">
				<p className="footer-text ">Theo dõi chúng tôi trên </p>
				<div className=" text-center ms-2 p-0 icon-logo"><a href="" className="icon-logo d-block"><img src="../../public/zalo-logo.png" className="icon-logo icon-animation" alt="" /></a></div>
				<div className=" text-center ms-2 p-0 icon-logo"><a href="" className="icon-logo d-block"><img src="../../public/youtube2.png" className="icon-logo icon-animation" alt="" /></a></div>
				<div className=" text-center ms-2 p-0 icon-logo"><a href="" className="icon-logo d-block"><img src="../../public/facebook-logo-icon-vector-27990381-e1592215786624.png" className="icon-logo icon-animation" alt="" /></a></div>
				</Row>	
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
