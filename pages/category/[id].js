import Layout from "../../components/MyLayout";
import Link from "next/link";
import "../../styles/style.scss";
import axios from "axios";
import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Container
} from "reactstrap";


const Category = props => {
  return (
    <Layout>
      <Container className="mt-4 d-flex">
        {props.products.map((item, index) => {
          return (
            <Card key={index} className="w-25 shadow-lg mr-5 ml-5">
              <CardHeader>{item.name}</CardHeader>
              <CardBody>
                <CardText>{item.description}</CardText>
                <Link href={`/product/${item.id}`}>
                  <Button color="primary">مشاهده</Button>
                </Link>
              </CardBody>
            </Card>
          );
        })}
      </Container>
    </Layout>
  );
};

Category.getInitialProps = async context => {
  let host = '';
  if (context.req != undefined){
     host = context.req.headers.host;
  }
  else{
    host = window.location.host;
  }
  console.log("here");
  const products = await axios.get(
    `http://${host}/api/category/${context.query.id}`
  );
  console.log(products.data);
  return { products: products.data };
};

export default Category;
