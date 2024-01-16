import { Row, Col, Card } from "react-bootstrap";
import "../assets/CSS/font.css";
import "../assets/CSS/main.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PortCard(props) {
  // const [blogs, setBlog] = useState(props.item);
  return (
    <>
      <div
        style={{
          border: "1px solid rgba(216, 216, 216, 0.96)",
          backgroundColor: "white",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          fontFamily: "Inter",
        }}
        className=" my-3 p-3"
      >
        <a href="">
          <h1
            style={{
              textAlign: "center",
              color: "#C90000",
            }}
            className="fs-4 my-3 normal-text"
          >
            {props.item.BlogTitle}
          </h1>
        </a>
        <Row className="p-2 d-flex flex-column">
          <Col>
            <a href="">
              <img
                src={`http://localhost:8000/storage/${props.item.TitleImage}`}
                className="my-2 post-image"
                style={{ height: "100%" }}
              />
            </a>
          </Col>
          <Col>
            <div
              className="normal-text"
              dangerouslySetInnerHTML={{
                __html: `${props.item.BlogContent.split(" ")
                  .slice(0, 50)
                  .join(" ")}...`,
              }}
            ></div>
            <Link
              to={`/detail/post/${props.item.BlogID}`}
              className=" float-end link-text"
            >
              Xem chi tiết
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
}
