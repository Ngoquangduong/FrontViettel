import { Row,Col, Container} from "react-bootstrap";
import "../assets/CSS/font.css"
import PostCard from  "./PostCard";
export default function PostList(){
return(
<>
	
<div   className=" pb-5 bg-pink">
	<Container className="pt-3">
	<h1  className="text-center fs-3 menu-title-1">Cập nhật thông tin dịch vụ Viettel</h1>
		<Row>
			<Col><PostCard/></Col>
			<Col><PostCard/></Col>
		</Row>	
	<a href="" className=" float-end link-text">Xem nhiều hơn</a>
	</Container>
</div>
</>
)
}
