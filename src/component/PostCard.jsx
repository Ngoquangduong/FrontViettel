import { Row,Col } from "react-bootstrap";
import "../assets/CSS/font.css"

export default function PortCard(){
return(
	<>
<div style={{
	border:"1px solid rgba(216, 216, 216, 0.96)",
	backgroundColor:"white",
	boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
	fontFamily:"Inter"
}} className=" my-3 p-3" >
<h1 style={{textAlign:"center",
color:"#C90000"
}} className="fs-4 my-3 normal-text">
			Cập nhật khuyến mãi gói ST15K
		</h1>
		<Row className="p-2">
			<Col md="5">
				<img src="../../public/viettel-logo.png"  className="" style={{height:"100%"}}/>
			</Col>
			<Col md="7">
				<p className="normal-text">Từ ngày 20/11/2023  vịt teo cập nhật gói cước ST15k cung cấp  thêm các vụ về  xem phim java, miễn cước data trên các nền tảng facebook,
				zalo, đá bóng , free tixtok, fre</p>
			<a href="/" className=" float-end link-text">Xem chi tiết</a>
			</Col>
		</Row>
		
	</div>
</>
)
}
