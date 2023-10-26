export default function ProductList(){
return(
<>
<h1 className="" style={{
	color:"#DB2323",
	fontFamily:"Inter",
	fontSize:"28px",
	fontWeight: 400,
}}>Gói cước nổi bật</h1>
	<div style={{
	height:"320px",
	width:"260px",
	borderRadius:"10px",
	borderTop: "1px solid #E2E2E2",
	background: "linear-gradient(122deg, rgba(243, 18, 18, 0.81) 6.98%, rgba(255, 255, 255, 0.00) 7.4%, rgba(255, 255, 255, 0.19) 52.46%, rgba(255, 255, 255, 0.81) 97.94%, #E32222 99.1%)",
	boxShadow:"0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
	padding:"20px"
}}>
	<h1 className="text-center text-danger fs-3 mt-3">ST15K</h1>
	<div className="text-center p-3">
		<span style={{
		color: "#009BBD",
		fontFamily: "Inter",
		fontSize: "20px",
		fontStyle:"normal",
		fontWeight: "400",
		lineHeight: "normal"
		}}>Cước phí:</span>
		<span>15000vnd/3n</span>
	</div>
	<p>Cung cấp 2mb tốc độ cao
trong 3 ngày, hết thì truy
	cập tốc độ ruồi bu.</p>
	<div className="d-flex justify-content-center mt-5">
		<button style={{
	background:"linear-gradient(115deg, #FF3E3E 42.51%, rgba(255, 72, 72, 0.62) 122.47%)",
	color:"white",
	borderRadius:"30px",
	padding:"10px 20px",
	}}>Đăng ký</button>
	</div>
	
		
	</div>
</>
)
}
