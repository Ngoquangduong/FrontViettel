import { Row,Col, Container} from "react-bootstrap";
import "../assets/CSS/font.css"
import PostCard from  "./PostCard";
export default function PostList(){
return(
<>
	
<div   className=" pb-5 ">
	<Container className="pt-3">
	<h1  className="text-center fs-3 text-light-title">Cập nhật thông tin dịch vụ Viettel</h1>
		<Row >
			<Col  xs={12} sm={6} md={6} lg={6}><PostCard/></Col>
			<Col  xs={12} sm={6} md={6} lg={6}><PostCard/></Col>
		</Row>	
	<a href="" className=" float-end text-light more-text-light">Xem nhiều hơn</a>
	</Container>
</div>
</>
)
}
