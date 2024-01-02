import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SelectForm from "../component/SelectForm";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import useBlogContext from "../context/BlogContext";
import { Editor } from "@tinymce/tinymce-react";

function MyVerticallyCenteredModal(props) {
  const {
    blogs,
    blog,
    errors,
    getBlogDetail,
    insertBlog,
    updateBlog,
    deleteBlog,
  } = useBlogContext();

  const [blogTitle, setBlogTitle] = useState("");
  const [titleImage, setTitleImage] = useState("");
  const [blogContent, setBlogContent] = useState("<p>Tùng đinh</p>");
  const [text, setText] = useState("");

  const handleUpdateBlog = async (event, id) => {
    event.preventDefault();
    try {
      await updateBlog(id, {
        _method: "PATCH",
        BlogContent: blogContent,
        BlogTitle: blogTitle,
        TitleImage: titleImage,
      });
      props.onHide();
    } catch (e) {
      if (e.response && e.response.status === 422) {
        console.error("Validation error:", e.response.data.errors);
      }
    }
  };

  useEffect(() => {
    setBlogContent(props.blog.BlogContent);
    setBlogTitle(props.blog.BlogTitle);
  }, [props.show]);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Chỉnh sửa Loại Sản Phẩm
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Tên: {props.blog.BlogTitle}</h4>
        <Row>
          <Form
            onSubmit={(event) => handleUpdateBlog(event, props.blog.BlogID)}
            encType="multipart/form-data"
          >
            <Row>
              <h1 className="my-3 title-table">Bài đăng</h1>
              <Col>
                <label htmlFor="">Tiêu đề bài đăng</label>
                <input
                  type="text"
                  className="w-100"
                  placeholder="Tên loại sản phẩm"
                  value={blogTitle}
                  onChange={(e) => setBlogTitle(e.target.value)}
                  required
                />
                <span className="highlight"></span>
                {errors.BlogTitle && (
                  <span className="text-red-400 text-sm m-2 p-2">
                    {errors.BlogTitle[0]}
                  </span>
                )}
                <span className="bar mb-4"></span>
              </Col>
            </Row>
            <Row>
              <div>
                <img
                  src={`http://localhost:8000/storage/${props.blog.TitleImage}`}
                  alt=""
                  height={50}
                  width={50}
                />{" "}
              </div>
            </Row>
            <Row>
              <Col>
                <label htmlFor="">Ảnh bài đăng</label>
                <input
                  type="file"
                  className="w-100"
                  placeholder="Tên loại sản phẩm"
                  onChange={(e) => setTitleImage(e.target.files[0])}
                  //   required
                />
                <span className="highlight"></span>
                {errors.TitleImage && (
                  <span className="text-red-400 text-sm m-2 p-2">
                    {errors.TitleImage[0]}
                  </span>
                )}
                <span className="bar mb-4"></span>
              </Col>
            </Row>
            <Row>
              <Editor
                apiKey="5p95o03wask44rwei7jmm0ccgru5ypm69my8797tkmk45gnj"
                onEditorChange={(newValue, editor) => {
                  setBlogContent(newValue);
                  setText(editor.getContent({ format: "text" }));
                }}
                onInit={(evt, editor) => {
                  setText(editor.getContent({ format: "text" }));
                }}
                // initialValue="TinyMCE rich editor text"
                value={blogContent}
                init={{
                  plugins: [
                    "advlist",
                    "autolink",
                    "link",
                    "image",
                    "lists",
                    "charmap",
                    "preview",
                    "anchor",
                    "pagebreak",
                    "searchreplace",
                    "wordcount",
                    "visualblocks",
                    "visualchars",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "emoticons",
                    "template",
                    "help",
                  ],
                  toolbar:
                    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                }}
              />
              <span className="highlight"></span>
              {errors.BlogContent && (
                <span className="text-red-400 text-sm m-2 p-2">
                  {errors.BlogContent[0]}
                </span>
              )}
              <span className="bar mb-4"></span>
            </Row>
            <button type="submit" className="button-63 mb-5">
              Xác nhận
            </button>
          </Form>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button className="button-61" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function BlogUpdate({ Blog }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button className="button-63" onClick={() => setModalShow(true)}>
        Chỉnh sửa
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        blog={Blog}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
