import NavBar from "./NavBar";
import Head from "./Head";
import "../styles/style.scss";

const Layout = props => (
  <div>
    <Head />
    <NavBar />
    {props.children}
    <div className="footer">
      <span>
        © 2019 <a href="http://apweb.ir">ApWeb</a> All Rights Reserved
      </span>
    </div>
  </div>
);

export default Layout;
