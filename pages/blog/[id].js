import Layout from "../../components/MyLayout";
import Link from "next/link";
import axios from "axios";
import "../../styles/style.scss";
import { Container } from "reactstrap";

const Post = props => {
  return (
    <Layout>
      <Container className="mt-5">
        <h1>{props.post.title}</h1>
        <div className="post-body">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: props.post.body }}
          >
          
          </div>
          
        </div>
      </Container>
    </Layout>
  );
};

Post.getInitialProps = async context => {
  const id = context.query.id;
  const host = context.req.headers.host;
  const post = await axios.get(`http://${host}/api/blog/${id}`);
  return { post: post.data };
};

export default Post;
