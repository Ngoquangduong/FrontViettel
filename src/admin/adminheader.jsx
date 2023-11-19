import { useState } from "react";
import "../assets/CSS/adminheader.css";
import "../assets/CSS/Customheader.css"
import "../assets/CSS/button.css";
import { Accordion } from "react-bootstrap";

const Sidebar = () => {
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <div className="">
            <div className="container-fluid px-0">

                <nav className="navbar navbar-expand-lg  bg-nav shadow-md">
                    <div className="container-fluid py-2 px-5">
                        <a className="navbar-brand text-primary mr-0 px-3">
                            <img src="../../public/viettel-logo.png" alt="" className="logo" />
                        </a>
                        <div className="form-inline ml-auto">
                            <div className="button-62 " onClick={ToggleSidebar} >
                                Quản lý
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={`sidebar bg-sidebar  ${isOpen == true ? 'active ' : ''}`} >
                    <div className="sd-header ">

                        {/* <div className="" onClick={ToggleSidebar}>Quản lý</div> */}
                    </div>
                    <nav className=" ">
                        <ul className="">
                            <li className="p-3 sidebar-items"><a href="/admin" className=" my-1 ">Quản lý thống kê</a></li>
                            <li className="p-3 nav-link sidebar-items
                                "><a href="/admin/usermanagment" className=" my-1 ">Quản lý người dùng</a></li>
                            <li className="p-3 sidebar-items"><a href="/admin/ordermanagment" className="my-1 ">Quản lý đơn hàng</a></li>
                            <li className="p-3 sidebar-items"><a href="/admin/productmanagment" className=" my-1  ">Quản lý sản phẩm</a></li>
                            
                            
                            
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="sidebar-items">Quản lý khác</Accordion.Header>
                                    <Accordion.Body className="p-0">
                                        <ul>
                                        <li className="p-3 sidebar-items"><a href="/admin/ordermanagment" className="my-1 ">Quản lý thành phố/quận/phường</a></li>
                                        </ul><li className="p-3 sidebar-items"><a href="/admin/ordermanagment" className="my-1 ">Quản lý admin</a></li>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            
                            <li className="p-3 sidebar-logout-items"><a href="/login" className=" my-1 ">Đăng xuất</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={`sidebar-overlay  ${isOpen == true ? 'active ' : ''}`} onClick={ToggleSidebar}></div>
            </div>

        </div>
    )
}
export default Sidebar