import Layout from "../components/MyLayout";
import Link from "next/link";
import axios from "axios";
import { Container } from "reactstrap";

import "../styles/style.scss";
const News = props => {
  return (
    <Layout>
      <Container className="mt-5">
        <h1>اخبار : </h1>
        {props.news.map((item, index) => {
          console.log(item);
          return (
            <Link href={`/news/${++index}`} key={index}>
              <a>
                <div className="shadow rounded p-2 mb-1 ">
                  <h5 className="mr-5 mt-3">{item.title}</h5>
                </div>
              </a>
            </Link>
          );
        })}
      </Container>
    </Layout>
  );
};

News.getInitialProps = async (context) => {
  const host = context.req.headers.host;
  const news = await axios.get(`http://${host}/api/news`);
  return { news: news.data };
};

export default News;
