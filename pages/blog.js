import Layout from "../components/MyLayout";
import Link from "next/link";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";

import "../styles/style.scss";
const Blog = props => {
  return (
    <Layout>
      <Container className="mt-4 justify-content-end">
        <h1>مقالات : </h1>
        {props.posts.map((item, index) => {
          const date = new Date(item.createdAt);
          const href = `/blog/${++index}`;
          return (
            <Link href={href} key={index}>
              <a href={`/blog/${++index}`}>
                <div className="shadow-lg p-3 mb-5 bg-white rounded">
                  <Row>
                  <Col className="col-lg-1 col-sm-2 text-center">
                    <i className="fas fa-newspaper display-4 text-muted "></i>
                    </Col>
                    <Col>
                    <h5 className="text-primary">{item.title}</h5>
                    <p className="text-black-50 mt-2 body-preview">
                      <div
                        className="content"
                        dangerouslySetInnerHTML={{
                          __html: `${item.body
                            .split(" ")
                            .slice(0, 4)
                            .join(" ")}...`
                        }}
                      ></div>
                    </p>
                    </Col>
                      <Col className="col-lg-3 col-sm-4 align-right">
                    <span className="text-muted">
                      {
                        `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`
                      }
                    </span>
                      <i className="fas fa-clock align-center text-muted mr-2 mt-5 pt-5"></i>
                    </Col>
                  </Row>
                </div>
              </a>
            </Link>
          );
        })}
      </Container>
    </Layout>
  );
};

Blog.getInitialProps = async context => {
  let host = "";
  if (context.req != undefined) {
    host = context.req.headers.host;
  } else {
    host = window.location.host;
  }
  const posts = await axios.get(`http://${host}/api/blog`);
  return { posts: posts.data };
};

export default Blog;
