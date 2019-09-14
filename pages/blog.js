import Layout from "../components/MyLayout";
import Link from "next/link";
import axios from "axios";
import { Container } from "reactstrap";

import "../styles/style.scss";
const Blog = props => {
  return (
    <Layout>
      <Container className="mt-4 justify-content-end">
        <h1>مقالات : </h1>
        {props.posts.map((item, index) => {
          const href = `/blog/${++index}`;
          return (
            <Link href={href} key={index}>
              <a href={`/blog/${++index}`}>
                <div className="shadow-lg p-3 mb-5 bg-white rounded">
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
  const host = context.req.headers.host;
  const posts = await axios.get(`http://${host}/api/blog`);
  return { posts: posts.data };
};

export default Blog;
