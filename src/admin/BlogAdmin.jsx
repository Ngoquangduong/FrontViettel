import React, { useState, useEffect } from "react";
import { Container, Table, Col, Row, Form } from "react-bootstrap";
import "../assets/CSS/form.css";
import "../assets/CSS/admin.css";
import Sidebar from "./adminheader";
import useBlogContext from "../context/BlogContext";
import DeletePopUp from "../component/DeletePopUp";
import Paginate from "../component/Pagination";
import { Editor } from "@tinymce/tinymce-react";

import { CSVLink, CSVDownload } from "react-csv";
import BlogUpdate from "../component/BlogUpdate";

const BlogAdmin = () => {
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

  const [currentBlog, setCurrentBlog] = useState([]);
  const [currentBlogPage, setCurrentBlogPage] = useState(1);
  const [BlogPerPage, setBlogPerPage] = useState(12);

  const paginate = (pageNumber) => {
    setCurrentBlogPage(pageNumber);
  };
  const handleInsertBlog = async (event) => {
    event.preventDefault();
    try {
      // await insertBlog(formData);
      await insertBlog({
        BlogContent: blogContent,
        BlogTitle: blogTitle,
        TitleImage: titleImage,
      });
      setBlogTitle("");
      setTitleImage("");
      setBlogContent(""); // Clear input after successful insertion
    } catch (e) {
      if (e.response && e.response.status === 422) {
        console.error("Validation error:", e.response.data.errors);
      }
    }
  };
  const handleDelete = (ID) => {
    deleteBlog(ID);
  };
  useEffect(() => {
    let newIndexOfLastBlog = currentBlogPage * BlogPerPage;
    let newIndexOfFirstBlog = newIndexOfLastBlog - BlogPerPage;

    setCurrentBlog(blogs.slice(newIndexOfFirstBlog, newIndexOfLastBlog));
  }, [blogs, currentBlogPage]);
  return (
    <div>
      <Sidebar />
      <Container fluid className="d-flex py-2 bg-admin">
        <Container>
          <Row>
            <Form onSubmit={handleInsertBlog} encType="multipart/form-data">
              <Row>
                <h1 className="my-3 title-table">Bài đăng</h1>
                <Col>
                  
                  <input
                    type="text"
                    className="w-100"
                    placeholder="Tiêu đề bài đăng"
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
                <Col>
                  <label htmlFor="">Ảnh bài đăng</label>
                  <input
                    type="file"
                    className="w-100"
                    placeholder="Tên loại sản phẩm"
                    onChange={(e) => setTitleImage(e.target.files[0])}
                    required
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
          <Row className="py-3">
            <Col md={12}>
              <h1 className="my-3 title-table">Danh sách các bài đăng</h1>
              <div className="table-responsive br-6">
                <Table
                  striped
                  bordered
                  hover
                  size="sm"
                  className="table-custom"
                >
                  <thead className="table-custom">
                    <tr className="table-custom">
                      <th className="table-custom">ID</th>
                      <th className="table-custom">Blog Title</th>
                      <th className="table-custom">Image Tilte</th>
                      <th className="table-custom">Nội dung</th>
                      <th className="table-custom ">
                        <p className="text-center">Thao tác</p>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="table-custom">
                    {currentBlog.map((item) => (
                      <tr key={item.BlogID} className="table-custom">
                        <>
                          <td className="table-custom-rose">{item.BlogID}</td>
                          <td className="table-custom-rose">
                            {item.BlogTitle}
                          </td>
                          <td className="table-custom-rose">
                            <img
                              src={`http://localhost:8000/storage/${item.TitleImage}`}
                              alt=""
                              height={50}
                              width={50}
                            />
                          </td>
                          <td
                            className="table-custom-rose"
                            dangerouslySetInnerHTML={{
                              __html: item.BlogContent,
                            }}
                          >
                            {/* {item.BlogContent} */}
                          </td>
                          <td className="table-custom-rose d-flex ">
                            <BlogUpdate Blog={item}></BlogUpdate>
                            <DeletePopUp
                              name={item.BlogID}
                              handle={handleDelete}
                            ></DeletePopUp>
                          </td>
                        </>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Paginate
                  dataPerPage={BlogPerPage}
                  totalData={blogs.length}
                  paginate={paginate}
                ></Paginate>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};
export default BlogAdmin;
