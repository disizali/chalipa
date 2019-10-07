import Layout from "../components/MyLayout";
import Link from "next/link";
import axios from "axios";
import { Container, Col, Row } from "reactstrap";

import "../styles/style.scss";
const News = props => {
  return (
    <Layout>
      <Container className="mt-5">
        <h1>اخبار : </h1>
        {props.news.map((item, index) => {
          const date = new Date(item.createdAt);
          return (
            <Link href={`/news/${++index}`} key={index}>
              <a>
                <div className="shadow rounded p-2 mb-1 ">
                  <Row>
                    <Col className="col-lg-1 col-sm-2">
                      <i className="fas fa-bell mt-3"></i>
                    </Col>
                    <Col>
                      <h5 className="mr-5 mt-3">{item.title}</h5>
                    </Col>
                    <Col className="col-lg-3 col-sm-4">
                      <span className="text-muted">
                        {`${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`}
                      </span>
                      <i className="fas fa-clock mt-3 text-muted mr-2"></i>
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

News.getInitialProps = async context => {
  let host = "";
  if (context.req != undefined) {
    host = context.req.headers.host;
  } else {
    host = window.location.host;
  }
  const news = await axios.get(`http://${host}/api/news`);
  return { news: news.data };
};

export default News;
