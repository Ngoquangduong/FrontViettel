import { Row, Col, Card } from "react-bootstrap";
import "../assets/CSS/font.css";
import "../assets/CSS/main.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/CSS/DetailPost.css";

export default function PortCard(props) {
  // const [blogs, setBlog] = useState(props.item);
  return (
    <>
    
    <Col xs={12} sm={12} md={3} lg={3}>
        <Card style={{ height: "560px" }} className="my-2">
          <Link to={`/detail/post/${props.item.BlogID}`}>
            <img
              className="ava-post "
              src={`http://localhost:8000/storage/${props.item.TitleImage}`}
            />
          </Link>
          <Card.Body className="cardpost-body">
            <Card.Title>
              <h1 className="post-title">
                <Link to={`/detail/post/${props.item.BlogID}`}>
                  {props.item.BlogTitle}
                </Link>
              </h1>
            </Card.Title>

            <div>
              <p
                className="normal-text overflow-hidden"
                dangerouslySetInnerHTML={{
                  __html: `${props.item.BlogContent.split(" ")
                    .slice(0, 20)
                    .join(" ")}...`,
                }}
              ></p>
            </div>

           
          </Card.Body>
          <Link
              to={`/detail/post/${props.item.BlogID}`}
              className=" float-end link-text "
            >
              <p className="float-left">Xem chi tiết</p>
            </Link>
        </Card>
      </Col>
    
      
    </>
  );
}
