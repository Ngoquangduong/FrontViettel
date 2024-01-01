import { useEffect, useState } from "react";
import "../assets/CSS/adminheader.css";
import "../assets/CSS/Customheader.css";
import "../assets/CSS/button.css";
import { Accordion } from "react-bootstrap";
import useAdminAuthContext from "../context/AdminAuthContext";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const { admin, logout } = useAdminAuthContext();
  const [isOpen, setIsopen] = useState(false);
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="">
      <div className="container-fluid px-0">
        <nav className="navbar navbar-expand-lg  bg-nav shadow-md">
          <div className="container-fluid py-2 px-5">
            <NavLink className="navbar-brand text-primary mr-0 px-3">
              <img
                src="../../public/viettel-logo.png"
                alt=""
                className="logo"
              />
            </NavLink>
            <div className="form-inline ml-auto">
              <div className="button-62 " onClick={ToggleSidebar}>
                Quản lý
              </div>
            </div>
          </div>
        </nav>
        <div
          className={`sidebar bg-sidebar  ${isOpen == true ? "active " : ""}`}
        >
          <div className="sd-header ">
            {/* <div className="" onClick={ToggleSidebar}>Quản lý</div> */}
          </div>
          <nav className=" ">
            <ul className="">
              <li className="sidebar-items">
                <NavLink
                  end
                  to="/admin"
                  className="d-block p-3"
                  style={({ isActive }) => {
                    return {
                      background: isActive ? "#5cb85c" : "",
                      color: isActive ? "white" : "",
                    };
                  }}
                >
                  Quản lý tổng thể
                </NavLink>
              </li>
              <li
                className="nav-NavLink sidebar-items
                                "
              >
                <NavLink
                  to="/admin/usermanagment"
                  className="d-block p-3"
                  style={({ isActive }) => {
                    return {
                      background: isActive ? "#5cb85c" : "",
                      color: isActive ? "white" : "",
                    };
                  }}
                >
                  Quản lý người dùng
                </NavLink>
              </li>
              <li className=" sidebar-items">
                <NavLink
                  to="/admin/ordermanagment"
                  className="d-block p-3 "
                  style={({ isActive }) => {
                    return {
                      background: isActive ? "#5cb85c" : "",
                      color: isActive ? "white" : "",
                    };
                  }}
                >
                  Quản lý đơn hàng
                </NavLink>
              </li>
              <li className=" sidebar-items">
                <NavLink
                  to="/admin/category"
                  className="d-block p-3 "
                  style={({ isActive }) => {
                    return {
                      background: isActive ? "#5cb85c" : "",
                      color: isActive ? "white" : "",
                    };
                  }}
                >
                  Quản lý loại sản phẩm
                </NavLink>
              </li>
              <li className=" sidebar-items">
                <NavLink
                  to="/admin/productmanagment"
                  className=" d-block p-3  "
                  style={({ isActive }) => {
                    return {
                      background: isActive ? "#5cb85c" : "",
                      color: isActive ? "white" : "",
                    };
                  }}
                >
                  Quản lý sản phẩm
                </NavLink>
              </li>
              <li className=" sidebar-items">
                <NavLink
                  to="/admin/blog"
                  className=" d-block p-3  "
                  style={({ isActive }) => {
                    return {
                      background: isActive ? "#5cb85c" : "",
                      color: isActive ? "white" : "",
                    };
                  }}
                >
                  Quản lý bài đăng
                </NavLink>
              </li>

              {/* <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="sidebar-items">
                    Quản lý khác
                  </Accordion.Header>
                  <Accordion.Body className="p-0">
                    <ul>
                      <li className="sidebar-items">
                        <NavLink
                          to="/admin/ordermanagment"
                          className="d-block p-3 "
                          style={({ isActive }) => {
                            return {
                              background: isActive ? "#5cb85c" : "",
                              color: isActive ? "white" : "",
                            };
                          }}
                        >
                          Quản lý thành phố/quận/phường
                        </NavLink>
                      </li>

                      <li className="sidebar-items">
                        <NavLink
                          to="/admin/ordermanagment"
                          style={({ isActive }) => {
                            return {
                              background: isActive ? "#5cb85c" : "",
                              color: isActive ? "white" : "",
                            };
                          }}
                          className="d-block p-3 "
                        >
                          Quản lý admin
                        </NavLink>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion> */}

              {admin ? (
                <li className="sidebar-logout-items">
                  <NavLink onClick={logout} className=" d-block p-3 ">
                    Đăng xuất
                  </NavLink>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </nav>
        </div>
        <div
          className={`sidebar-overlay  ${isOpen == true ? "active " : ""}`}
          onClick={ToggleSidebar}
        ></div>
      </div>
    </div>
  );
};
export default Sidebar;
