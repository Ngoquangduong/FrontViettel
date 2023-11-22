import Sidebar from "./adminheader";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import "../assets/CSS/admin.css"
import "../assets/CSS/form.css"

function Productedit() {
    return (
        <div>
            <Sidebar />
            <Container>
                <Row>
                    <h1 className="my-3 title-table">Sửa sản phẩm</h1>
                    <Form>
                        <Row>
                            <Col>
                                <input type="text" className="w-100" placeholder="Tên sản phẩm" required />
                                <span className="highlight"></span>
                                <span className="bar mb-4"></span>

                            </Col>

                            <Col>
                                <input type="text" className="w-100" placeholder="Giá sản phẩm" required />
                                <span className="highlight"></span>
                                <span className="bar mb-4"></span>

                            </Col>
                        </Row>



                        <Row>
                            <Col>
                                <input type="text" className="w-100" placeholder="Tốc độ đường truyền" required />
                                <span className="highlight"></span>
                                <span className="bar mb-4"></span>

                            </Col>

                            <Col>
                                <input type="text" className="w-100" placeholder="Băng thông" required />
                                <span className="highlight"></span>
                                <span className="bar mb-4"></span>

                            </Col>
                            <Col>
                                <input type="text" className="w-100" placeholder="IP tĩnh" required />
                                <span className="highlight"></span>
                                <span className="bar mb-4"></span>

                            </Col>
                            <Col>
                                <input type="text" className="w-100" placeholder="Số ngày dùng" required />
                                <span className="highlight"></span>
                                <span className="bar mb-4"></span>

                            </Col>
                        </Row>
                        <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">

                            <Form.Control as="textarea" className="border-textarea" rows={3} placeholder="Mô tả" />
                        </Form.Group>


                        <Row>
                            <Form.Select aria-label="Default select example" className="w-25 mb-4">
                                <option>Loại sản phẩm</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <Col>
                                <input type="text" className="w-100" placeholder="Tốc độ đường truyền" required />
                                <span className="highlight"></span>
                                <span className="bar mb-4"></span>

                            </Col>
                            <Col>
                                <input
                                    type="text"
                                    className="w-100"
                                    placeholder="Dịch vụ đi kèm"
                                    required
                                />
                                <span className="highlight"></span>
                                <span className="bar mb-4"></span>
                            </Col>
                        </Row>
                        <div className=""><button className="bn632-hover bn28 mb-3" type="submit">Xác nhận</button>
                            <button className="btn-filter-3 p-3">Quay về</button>
                        </div>
                    </Form>






                </Row>
            </Container>
        </div>
    );
}
export default Productedit;