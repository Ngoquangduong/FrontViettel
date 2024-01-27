import { Row, Container } from "react-bootstrap";
import "../assets/CSS/font.css";
import PostCard from "./PostCard";
export default function PostList({ blogs }) {
  // const {blogs} = useBlogContext();
  // const [currentBlog, setCurrentBlog] = useState([]);

  return (
    <>
      <h1 className="text-center mt-4">Các bài viết nổi bật</h1>
      <div className=" pb-5 post-container">
        <Container className="pt-3">
          <Row className="d-flex flex-wrap">
            {blogs.map((item) => (
              <PostCard key={item.BlogID} item={item} />
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}
