import { Container } from "react-bootstrap";
function Notfound(){
    return(
        <div>
<Container className="">
    <h1 className="notfound-text  text-center text-danger">404 Not Found</h1>
    <p className="text-center text-danger">Something went wrong ! <a href="" className="text-dark">Go back to previous page</a></p>
</Container>
        </div>
    );
}
export default Notfound;
