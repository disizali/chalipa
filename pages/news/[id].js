import Layout from "../../components/MyLayout";
import axios from "axios";
import "../../styles/style.scss";
import { Container } from "reactstrap";

const News = props => {
  return (
    <Layout>
      <Container className="mt-4">
        <h1>{props.news.title}</h1>
        <div
          className="content post-body"
          dangerouslySetInnerHTML={{ __html: props.news.body }}
        ></div>
      </Container>
    </Layout>
  );
};

News.getInitialProps = async context => {
  const id = context.query.id;
  let host = '';
  if (context.req != undefined){
     host = context.req.headers.host;
  }
  else{
    host = window.location.host;
  }
  const news = await axios.get(`http://${host}/api/news/${id}`);
  return { news: news.data };
};

export default News;
