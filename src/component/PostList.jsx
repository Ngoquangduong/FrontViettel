import { Row,Col, Container} from "react-bootstrap";
import PostCard from  "./PostCard";
export default function PostList(){
return(
<>
	
<div   className="bg-light pb-5">
	<Container className="pt-3">
	<h1 style={{color:"#305D9F"}} className="text-center fs-3">Cập nhật thông tin dịch vụ Viettel</h1>
		<Row>
			<Col><PostCard/></Col>
			<Col><PostCard/></Col>
		</Row>	
	<a href="" className="text-primary float-end">Xem nhiều hơn</a>
	</Container>
</div>
</>
)
}
