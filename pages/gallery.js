import Layout from "../components/MyLayout";
import "../styles/style.scss";
import { Row, Col, Container } from "reactstrap";
const Gallery = () => {
  return (
    <Layout>
      <Container className="mt-5">
        <Row>
          <Col>
            <img
              src="/static/images/image1.jpg"
              alt="my image"
              className="img-thumbnail shadow-lg"
            />
          </Col>
          <Col>
            <img
              src="/static/images/image2.jpg"
              alt="my image"
              className="img-thumbnail shadow-lg"
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Gallery;
