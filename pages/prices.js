import Layout from "../components/MyLayout";
import Link from "next/link";
import axios from "axios";
import "../styles/style.scss";
import { Table } from "reactstrap";
import { Container } from "reactstrap";

const Prices = props => {
  return (
    <Layout>
      <Container className="mt-5">
        <h1>قیمت ها :</h1>
        <Table className="table table-striped table-light">
          <tbody>
            <tr>
              <th>#</th>
              <th>نام</th>
              <th>اندازه</th>
              <th>قیمت</th>
            </tr>
            {props.prices.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{++index}</td>
                  <td>{item.name}</td>
                  <td>{item.size}</td>
                  <td>
                  {item.price.toLocaleString()}
                  <i className="fas fa-money-bill-alt mr-2"></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </Layout>
  );
};
Prices.getInitialProps = async (context) => {
  let host = '';
  if (context.req != undefined){
     host = context.req.headers.host;
  }
  else{
    host = window.location.host;
  }
  const prices = await axios.get(`http://${host}/api/prices`);
  return { prices: prices.data };
};

export default Prices;
