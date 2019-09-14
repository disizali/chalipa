import Layout from "../../components/MyLayout.js";
import axios from "axios";
import { Container } from "reactstrap";

const Product = props => {
  const { product } = props;
  return (
    <Layout>
      <Container className="mt-4">
        <h1>{product.name}</h1>
        <h5>{product.description}</h5>
        <hr />
        <div
          className="content post-body"
          dangerouslySetInnerHTML={{ __html: product.details }}
        ></div>
        <br />
        <br />
      </Container>
    </Layout>
  );
};

Product.getInitialProps = async context => {
  const product = await axios.get(
    `http://localhost:3000/api/product/${context.query.id}`
  );
  return { product: product.data };
};
export default Product;
