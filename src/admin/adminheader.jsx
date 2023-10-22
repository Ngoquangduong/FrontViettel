import { useState } from "react";
import "../assets/CSS/adminheader.css";
import "../assets/CSS/Customheader.css"
import "../assets/CSS/button.css"

const Sidebar = () => {
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <div className="">
            <div className="container-fluid  px-0">
              
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
                    <div className={`sidebar  ${isOpen == true ? 'active ' : '' }`} >
                        <div className="sd-header ">
                            
                        {/* <div className="" onClick={ToggleSidebar}>Quản lý</div> */}
                        </div>
                        <nav className=" ">
                            <ul className="">
                            <li className="p-3 bg-green-900"><a href="/admin" className=" my-1 text-light">Quản lý thống kê</a></li>
                                <li className="p-3 nav-link
                                "><a href="/admin/usermanagment" className=" my-1 text-dark">Quản lý người dùng</a></li>
                                <li className="p-3"><a href="/admin/ordermanagment" className="my-1 text-dark ">Quản lý đơn hàng</a></li>
                                <li className="p-3"><a href="/admin/productmanagment" className=" my-1 text-dark ">Quản lý sản phẩm</a></li>
                                <li className="p-3 bg-rose-800"><a href="/login" className=" my-1 text-light">Đăng xuất</a></li>
                              
                            </ul>
                        </nav>
                    </div>
                    <div className={`sidebar-overlay  ${isOpen == true ? 'active ' : ''}`} onClick={ToggleSidebar}></div>
           </div>
           
        </div>
    )
}
export default Sidebar